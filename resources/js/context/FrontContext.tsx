import React, { createContext, useReducer } from 'react'
import { userReducer, Frontstate } from './FrontReducer';


type FrontContextProps = {

    cart: [] | null | '';
    modifiedCart: (data: any, cart: any, id_negocio: any) => void;
    deleteProductCart: (id: any, cart: any, id_negocio: any) => void;
    emptyCart: (id_negocio: any, cart: any) => void;
}


const initialSatate: Frontstate = {

    cart: [],
}



const FrontContex = createContext({} as FrontContextProps);


const FrontProvider = ({ children }: any) => {
    
    

    const [state, dispatch] = useReducer(userReducer, initialSatate);

       const modifiedCart = async (data: any, cart: any, id_negocio: any) => {


        let verication = cart.filter((n: any) => n.id_negocio == id_negocio);

        if (verication.length >= 1) {
            cart.map((n: any) => {
                if (n['id_negocio'] == id_negocio) {
                    let verication_product = n.productos.filter((n: any) => n.id == data.id);
                    if (verication_product.length >= 1) {
                        n.productos.map((p: any) => {
                            if (p['id'] == data.id) {
                                p['cantidad'] = p['cantidad'] + data.cantidad;
                                p['precios'] = p['precios'] + data.precios;
                            }
                        })
                    } else {
                        n.productos.push(data)
                    }
                }
            })
            //console.log(cart[0])
            dispatch({ type: 'modifiedCart', payload: { cart: cart } })
        } else {
            cart.push({
                'id_negocio': id_negocio,
                'productos': [data]
            })
            dispatch({ type: 'modifiedCart', payload: { cart: cart } })
        }
    }

    const deleteProductCart = async (id: any, cart: any, id_negocio: any) => {

        cart.map((n: any) => {

            if (n['id_negocio'] == id_negocio) {

                let verication_product = n.productos.filter((n: any) => n.id !== id);
                n['productos'] = verication_product;

            }
        })
        //console.log(cart[0])
        dispatch({ type: 'modifiedCart', payload: { cart: cart } })

    }



    const emptyCart = async (id_negocio: any, cart: any) => {
        cart.map((n: any) => {
            if (n['id_negocio'] == id_negocio) {
                n.productos = []
            }
        })
        dispatch({ type: 'modifiedCart', payload: { cart: cart } })
    }



    return (
        <FrontContex.Provider value={{
            ...state,
            modifiedCart,
            deleteProductCart,
            emptyCart,


        }} >
            {children}
        </FrontContex.Provider>
    )
}


export { FrontContex, FrontProvider }