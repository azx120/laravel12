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
import CategoriesLayout from '@/layouts/categories/layout';
import AppearanceTabs from '@/components/appearance-tabs';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categorias',
        href: '/Categories',
    },
];



export default function AllCategories() {

    const { categories } = usePage().props;
    console.log(categories)
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Productos" />
            <div className="overflow-x-auto">
                <Button><Link href={'categories/new'} prefetch>Crear</Link></Button>
            </div>
            <CategoriesLayout>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Nombre</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Precio</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Sku</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Estado</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((element: any, index: any) => {
                                return (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b border-gray-200">{element.name}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">$ {element.price}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">{element.sku}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">
                                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{(element.is_active == 1) ? "activo" : "no activo"}</span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-gray-200">
                                            <Button><Link href={'categories/'+element.id+'/edit'} prefetch>Editar</Link></Button>
                                            <button className="text-red-500 hover:text-red-700">Eliminar</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </CategoriesLayout>
        </AppLayout>
    );
}