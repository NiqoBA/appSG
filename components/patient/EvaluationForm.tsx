'use client'

import { useState } from 'react'

/**
 * Formulario simple de evaluación
 * Permite al paciente enviar su información para ser contactado
 */
export default function EvaluationForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pais: '',
    situacion: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular delay de envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-celeste/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-celeste" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              El médico Juan puede ayudarte
            </h3>
            <p className="text-gray-600 mb-6">
              Pronto nos contactaremos para orientarte sobre los próximos pasos.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({ nombre: '', email: '', pais: '', situacion: '' })
              }}
              className="text-celeste hover:text-celeste-dark font-medium"
            >
              Enviar otra evaluación
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Empezar evaluación
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="pais" className="block text-sm font-medium text-gray-700 mb-1">
              País
            </label>
            <select
              id="pais"
              value={formData.pais}
              onChange={(e) => handleChange('pais', e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent"
            >
              <option value="">Selecciona un país</option>
              <option value="AR">Argentina</option>
              <option value="CL">Chile</option>
              <option value="CO">Colombia</option>
              <option value="MX">México</option>
              <option value="PE">Perú</option>
              <option value="UY">Uruguay</option>
              <option value="OT">Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="situacion" className="block text-sm font-medium text-gray-700 mb-1">
              Contanos brevemente tu situación
            </label>
            <textarea
              id="situacion"
              value={formData.situacion}
              onChange={(e) => handleChange('situacion', e.target.value)}
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent resize-none"
              placeholder="Describe tu situación, síntomas o preocupaciones..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-celeste text-white py-3 px-6 rounded-lg font-medium hover:bg-celeste-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar evaluación'}
          </button>
        </form>
      </div>
    </section>
  )
}

