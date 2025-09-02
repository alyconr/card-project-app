export default function Card({ imagen, titulo, descripcion, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:shadow-xl"
    >
      <img src={imagen} alt={titulo} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{titulo}</h3>
        <p className="text-gray-600">{descripcion}</p>
      </div>
    </div>
  );
}
