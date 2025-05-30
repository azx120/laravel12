import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import ProductsLayout from '@/layouts/products/layout';
import AppearanceTabs from '@/components/appearance-tabs';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Crear Producto',
        href: '/products/edit',
    },
];



export default function EditProducts() {
    const { datas } = usePage().props;
    console.log(datas)
    const { data, setData, post, get, processing, errors, reset } = useForm({
        id: '',
        name: '',
        price: '',
        stock: '',
        category_id: '',
        slug: '',
        sku: '',
    });
    useEffect(() => {
   
        setData('id', datas.id)
        setData('name', datas.name)
        setData('price', datas.price)
        setData('stock', datas.stock)
        setData('category_id', datas.category_id)
        setData('slug', datas.slug)
        setData('sku', datas.sku)
      }, []);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post('/products/'+datas.id+'/update', {

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
                                <Label htmlFor="category_id">categoria</Label>
                                <Input
                                id="category_id"
                                type="text"
                                required
                                autoFocus
                                value={data.category_id}
                                onChange={(e) => setData('category_id', e.target.value)}
                                placeholder="categoria de producto"
                                />
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
                        </div>

                        
                        <Button type="submit">Guardar</Button>
                    </form>
                </div>
            </ProductsLayout>
        </AppLayout>
    );
}