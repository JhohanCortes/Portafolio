import React from 'react';

const Recurso = ({ recurso }) => {
    const { nombre, descripcion, imagen, enlace } = recurso;

    const handleClick = () => {
        window.open(enlace, '_blank');
    };

    return (
        <div className="bg-[#222222] shadow-md rounded-md p-1">
            <img
                src={imagen}
                alt={nombre}
                className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <div className="p-6">
                <h2 className="text-lg text-primary font-semibold">{nombre}</h2>
                <p className="mt-2 text-white">{descripcion}</p>
                <button
                    onClick={handleClick}
                    className="inline-flex items-center mt-4 text-white text-sm font-medium bg-blue-600 rounded px-2 py-1"
                >
                    <span className="transition duration-300 transform">Ir al recurso</span>
                    <span aria-hidden="true" className="ml-1">&#8594;</span>
                </button>
            </div>
        </div>
    );
};

export default Recurso;
