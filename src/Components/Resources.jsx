import React from 'react';
import { Link } from 'react-router-dom';

import Recurso from './Recurso.jsx';

import back from "../Recourses/back.png";

const Resources = () => {
    const recursos = [
        {
            nombre: 'UIVERSE',
            descripcion: 'UIVERSE es una plataforma para la creación de aplicaciones web y móviles de manera rápida y sencilla.',
            imagen: 'https://uiverse.io/build/_assets/home-page-elements-GNCYSTEC.png',
            enlace: 'https://uiverse.io',
        },
        {
            nombre: 'flowbite',
            descripcion: 'Flowbite es un conjunto de herramientas y componentes de interfaz de usuario para el desarrollo web moderno.',
            imagen: 'https://flowbite.com/images/og-image.png',
            enlace: 'https://flowbite.com',
        },
        {
            nombre: 'boxicons',
            descripcion: 'Boxicons es una biblioteca de iconos vectoriales que puedes integrar fácilmente en tus proyectos web.',
            imagen: 'https://s3-alpha.figma.com/hub/file/533342083/d5ce9b94-2ced-4521-ad4f-5376f486106b-cover.png',
            enlace: 'https://boxicons.com',
        },
        {
            nombre: 'cool contrast',
            descripcion: 'Herramienta en línea que te ayuda a encontrar combinaciones de colores con buen contraste para tus proyectos de diseño.',
            imagen: 'https://res.cloudinary.com/dxarbtyux/image/upload/v1705261799/color-contrast-inspector/hero-bg.webp',
            enlace: 'https://coolcontrast.vercel.app',
        },
        {
            nombre: 'JSON Data AI',
            descripcion: 'Genera endpoints de API con datos JSON generados por IA.Obtén información sobre cualquier tema con solo un prompt.',
            imagen: 'https://www.scriptbyai.com/wp-content/uploads/2023/09/JSON-Data-AI.webp',
            enlace: 'https://www.jsondataai.com',
        },
    ];


    return (
        <div className="relative">
            <div className="fixed top-0 w-full bg-[#222222] text-secondary z-10 border-b-[1px] border-white">
                <div className="max-w-screen-lg mx-auto px-4 py-2">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link to="/">
                                <img
                                    src={back}
                                    alt="Back"
                                    className="h-9"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto top-[60px] px-4 py-20">
                <h1 className="text-3xl text-primary font-bold mb-4">Recursos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recursos.map((recurso, index) => (
                        <Recurso key={index} recurso={recurso} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
