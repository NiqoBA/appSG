'use client'

import { OrderFormData } from './OrderForm'

interface GeneratedOrderProps {
  orderData: OrderFormData
  onConfirm: () => void
}

/**
 * Vista de orden médica generada
 * Paso 2 del flujo - muestra la orden completa con firma
 */
export default function GeneratedOrder({ orderData, onConfirm }: GeneratedOrderProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Orden Médica Generada
      </h2>

      {/* Orden médica */}
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 space-y-6">
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Orden Médica
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <span className="font-medium text-gray-700">Paciente: </span>
            <span className="text-gray-900">{orderData.patientName}</span>
          </div>

          <div>
            <span className="font-medium text-gray-700">Edad: </span>
            <span className="text-gray-900">{orderData.age} años</span>
          </div>

          <div>
            <span className="font-medium text-gray-700">Documento: </span>
            <span className="text-gray-900">{orderData.document}</span>
          </div>

          {orderData.diagnosis && (
            <div>
              <span className="font-medium text-gray-700">Diagnóstico: </span>
              <p className="text-gray-900 mt-1">{orderData.diagnosis}</p>
            </div>
          )}

          <div>
            <span className="font-medium text-gray-700">Prueba solicitada: </span>
            <span className="text-gray-900 font-semibold">{orderData.test}</span>
          </div>

          {orderData.notes && (
            <div>
              <span className="font-medium text-gray-700">Notas del médico: </span>
              <p className="text-gray-900 mt-1">{orderData.notes}</p>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-300">
          <p className="text-gray-700 mb-6">
            Solicito la realización de la prueba indicada.
          </p>

          <div className="mt-6">
            <div className="border-t-2 border-gray-400 pt-3 inline-block">
              <p className="font-semibold text-gray-800">Dr. Juan Pérez</p>
              <p className="text-sm text-gray-600">Matrícula 000000</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onConfirm}
        className="w-full mt-6 bg-celeste text-white py-3 px-6 rounded-lg font-medium hover:bg-celeste-dark transition-colors shadow-md"
      >
        Confirmar y generar link de pago
      </button>
    </div>
  )
}
