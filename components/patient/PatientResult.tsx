'use client'

import { useState } from 'react'
import { PatientFormData } from './PatientForm'

interface PatientResultProps {
  formData: PatientFormData
}

/**
 * Componente que muestra el resultado después de que el paciente envía su información
 * Muestra un mensaje del médico y dos botones de acción (CTAs)
 */
export default function PatientResult({ formData }: PatientResultProps) {
  const [showAppointmentMessage, setShowAppointmentMessage] = useState(false)
  const [showOrderMessage, setShowOrderMessage] = useState(false)

  const handleAppointment = () => {
    setShowAppointmentMessage(true)
    // Ocultar mensaje después de 3 segundos
    setTimeout(() => setShowAppointmentMessage(false), 3000)
  }

  const handleOrder = () => {
    setShowOrderMessage(true)
    // Ocultar mensaje después de 3 segundos
    setTimeout(() => setShowOrderMessage(false), 3000)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Resultado
      </h2>
      
      {/* Mensaje del médico */}
      <div className="bg-celeste/10 border-l-4 border-celeste p-4 rounded-lg">
        <p className="text-gray-800 font-medium text-lg">
          El médico Juan puede ayudarte.
        </p>
      </div>
      
      {/* Botones de acción (CTAs) */}
      <div className="space-y-3">
        <button
          onClick={handleAppointment}
          className="w-full bg-celeste text-white py-3 px-6 rounded-lg hover:bg-celeste-dark transition-colors font-medium shadow-md"
        >
          Agendar reunión
        </button>
        
        <button
          onClick={handleOrder}
          className="w-full bg-celeste text-white py-3 px-6 rounded-lg hover:bg-celeste-dark transition-colors font-medium shadow-md"
        >
          Solicitar órden médica
        </button>
      </div>
      
      {/* Mensajes de confirmación */}
      {showAppointmentMessage && (
        <div className="bg-celeste/10 border-l-4 border-celeste p-4 rounded-lg">
          <p className="text-celeste-dark font-medium">
            Pronto nos contactaremos para agendar tu reunión.
          </p>
        </div>
      )}
      
      {showOrderMessage && (
        <div className="bg-celeste/10 border-l-4 border-celeste p-4 rounded-lg">
          <p className="text-celeste-dark font-medium">
            Hemos iniciado el proceso para solicitar tu orden médica.
          </p>
        </div>
      )}
    </div>
  )
}

