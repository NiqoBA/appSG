'use client'

import { useState } from 'react'

/**
 * Componente que muestra el link de pago y permite enviarlo al paciente
 * Último paso del flujo del médico
 */
export default function PaymentLink() {
  const [linkSent, setLinkSent] = useState(false)
  const paymentUrl = 'fantasticUrl.com'

  const handleSend = () => {
    setLinkSent(true)
  }

  if (linkSent) {
    return (
      <div className="space-y-4 text-center">
        <div className="bg-celeste/10 border-l-4 border-celeste p-4 rounded-lg">
          <p className="text-celeste-dark font-medium">
            Link de pago enviado al paciente.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Enviar Link de Pago
      </h2>
      
      <div className="bg-celeste/10 border-l-4 border-celeste p-4 rounded-lg">
        <p className="text-gray-800 mb-2">
          Enviar este link de pago al paciente:
        </p>
        <p className="font-mono text-celeste-dark font-semibold text-lg">
          {paymentUrl}
        </p>
      </div>
      
      <button
        onClick={handleSend}
        className="w-full bg-celeste text-white py-3 px-6 rounded-lg hover:bg-celeste-dark transition-colors font-medium shadow-md"
      >
        Enviar
      </button>
    </div>
  )
}

