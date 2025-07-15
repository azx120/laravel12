import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import axios from 'axios';
import apiApp from '@/apis/api'

import { Head, Link, useForm, usePage, router } from '@inertiajs/react';
import { FormEventHandler, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import ProductsLayout from '@/layouts/products/layout';
import AppearanceTabs from '@/components/appearance-tabs';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Crear Producto',
        href: '/products/new',
    },
];



export default function CreateProducts() {
    const { data, setData, post, get, processing, errors, reset } = useForm({
        name: '',
        price: '',
        stock: '',
        category_id: '',
        slug: '',
        sku: '',
        img: null as File | null,
        gallery: [] as File[],
        variety: [],

    });

    const { categories, varietys, attributes } = usePage().props;

    const [photoInputs, setPhotoInputs] = useState([]);
    const [previews, setPreviews] = useState({});

    // Agregar nuevo input de tipo file
    const addPhotoInput = () => {
        const newId = Date.now();
        setPhotoInputs([...photoInputs, { id: newId }]);
    };

    // Eliminar un input específico
    const removePhotoInput = (id) => {
        setPhotoInputs(photoInputs.filter(input => input.id !== id));

        // Limpiar la preview si existe
        const newPreviews = { ...previews };
        delete newPreviews[id];
        setPreviews(newPreviews);
    };

    // Manejar cambio en el input file
    const handleFileChange = (id, event) => {
        const file = event.target.files[0];
        if (!file) return;

        setData('gallery', [...data.gallery, file])

        // Crear preview de la imagen
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviews({
                ...previews,
                [id]: reader.result
            });
        };
        reader.readAsDataURL(file);
    };


    const [varietys_array, setVarietysArray] = useState([]);
    const [new_variety, set_new_variety] = useState<string>('');
    const [new_attribute, set_new_attribute] = useState<Record<string, string>>({});
    const [varietys_state, set_varietys_state] = useState<any>(varietys);
    const [postVariety, set_postVariety] = useState([]);


    const addVariety = (id) => {

        let count = varietys_array.filter((e) => e.id == id)

        if (count.length == 0) {
            let variety = varietys_state.filter((e) => e.id == id)
            //let attributes = attribute_state.filter((e) => e.id_variety == id)

            setVarietysArray([...varietys_array, { 'id': variety[0].id, 'name': variety[0].name, attributes: [] }])
            //setData('variety', [...data.variety, varietys_array])
        }
    }

    const newVariety = async () => {

        try {
            const response = await apiApp.post('/varietys/create_post', { name: new_variety }, {
                /*headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    'Content-Type': 'application/json'
                }*/
            });

            set_varietys_state([...varietys_state, response.data.data]);
            setVarietysArray([...varietys_array, { 'id': response.data.data.id, 'name': response.data.data.name, attributes: [] }])
            set_new_variety('');

        } catch (error: any) {
            console.error('Error:', error.response.data);
        }
    }

    const newAttribute = async (id: any) => {


        const data = { title: new_attribute[id + '-atribute'], qty: new_attribute[id + '-atribute-qty'], price: new_attribute[id + '-atribute-price'] };

        setVarietysArray(prevVarietys => {
            return prevVarietys.map(variety => {
                if (variety.id === id) {
                    // Retorna una copia del objeto variety con el nuevo atributo agregado
                    return {
                        ...variety,
                        attributes: [...variety.attributes, data], // Copia los atributos existentes y agrega el nuevo
                    };
                }
                return variety; // Retorna los elementos no modificados tal cual
            });
        });

        set_postVariety(prevVarietys => {
            // Verificación más eficiente
            const existingIndex = prevVarietys.findIndex(v => v.id === id);

            if (existingIndex >= 0) {
                // Actualización segura con copia del array
                const updated = [...prevVarietys];
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    attributes: [...updated[existingIndex].attributes, data]
                };
                return updated;
            } else {
                // Inserción única
                return [...prevVarietys, { id, attributes: [data] }];
            }
        })
        console.log(postVariety)
        console.log(postVariety.length)


        set_new_attribute(prev => ({
            ...prev,       // Mantener las demás claves
            [id + '-atribute']: "",      // Vaciar solo esta
            [id + '-atribute-qty']: "",      // Vaciar solo esta
            [id + '-atribute-price']: "",      // Vaciar solo esta

        }));

    }
    useEffect(() => {
        setData('variety', postVariety)
    }, [postVariety]);

    const submit: FormEventHandler = (e) => {

        e.preventDefault();

        post('/products/create', {
            
           /* onFinish: () => {
                reset('name')
                reset('price')
                reset('stock')
                reset('category_id')
                reset('slug')
                reset('sku')
            },*/
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Productos" />

            <ProductsLayout>
                <div className="space-y-6">
                    <form className="flex flex-col gap-6" onSubmit={submit}>
                        <div className="flex flex-wrap">

                            <div className="w-6/12 p-4">
                                <Label htmlFor="name">Nombre</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="nombre de producto"
                                />
                            </div>
                            <div className="w-6/12 p-4">
                                <Label htmlFor="price">Precios</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    required
                                    autoFocus
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    placeholder="Precio de producto"
                                />
                            </div>
                            <div className="w-6/12 p-4">
                                <Label htmlFor="stock">Cantidad</Label>
                                <Input
                                    id="stock"
                                    type="number"
                                    required
                                    autoFocus
                                    value={data.stock}
                                    onChange={(e) => setData('stock', e.target.value)}
                                    placeholder="Cantidad de producto"
                                />
                            </div>
                            <div className="w-6/12 p-4">
                                <label htmlFor="country-select" className="block text-sm font-medium mb-1">
                                    Categoria
                                </label>
                                <Select value={data.category_id} onValueChange={(e) => setData('category_id', e)}>
                                    <SelectTrigger id="country-select" className="w-full">
                                        <SelectValue placeholder="Selecciona..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            categories.map((data) => (
                                                <SelectItem key={data.id} value={data.id}>{data.name}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>

                            </div>
                            <div className="w-6/12 p-4">
                                <Label htmlFor="slug">Slug</Label>
                                <Input
                                    id="slug"
                                    type="text"
                                    required
                                    autoFocus
                                    value={data.slug}
                                    onChange={(e) => setData('slug', e.target.value)}
                                    placeholder="categoria de producto"
                                />
                            </div>
                            <div className="w-6/12 p-4">
                                <Label htmlFor="slug">sku</Label>
                                <Input
                                    id="sku"
                                    type="text"
                                    required
                                    autoFocus
                                    value={data.sku}
                                    onChange={(e) => setData('sku', e.target.value)}
                                    placeholder="categoria de producto"
                                />
                            </div>
                            <div className="w-6/12 p-4">
                                <Label htmlFor="slug">Imagen</Label>
                                <Input
                                    id="img"
                                    type="file"
                                    required
                                    autoFocus
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            setData('img', e.target.files[0]);
                                        }
                                    }}
                                    placeholder="imagen"
                                />
                            </div>

                            <div className="w-12/12 p-4 border-t-1 border-b-1 bg-neutral-10 dark:bg-white/10">
                                <Label htmlFor="variety">Variedades</Label>
                                <div className="flex flex-wrap">
                                    <div className="w-6/12 p-4">
                                        <Label htmlFor="variety-list">Lista</Label>
                                        <Select value={''} onValueChange={(e) => addVariety(e)}>
                                            <SelectTrigger id="variety-list" className="w-full">
                                                <SelectValue placeholder="Selecciona..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {
                                                    varietys_state.map((data) => (
                                                        <SelectItem key={data.id} value={data.id}>{data.name}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="w-6/12 p-4">
                                        <Label htmlFor="slug">Nueva Variedad:</Label>
                                        <div className="flex flex-wrap">
                                            <div className="w-8/12">
                                                <Input
                                                    id="variety"
                                                    type="text"
                                                    autoFocus
                                                    value={new_variety}
                                                    onChange={(e) => set_new_variety(e.target.value)}
                                                    placeholder="categoria de producto"
                                                />
                                            </div>
                                            <div className="w-4/12">
                                                <Button className="ml-3" type="button" onClick={newVariety}>Guardar</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-12/12 border-t-1 border-b-1">
                                    {varietys_array.map((element) => (
                                        <div className="w-12/12" key={'state' + element.id}>
                                            <Label htmlFor="">Atributos de {element.name}:</Label>
                                            <div className="flex flex-wrap">
                                                {/*<div className="w-6/12 p-4">
                                                    <Label htmlFor="variety-list">Titulo de variacion</Label>
                                                    <Select value={''} onValueChange={(e) => addVariety(e)}>
                                                        <SelectTrigger id="variety-list" className="w-full">
                                                            <SelectValue placeholder="Selecciona..." />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {
                                                                element.attributes.map((data) => (
                                                                    <SelectItem key={data.id} value={data.id}>{data.name}</SelectItem>
                                                                ))
                                                            }
                                                        </SelectContent>
                                                    </Select>
                                                </div>*/}
                                                <div className="w-12/12 p-4">
                                                    {
                                                        element.attributes.map((data) => (
                                                            <div key={data.title} className="flex flex-wrap">
                                                                <div className="w-4/12">
                                                                    {data.title}
                                                                </div>
                                                                <div className="w-4/12">
                                                                    {data.qty}
                                                                </div>
                                                                <div className="w-4/12">
                                                                    {data.price} $
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="w-6/12 p-4">
                                                    <Label htmlFor="slug">Titulo de variacion</Label>
                                                    <div className="flex flex-wrap">
                                                        <div className="w-8/12">
                                                            <Input
                                                                id="atribute"
                                                                type="text"
                                                                autoFocus
                                                                value={new_attribute[element.id + '-atribute'] || ""}
                                                                onChange={(e) => set_new_attribute({ ...new_attribute, [element.id + '-atribute']: e.target.value })}
                                                                placeholder="Variacion"
                                                            />
                                                        </div>
                                                        <div className="w-4/12 pl-3">
                                                            <Input
                                                                id="atribute-qty"
                                                                type="number"
                                                                autoFocus
                                                                value={new_attribute[element.id + '-atribute-qty'] || ""}
                                                                onChange={(e) => set_new_attribute({ ...new_attribute, [element.id + '-atribute-qty']: e.target.value })}
                                                                placeholder="Cantidad ($)"
                                                            />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="w-6/12 p-4">
                                                    <Label htmlFor="slug">Precio de variacion</Label>
                                                    <div className="flex flex-wrap">
                                                        <div className="w-9/12">
                                                            <Input
                                                                id="price-atribute"
                                                                type="text"
                                                                autoFocus
                                                                value={new_attribute[element.id + '-atribute-price'] || ""}
                                                                onChange={(e) => set_new_attribute({ ...new_attribute, [element.id + '-atribute-price']: e.target.value })}
                                                                placeholder="Precio de variacion"
                                                            />
                                                        </div>
                                                        <div className="w-3/12">
                                                            <Button className="ml-3" type="button" onClick={(e) => newAttribute(element.id)}>Guardar</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-12/12 p-4 border-b-1">
                            {photoInputs.map((input) => (
                                <div key={input.id} className="inline-block mr-5">
                                    <input
                                        type="file"
                                        id={`photo-${input.id}`}
                                        accept="image/*"
                                        onChange={(e) => handleFileChange(input.id, e)}
                                    />

                                    {previews[input.id] && (
                                        <div className="photo-preview">
                                            <img
                                                src={previews[input.id]}
                                                alt="Preview"
                                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                                            />
                                        </div>
                                    )}
                                    <div>
                                        <Button type="button" onClick={() => removePhotoInput(input.id)}>
                                            -
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            <div>
                                <Button className="mt-5" type="button" onClick={addPhotoInput}>+</Button>
                            </div>
                        </div>

                        <Button type="submit">Guardar</Button>
                    </form>
                </div>
            </ProductsLayout >
        </AppLayout >
    );
}