'use client'

import { useState } from 'react'
import DoctorHeader from '@/components/doctor/DoctorHeader'
import RequestTray from '@/components/doctor/RequestTray'
import CaseModal from '@/components/doctor/CaseModal'
import MedicalAssistantChat from '@/components/doctor/MedicalAssistantChat'
import OrderForm, { OrderFormData } from '@/components/doctor/OrderForm'
import GeneratedOrder from '@/components/doctor/GeneratedOrder'
import PaymentLinkView from '@/components/doctor/PaymentLinkView'

// Estados del flujo del médico
type DoctorViewState = 
  | 'requests'        // Vista de solicitudes
  | 'assistant'       // Chat del asistente médico
  | 'order-form'      // Formulario de orden
  | 'order-generated' // Orden generada
  | 'payment-link'    // Link de pago

interface PatientRequest {
  id: string
  patientName: string
  age: number
  description: string
  recommendedTest: string
  status: 'Pendiente' | 'Revisado'
  fullMessage?: string
  personalData?: {
    email?: string
    phone?: string
    document?: string
  }
}

export default function DoctorPage() {
  const [viewState, setViewState] = useState<DoctorViewState>('requests')
  const [selectedRequest, setSelectedRequest] = useState<PatientRequest | null>(null)
  const [orderData, setOrderData] = useState<OrderFormData | null>(null)
  const [recommendedTest, setRecommendedTest] = useState('Oncotype Dx Mama')
  const [showMeetingConfirmation, setShowMeetingConfirmation] = useState(false)

  const handleViewCase = (request: PatientRequest) => {
    setSelectedRequest(request)
    if (request.recommendedTest) {
      setRecommendedTest(request.recommendedTest.replace('Recomendación: ', ''))
    }
  }

  const handleCloseModal = () => {
    setSelectedRequest(null)
  }

  const handleOpenAssistant = () => {
    setViewState('assistant')
  }

  const handleScheduleMeeting = () => {
    // Simular agendar reunión (solo visual)
    setShowMeetingConfirmation(true)
    setTimeout(() => {
      setShowMeetingConfirmation(false)
    }, 3000)
  }

  const handleCreateOrder = (request?: PatientRequest) => {
    // Si viene de un caso revisado, prellenar datos
    if (request && request.recommendedTest) {
      setRecommendedTest(request.recommendedTest.replace('Recomendación: ', ''))
      setSelectedRequest(request) // Guardar para prellenar el formulario
    }
    setViewState('order-form')
  }

  const handleOrderSubmit = (data: OrderFormData) => {
    setOrderData(data)
    setViewState('order-generated')
  }

  const handleConfirmOrder = () => {
    setViewState('payment-link')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header del médico */}
      <DoctorHeader />

      {/* Contenedor principal */}
      {viewState === 'assistant' ? (
        /* Vista fullscreen del asistente */
        <MedicalAssistantChat 
          onCreateOrder={handleCreateOrder}
          onBack={() => setViewState('requests')}
        />
      ) : (
        <div className="flex flex-1 overflow-hidden">
          {/* Área de contenido principal */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-6">
              {/* Pestañas de navegación */}
              <div className="mb-6 border-b border-gray-200">
                <nav className="flex space-x-1">
                  <button
                    onClick={() => setViewState('requests')}
                    className={`px-4 py-2 font-medium text-sm transition-colors ${
                      viewState === 'requests'
                        ? 'text-celeste border-b-2 border-celeste'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Solicitudes
                  </button>
                  <button
                    onClick={() => setViewState('assistant')}
                    className={`px-4 py-2 font-medium text-sm transition-colors ${
                      viewState === 'assistant'
                        ? 'text-celeste border-b-2 border-celeste'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Asistente Clínico
                  </button>
                </nav>
              </div>

              {/* Vistas según el estado */}
              {viewState === 'requests' && (
                <RequestTray onViewCase={handleViewCase} />
              )}

              {viewState === 'order-form' && (
                <OrderForm 
                  recommendedTest={recommendedTest}
                  initialData={selectedRequest ? {
                    patientName: selectedRequest.patientName,
                    age: selectedRequest.age.toString(),
                    document: selectedRequest.personalData?.document || '',
                    diagnosis: selectedRequest.description,
                  } : undefined}
                  onSubmit={handleOrderSubmit}
                />
              )}

              {viewState === 'order-generated' && orderData && (
                <GeneratedOrder 
                  orderData={orderData}
                  onConfirm={handleConfirmOrder}
                />
              )}

              {viewState === 'payment-link' && (
                <PaymentLinkView />
              )}
            </div>
          </main>
        </div>
      )}

      {/* Modal de caso */}
      {selectedRequest && (
        <CaseModal
          request={selectedRequest}
          onClose={handleCloseModal}
          onScheduleMeeting={handleScheduleMeeting}
          onCreateOrder={() => handleCreateOrder(selectedRequest)}
        />
      )}

      {/* Confirmación de reunión confirmada */}
      {showMeetingConfirmation && (
        <div className="fixed bottom-6 right-6 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 max-w-sm">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-800">Reunión confirmada</p>
              <p className="text-sm text-gray-600 mt-1">
                Pronto te contactaremos para confirmar la fecha y hora.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
