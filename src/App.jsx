import { useState } from 'react'
import Card from './components/Card'

import Data from './utils/Data'

export default function App() {
  const tarjetas = Data()

  const [popupData, setPopupData] = useState(null)

  return (
  <div className='relative'>
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Galería de Imágenes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tarjetas.map((tarjeta) => (
          <Card key={tarjeta.id} {...tarjeta} onClick={() => setPopupData(tarjeta)} />
        ))}
      </div>
    </div>


    {popupData && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md relative mx-auto transition-all duration-300 transform scale-100 opacity-100 animate-fade-in">
          <h2 className="text-xl font-bold mb-4">{popupData.titulo}</h2>
          <img src={popupData.imagen} alt={popupData.titulo} className="w-full h-48 object-cover mb-4" />
          <p className="text-gray-600">{popupData.descripcion}</p>
          <button className="absolute top-2 right-3 text-gray-500 font-bold hover:text-black" onClick={() => setPopupData(null)}>
            &times;
          </button>
        </div>
      </div>
    )}
  </div>

  )
}
