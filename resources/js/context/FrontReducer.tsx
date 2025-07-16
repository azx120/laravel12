import React, { createContext, useReducer, useState, useEffect } from 'react'
export interface Frontstate {
    cart: [] | null | '';
}

export type Frontction =

    | { type: 'modifiedCart', payload: { cart: [] } }

export const userReducer = (state: Frontstate, action: Frontction): Frontstate => {

    switch (action.type) {

        case 'modifiedCart':

            //saveCart(action.payload.cart).then((msg) => { console.log('cart save') })

            return {
                ...state,
                cart: action.payload.cart
            }



        default:

            return state



    }
}