'use client'

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

interface CaseModalProps {
  request: PatientRequest | null
  onClose: () => void
  onScheduleMeeting?: () => void
  onCreateOrder?: () => void
}

/**
 * Modal para ver el caso completo de un paciente
 * Muestra todos los detalles y permite abrir el asistente clínico
 */
export default function CaseModal({ request, onClose, onScheduleMeeting, onCreateOrder }: CaseModalProps) {
  if (!request) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-semibold text-gray-800">
            Caso de {request.patientName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-6">
          {/* Datos personales */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              Datos Personales
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-gray-800">
                <span className="font-medium">Nombre:</span> {request.patientName}
              </p>
              <p className="text-gray-800">
                <span className="font-medium">Edad:</span> {request.age} años
              </p>
              {request.personalData?.document && (
                <p className="text-gray-800">
                  <span className="font-medium">Documento:</span> {request.personalData.document}
                </p>
              )}
              {request.personalData?.email && (
                <p className="text-gray-800">
                  <span className="font-medium">Email:</span> {request.personalData.email}
                </p>
              )}
              {request.personalData?.phone && (
                <p className="text-gray-800">
                  <span className="font-medium">Teléfono:</span> {request.personalData.phone}
                </p>
              )}
            </div>
          </div>

          {/* Mensaje completo */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              Mensaje de la Paciente
            </h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                {request.fullMessage || request.description}
              </p>
            </div>
          </div>

          {/* Recomendación */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              Recomendación del Sistema
            </h3>
            <div className="bg-celeste/10 border-l-4 border-celeste rounded-lg p-4">
              <p className="text-gray-800 font-medium">
                {request.recommendedTest}
              </p>
            </div>
          </div>

          {/* Botones según el estado */}
          <div className="pt-4 border-t border-gray-200">
            {request.status === 'Pendiente' && onScheduleMeeting && (
              <button
                onClick={() => {
                  onScheduleMeeting()
                  onClose()
                }}
                className="w-full bg-celeste text-white py-3 px-6 rounded-lg font-medium hover:bg-celeste-dark transition-colors shadow-md"
              >
                Confirmar reunión
              </button>
            )}
            
            {request.status === 'Revisado' && onCreateOrder && (
              <button
                onClick={() => {
                  onCreateOrder()
                  onClose()
                }}
                className="w-full bg-celeste text-white py-3 px-6 rounded-lg font-medium hover:bg-celeste-dark transition-colors shadow-md"
              >
                Realizar órden médica
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
