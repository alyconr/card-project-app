import { useState, useEffect } from 'react'
import Card from './components/Card'
import axios from 'axios'

export default function App() {
  const [tarjetas, setTarjetas] = useState([])
  const [popupData, setPopupData] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3001/tarjetas')
      .then((response) => setTarjetas(response.data))
      .catch((error) => console.error('Error al obtener las tarjetas:', error))
  }, [])

console.log(tarjetas)

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Galería de Imágenes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tarjetas.map((tarjeta) => (
            <Card
              key={tarjeta.id}
              {...tarjeta}
              onClick={() => setPopupData(tarjeta)}
            />
          ))}
        </div>
      </div>

      {popupData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md relative mx-auto transition-all duration-300 transform scale-100 opacity-100 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">{popupData.titulo}</h2>
            <img
              src={popupData.imagen}
              alt={popupData.titulo}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-gray-600">{popupData.descripcion}</p>
            <button
              className="absolute top-2 right-3 text-gray-500 font-bold hover:text-black"
              onClick={() => setPopupData(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

<div className='max-m-md mx-auto p-6 border-gray-500 rounded shadow-xl'>
      <form>
        <div>
          <label>Titulo:
            <input type="text" className='w-full border p-2 rounded' placeholder="Escribe tu nombre" required/>
          </label>
        </div>
        <div>
          <label>Imagen:
            <input type="file" className='w-full border p-2 rounded' placeholder="Escribe tu nombre" required/>
          </label>
        </div>
        <div>
          <label>Descripción:
            <input type="text" className='w-full border p-2 rounded' placeholder="Escribe tu nombre" required/>
          </label>
        </div>
        <button type='submit' className='bg-blue-500 text-while px-4 py-2 rounded'>Publicar</button>
        <button type='submit' className='bg-blue-500 text-while px-4 py-2 rounded'>Borrar</button>
      </form>
    </div>
    </div>
  )
}

