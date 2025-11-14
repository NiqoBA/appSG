'use client'

import { useState } from 'react'

interface ChatBoxProps {
  onRequestTest: () => void
}

/**
 * Componente del chat del médico
 * Versión ampliada y más grande para mejor experiencia
 */
export default function ChatBox({ onRequestTest }: ChatBoxProps) {
  const [input, setInput] = useState('')
  const [showResponse, setShowResponse] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setShowResponse(true)
    }
  }

  return (
    <div className="space-y-6 h-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Consulta CDSS
      </h2>
      
      {!showResponse ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe información del paciente (ej: Paciente mujer de 52 años, cáncer de mama, estadio temprano...)"
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent resize-none text-base"
          />
          <button
            type="submit"
            className="w-full bg-celeste text-white py-4 px-6 rounded-lg hover:bg-celeste-dark transition-colors font-medium text-lg shadow-md"
          >
            Enviar
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          {/* Mensaje del médico */}
          <div className="bg-gray-100 p-5 rounded-lg border-l-4 border-gray-300">
            <p className="text-gray-700 text-base leading-relaxed">{input}</p>
          </div>
          
          {/* Respuesta del sistema CDSS (hardcodeada) */}
          <div className="bg-celeste/10 border-l-4 border-celeste p-5 rounded-lg">
            <p className="text-gray-800 font-medium text-lg">
              La prueba que la paciente debe hacerse es Oncotype.
            </p>
          </div>
          
          {/* Botón para solicitar prueba */}
          <button
            onClick={onRequestTest}
            className="w-full bg-celeste text-white py-4 px-6 rounded-lg hover:bg-celeste-dark transition-colors font-medium text-lg shadow-md"
          >
            Solicitar prueba
          </button>
        </div>
      )}
    </div>
  )
}
