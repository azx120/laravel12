import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
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
        title: 'Crear Categoria',
        href: '/categories/new',
    },
];



export default function CreateCategories() {
    const { data, setData, post, get, processing, errors, reset } = useForm({
        name: '',
       
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post('/categories/create', {
            
            onFinish: () => {
                reset('name')
              
            },
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
                        </div>

                        
                        <Button type="submit">Guardar</Button>
                    </form>
                </div>
            </ProductsLayout>
        </AppLayout>
    );
}