'use client'

import { useState } from 'react'

/**
 * Vista del link de pago
 * Paso 3 del flujo - muestra el link y permite enviarlo
 */
export default function PaymentLinkView() {
  const [linkSent, setLinkSent] = useState(false)
  const paymentUrl = 'fantasticURL.com/pago/abc123'

  const handleSend = () => {
    setLinkSent(true)
  }

  if (linkSent) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Link enviado
        </h2>
        <p className="text-gray-600">
          El link de pago ha sido enviado a la paciente.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Enviá este link de pago a la paciente:
      </h2>

      <div className="bg-celeste/10 border-2 border-celeste rounded-lg p-6 mb-6 text-center">
        <p className="font-mono text-celeste-dark font-semibold text-xl break-all">
          {paymentUrl}
        </p>
      </div>

      <button
        onClick={handleSend}
        className="w-full bg-celeste text-white py-4 px-6 rounded-lg font-semibold hover:bg-celeste-dark transition-colors shadow-lg text-lg"
      >
        Enviar link al paciente
      </button>
    </div>
  )
}
