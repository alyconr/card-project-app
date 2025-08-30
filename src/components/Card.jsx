export default function Card({imagen, titulo, descripcion, onClick}) {




    return (

        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg" onClick={onClick}>
            <img src={imagen} alt={titulo} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{titulo}</h3>
                <p className="text-gray-600">{descripcion}</p>
            </div>
        </div>
    )

}