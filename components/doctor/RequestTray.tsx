'use client'

import RequestCard from './RequestCard'

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

interface RequestTrayProps {
  onViewCase: (request: PatientRequest) => void
}

/**
 * Bandeja de solicitudes pendientes
 * Muestra todas las solicitudes de pacientes en formato de tarjetas
 */
export default function RequestTray({ onViewCase }: RequestTrayProps) {
  // Datos hardcodeados de solicitudes
  const requests: PatientRequest[] = [
    {
      id: '1',
      patientName: 'María González',
      age: 52,
      description: 'Me operaron de cáncer de mama hace dos semanas y tengo muchas dudas sobre si necesito quimioterapia o no.',
      recommendedTest: 'Recomendación: Oncotype Dx Mama',
      status: 'Pendiente',
      fullMessage: 'Hola, me operaron de cáncer de mama hace dos semanas. El médico me dijo que el tumor era pequeño y que estaba en estadio temprano, pero tengo muchas dudas sobre si necesito quimioterapia o no. Me gustaría saber qué opciones tengo.',
      personalData: {
        email: 'maria.gonzalez@email.com',
        phone: '+54 11 1234-5678',
        document: 'DNI 12345678',
      },
    },
    {
      id: '2',
      patientName: 'Ana Martínez',
      age: 45,
      description: 'Tengo antecedentes familiares de cáncer de mama y quiero saber qué estudios genéticos me corresponden.',
      recommendedTest: 'Recomendación: Estudio genético BRCA1/BRCA2',
      status: 'Pendiente',
      fullMessage: 'Buenos días. Tengo 45 años y tanto mi madre como mi hermana tuvieron cáncer de mama antes de los 50. Quiero saber qué estudios genéticos me corresponden hacer para evaluar mi riesgo.',
      personalData: {
        email: 'ana.martinez@email.com',
        phone: '+54 11 2345-6789',
        document: 'DNI 23456789',
      },
    },
    {
      id: '3',
      patientName: 'Carmen López',
      age: 38,
      description: 'Estoy en tratamiento de cáncer de mama y quiero revisar opciones de estudios complementarios.',
      recommendedTest: 'Recomendación: Oncotype Dx Mama',
      status: 'Revisado',
      fullMessage: 'Estoy en tratamiento de cáncer de mama desde hace 3 meses. Mi oncólogo mencionó que podría ser útil hacer un estudio genómico del tumor para personalizar mejor el tratamiento.',
      personalData: {
        email: 'carmen.lopez@email.com',
        phone: '+54 11 3456-7890',
        document: 'DNI 34567890',
      },
    },
  ]

  return (
    <section className="py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Solicitudes Pendientes
        </h2>
        <p className="text-gray-600 text-sm">
          Revisá las solicitudes de pacientes y evaluá cada caso
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            patientName={request.patientName}
            age={request.age}
            description={request.description}
            recommendedTest={request.recommendedTest}
            status={request.status}
            onViewCase={() => onViewCase(request)}
          />
        ))}
      </div>
    </section>
  )
}
