import React from 'react';

const Home = () => {
    // Aquí puedes cargar los productos desde una API o un archivo JSON
    const productos = [
        {
            id: 1,
            nombre: 'Camiseta Estilo Casual',
            precio: '$20.99',
            imagen: 'https://via.placeholder.com/300x300.png?text=Camiseta',
        },
        {
            id: 2,
            nombre: 'Zapatos Deportivos',
            precio: '$45.99',
            imagen: 'https://via.placeholder.com/300x300.png?text=Zapatos',
        },
        {
            id: 3,
            nombre: 'Gorra de Diseño',
            precio: '$15.99',
            imagen: 'https://via.placeholder.com/300x300.png?text=Gorra',
        },
    ];

    const categorias = ['Ropa', 'Zapatos', 'Accesorios', 'Tecnología'];

    return (
        <div>
            {/* Sección de Banner */}
            <div className="relative w-full h-[400px] bg-gradient-to-r from-blue-600 to-indigo-500">
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                        <h1 className="text-5xl font-bold">Bienvenido a Nuestro Ecommerce</h1>
                        <p className="mt-4 text-lg">Lo mejor en moda, tecnología y más</p>
                        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-200">
                            Ver Productos
                        </button>
                    </div>
                </div>
            </div>

            {/* Sección de Categorías */}
            <section className="py-10">
                <h2 className="text-center text-3xl font-semibold">Categorías</h2>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
                    {categorias.map((categoria, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 p-6 rounded-xl text-center shadow-lg hover:bg-gray-300 transition duration-300"
                        >
                            <h3 className="text-xl font-medium">{categoria}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección de Productos Destacados */}
            <section className="py-10 bg-gray-100">
                <h2 className="text-center text-3xl font-semibold">Productos Destacados</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                    {productos.map((producto) => (
                        <div
                            key={producto.id}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                className="w-full h-64 object-cover rounded-t-xl"
                            />
                            <h3 className="mt-4 text-xl font-semibold">{producto.nombre}</h3>
                            <p className="mt-2 text-lg text-gray-700">{producto.precio}</p>
                            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                                Agregar al carrito
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección de Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="text-center">
                    <p>&copy; 2025 Ecommerce. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
