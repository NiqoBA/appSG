'use client'

/**
 * Header del médico con su perfil y foto
 * Muestra la información del médico y el logo de SouthGenetics
 */
export default function DoctorHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Foto de perfil del médico */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg shadow-md">
            JP
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Dr. Juan Pérez</h2>
            <p className="text-sm text-gray-500">Oncólogo</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-celeste">SouthGenetics</p>
          <p className="text-xs text-gray-500">CDSS Oncológico</p>
        </div>
      </div>
    </header>
  )
}

