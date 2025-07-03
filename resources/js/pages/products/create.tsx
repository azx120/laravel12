import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useState  } from 'react';
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
        sku:'',
        img:null as File | null,
        gallery:[] as File[],
    });

    const { categories } = usePage().props;

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        //console.log(data)
        post('/products/create', {
            
            onFinish: () => {
                reset('name')
                reset('price')
                reset('stock')
                reset('category_id')
                reset('slug')
                reset('sku')
            },
        });
    };

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
    const newPreviews = {...previews};
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
                                        <SelectValue  placeholder="Selecciona..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            categories.map((data)=>(
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

                            <div className="w-12/12 p-4">
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
                        </div>

                        
                        <Button type="submit">Guardar</Button>
                    </form>
                </div>
            </ProductsLayout>
        </AppLayout>
    );
}