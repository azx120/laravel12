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
import CategoriesLayout from '@/layouts/categories/layout';
import AppearanceTabs from '@/components/appearance-tabs';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Editar Categoria',
        href: '/categories/edit',
    },
];



export default function EditCategories() {
    const { datas } = usePage().props;
    console.log(datas)
    const { data, setData, post, get, processing, errors, reset } = useForm({
        id: '',
        name: '',
       
    });
    useEffect(() => {
   
        setData('id', datas.id)
        setData('name', datas.name)
        
      }, []);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post('/categories/'+datas.id+'/update', {

        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Productos" />

            <CategoriesLayout>
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
            </CategoriesLayout>
        </AppLayout>
    );
}