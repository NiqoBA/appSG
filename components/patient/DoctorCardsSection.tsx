'use client'

import { useState } from 'react'

interface DoctorProfile {
  id: string
  name: string
  specialty: string
  photo: string
}

/**
 * Sección de perfiles de médicos especialistas
 * Se muestra después de que el paciente interactúa con el chat
 */
export default function DoctorCardsSection({ show }: { show: boolean }) {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)

  // Perfiles de médicos hardcodeados
  const doctors: DoctorProfile[] = [
    {
      id: '1',
      name: 'Dr. Juan Pérez',
      specialty: 'Oncólogo clínico',
      photo: 'JP', // Iniciales para avatar
    },
    {
      id: '2',
      name: 'Dra. María González',
      specialty: 'Genetista clínico / Oncogenetista',
      photo: 'MG',
    },
    {
      id: '3',
      name: 'Dra. Ana Martínez',
      specialty: 'Ginecóloga / Mastóloga',
      photo: 'AM',
    },
  ]

  const handleAgendarConsulta = (id: string) => {
    setSelectedDoctor(id)
    // Mostrar mensaje de confirmación
    setTimeout(() => {
      setSelectedDoctor(null)
    }, 3000)
  }

  if (!show) return null

  return (
    <div className="max-w-4xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        Especialistas que pueden ayudarte en tu situación
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Foto del médico */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-celeste to-celeste-dark flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {doctor.photo}
                </div>
              </div>
              
              {/* Nombre y especialidad */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {doctor.specialty}
                </p>
              </div>
              
              {/* Botón de agendar */}
              <button
                onClick={() => handleAgendarConsulta(doctor.id)}
                className="w-full bg-celeste text-white py-2 px-4 rounded-lg font-medium hover:bg-celeste-dark transition-colors text-sm shadow-md"
              >
                Agendar consulta
              </button>
              
              {/* Mensaje de confirmación */}
              {selectedDoctor === doctor.id && (
                <div className="mt-4 p-3 bg-celeste/10 border border-celeste rounded-lg">
                  <p className="text-celeste-dark text-sm font-medium text-center">
                    Pronto te contactaremos para agendar tu consulta con {doctor.name}.
                  </p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
