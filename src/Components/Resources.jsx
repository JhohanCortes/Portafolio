import React from 'react';
import { Link } from 'react-router-dom';

import Recurso from './Recurso.jsx';

import icon from "../Recourses/icon.png";

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
            descripcion: 'flowbite es un conjunto de herramientas y componentes de interfaz de usuario para el desarrollo web moderno.',
            imagen: 'https://flowbite.com/images/og-image.png',
            enlace: 'https://flowbite.com',
        },
        {
            nombre: 'boxicons',
            descripcion: 'boxicons es una biblioteca de iconos vectoriales que puedes integrar fácilmente en tus proyectos web.',
            imagen: 'https://s3-alpha.figma.com/hub/file/533342083/d5ce9b94-2ced-4521-ad4f-5376f486106b-cover.png',
            enlace: 'https://boxicons.com',
        },
        {
            nombre: 'cool contrast',
            descripcion: 'cool contrast es una herramienta en línea que te ayuda a encontrar combinaciones de colores con buen contraste para tus proyectos de diseño.',
            imagen: 'https://res.cloudinary.com/dxarbtyux/image/upload/v1705261799/color-contrast-inspector/hero-bg.webp',
            enlace: 'https://coolcontrast.vercel.app',
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
                                    src={icon}
                                    alt="Back"
                                    className="w-9 h-9"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" className="fixed top-0 left-0 m-4">
                <img
                    src={icon}
                    alt="Back"
                    className="w-9 h-9"
                />
            </Link>
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
