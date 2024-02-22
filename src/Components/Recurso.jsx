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
                    className="mt-2 font-code uppercase border-[1px] border-secondary rounded-md py-2 px-4 font-bold"                >
                    <span>Ir al recurso</span>
                    <span aria-hidden="true" className="ml-1">&#8594;</span>
                </button>
            </div>
        </div>
    );
};

export default Recurso;
