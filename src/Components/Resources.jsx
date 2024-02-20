import React from 'react';
import { Link } from 'react-router-dom';

import icon from "../Recourses/icon.png";

const Resources = () => {
    const recursos = [
        {
            nombre: 'ChatGPT',
            descripcion: 'Una poderosa herramienta de chat basada en IA.',
            imagen: 'https://via.placeholder.com/150',
            enlace: 'https://chat.openai.com/',
        },
        {
            nombre: 'OpenAI',
            descripcion: 'Plataforma líder en inteligencia artificial.',
            imagen: 'https://via.placeholder.com/150',
            enlace: 'https://openai.com/',
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
                <h1 className="text-3xl font-bold mb-4">Recursos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recursos.map((recurso, index) => (
                        <div key={index} className="bg-white shadow-md rounded-md p-4">
                            <img
                                src={recurso.imagen}
                                alt={recurso.nombre}
                                className="w-full h-auto mb-4 rounded-md"
                            />
                            <h2 className="text-xl font-bold mb-2">{recurso.nombre}</h2>
                            <p className="text-gray-600 mb-4">{recurso.descripcion}</p>
                            <a
                                href={recurso.enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                Ir al recurso
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
