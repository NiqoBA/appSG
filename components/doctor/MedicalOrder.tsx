'use client'

import { OrderData } from './OrderForm'

interface MedicalOrderProps {
  orderData: OrderData
  onConfirm: () => void
}

/**
 * Componente que muestra la orden médica generada
 * Incluye los datos del paciente y la firma del médico (hardcodeada)
 */
export default function MedicalOrder({ orderData, onConfirm }: MedicalOrderProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Orden médica para prueba Oncotype
      </h2>
      
      {/* Orden médica virtual */}
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 space-y-4">
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Orden médica para prueba Oncotype
          </h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <span className="font-medium text-gray-700">Nombre de la paciente: </span>
            <span className="text-gray-900">{orderData.patientName}</span>
          </div>
          
          <div>
            <span className="font-medium text-gray-700">Documento o ID: </span>
            <span className="text-gray-900">{orderData.documentId}</span>
          </div>
          
          <div>
            <span className="font-medium text-gray-700">Edad: </span>
            <span className="text-gray-900">{orderData.age} años</span>
          </div>
          
          {orderData.diagnosis && (
            <div>
              <span className="font-medium text-gray-700">Diagnóstico / Comentarios: </span>
              <p className="text-gray-900 mt-1">{orderData.diagnosis}</p>
            </div>
          )}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-300">
          <p className="text-gray-700 mb-4">
            Solicito la realización de la prueba Oncotype para la paciente descrita.
          </p>
          
          <div className="mt-6">
            <div className="border-t-2 border-gray-400 pt-2 inline-block">
              <p className="font-semibold text-gray-800">Dr. Juan Pérez</p>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={onConfirm}
        className="w-full bg-celeste text-white py-3 px-6 rounded-lg hover:bg-celeste-dark transition-colors font-medium shadow-md"
      >
        Confirmar
      </button>
    </div>
  )
}

