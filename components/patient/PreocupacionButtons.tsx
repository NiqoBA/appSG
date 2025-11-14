'use client'

import { useState } from 'react'

interface PreocupacionButtonsProps {
  onSelect: (preocupacion: string) => void
}

/**
 * Botones de "Qué te preocupa hoy"
 * Permite al paciente seleccionar rápidamente su situación
 */
export default function PreocupacionButtons({ onSelect }: PreocupacionButtonsProps) {
  const [selected, setSelected] = useState<string | null>(null)

  const preocupaciones = [
    {
      id: 'cancer-tratamiento',
      text: 'Tengo cáncer o estoy en tratamiento',
    },
    {
      id: 'familia-cancer',
      text: 'Hay muchos casos de cáncer en mi familia',
    },
    {
      id: 'embarazo',
      text: 'Estoy embarazada o planeando un embarazo',
    },
    {
      id: 'informarme',
      text: 'Solo quiero informarme',
    },
  ]

  const handleClick = (id: string) => {
    setSelected(id)
    onSelect(id)
    // Scroll suave hacia el chat
    setTimeout(() => {
      const chatSection = document.getElementById('chat-section')
      if (chatSection) {
        chatSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        ¿Qué te preocupa hoy?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {preocupaciones.map((preocupacion) => (
          <button
            key={preocupacion.id}
            onClick={() => handleClick(preocupacion.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selected === preocupacion.id
                ? 'border-celeste bg-celeste/10 shadow-md'
                : 'border-gray-200 bg-white hover:border-celeste/50 hover:shadow-sm'
            }`}
          >
            <p className="text-gray-800 font-medium">{preocupacion.text}</p>
          </button>
        ))}
      </div>
    </section>
  )
}

