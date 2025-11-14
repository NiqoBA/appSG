'use client'

interface TestInfoProps {
  onCreateOrder: () => void
}

/**
 * Componente que muestra el perfil completo de la prueba Oncotype
 * Incluye foto, descripción detallada y precio
 */
export default function TestInfo({ onCreateOrder }: TestInfoProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Información de la prueba Oncotype
      </h2>
      
      {/* Perfil de la prueba con foto */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <div className="flex items-start space-x-6">
          {/* Foto/Logo de la prueba */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-celeste to-celeste-dark flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">O</span>
            </div>
          </div>
          
          {/* Información de la prueba */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Oncotype DX
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              La prueba Oncotype DX es un análisis genómico que evalúa la expresión de 21 genes 
              en el tejido tumoral del cáncer de mama. Esta prueba ayuda a determinar el riesgo 
              de recurrencia y la probabilidad de beneficio de la quimioterapia adyuvante, 
              permitiendo una toma de decisiones más personalizada para cada paciente.
            </p>
            
            {/* Precio */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-baseline space-x-2">
                <span className="text-sm text-gray-500">Precio:</span>
                <span className="text-2xl font-bold text-celeste-dark">
                  $2,500 USD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botón para crear orden */}
      <button
        onClick={onCreateOrder}
        className="w-full bg-celeste text-white py-4 px-6 rounded-lg hover:bg-celeste-dark transition-colors font-medium text-lg shadow-md"
      >
        Crear orden médica
      </button>
    </div>
  )
}
