'use client'

import { useState } from 'react'

interface PatientFormProps {
  onSubmit: (data: PatientFormData) => void
}

export interface PatientFormData {
  name: string
  email: string
  situation: string
}

/**
 * Formulario del paciente
 * Permite al paciente describir su situación y proporcionar información básica
 */
export default function PatientForm({ onSubmit }: PatientFormProps) {
  const [formData, setFormData] = useState<PatientFormData>({
    name: '',
    email: '',
    situation: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.situation.trim()) {
      onSubmit(formData)
    }
  }

  const handleChange = (field: keyof PatientFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Cuéntanos tu situación
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre (opcional)
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent"
            placeholder="Tu nombre"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email (opcional)
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent"
            placeholder="tu@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="situation" className="block text-sm font-medium text-gray-700 mb-1">
            Describe tu situación o síntomas
          </label>
          <textarea
            id="situation"
            value={formData.situation}
            onChange={(e) => handleChange('situation', e.target.value)}
            required
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent resize-none"
            placeholder="Describe tu situación actual, síntomas o cualquier información relevante..."
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-celeste text-white py-3 px-6 rounded-lg hover:bg-celeste-dark transition-colors font-medium shadow-md"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

