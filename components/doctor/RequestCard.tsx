'use client'

interface RequestCardProps {
  patientName: string
  age: number
  description: string
  recommendedTest: string
  status: 'Pendiente' | 'Revisado'
  onViewCase: () => void
}

/**
 * Tarjeta de solicitud de paciente
 * Muestra información básica y permite ver el caso completo
 */
export default function RequestCard({
  patientName,
  age,
  description,
  recommendedTest,
  status,
  onViewCase,
}: RequestCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {patientName}
          </h3>
          <p className="text-sm text-gray-500">{age} años</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'Pendiente'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-green-100 text-green-800'
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-2">
        {description}
      </p>

      <div className="bg-celeste/10 border-l-4 border-celeste p-3 rounded mb-4">
        <p className="text-sm font-medium text-gray-800">
          {recommendedTest}
        </p>
      </div>

      <button
        onClick={onViewCase}
        className="w-full bg-celeste text-white py-2 px-4 rounded-lg font-medium hover:bg-celeste-dark transition-colors text-sm shadow-md"
      >
        Ver caso
      </button>
    </div>
  )
}
