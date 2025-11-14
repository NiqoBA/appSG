'use client'

import { useState } from 'react'

interface OrderFormProps {
  recommendedTest: string
  initialData?: {
    patientName?: string
    age?: string
    document?: string
    diagnosis?: string
  }
  onSubmit: (data: OrderFormData) => void
}

export interface OrderFormData {
  patientName: string
  age: string
  document: string
  diagnosis: string
  test: string
  notes: string
}

/**
 * Formulario para crear orden médica
 * Paso 1 del flujo de creación de orden
 */
export default function OrderForm({ recommendedTest, initialData, onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    patientName: initialData?.patientName || '',
    age: initialData?.age || '',
    document: initialData?.document || '',
    diagnosis: initialData?.diagnosis || '',
    test: recommendedTest,
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.patientName && formData.age && formData.document) {
      onSubmit(formData)
    }
  }

  const handleChange = (field: keyof OrderFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Crear Orden Médica
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre de la paciente *
            </label>
            <input
              type="text"
              id="patientName"
              value={formData.patientName}
              onChange={(e) => handleChange('patientName', e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent"
              placeholder="Ej: María González"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
              Edad *
            </label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={(e) => handleChange('age', e.target.value)}
              required
              min="1"
              max="120"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent"
              placeholder="Ej: 52"
            />
          </div>
        </div>

        <div>
          <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-2">
            Documento / ID *
          </label>
          <input
            type="text"
            id="document"
            value={formData.document}
            onChange={(e) => handleChange('document', e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent"
            placeholder="Ej: DNI 12345678"
          />
        </div>

        <div>
          <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700 mb-2">
            Diagnóstico descripto
          </label>
          <textarea
            id="diagnosis"
            value={formData.diagnosis}
            onChange={(e) => handleChange('diagnosis', e.target.value)}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent resize-none"
            placeholder="Ej: Cáncer de mama, estadio temprano, post-cirugía..."
          />
        </div>

        <div>
          <label htmlFor="test" className="block text-sm font-medium text-gray-700 mb-2">
            Prueba recomendada
          </label>
          <input
            type="text"
            id="test"
            value={formData.test}
            disabled
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
            Notas del médico
          </label>
          <textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent resize-none"
            placeholder="Observaciones adicionales..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-celeste text-white py-3 px-6 rounded-lg font-medium hover:bg-celeste-dark transition-colors shadow-md"
        >
          Generar Orden Médica
        </button>
      </form>
    </div>
  )
}
