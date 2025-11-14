'use client'

import { useState } from 'react'
import Link from 'next/link'
import HeroPaciente from '@/components/patient/HeroPaciente'
import PreocupacionButtons from '@/components/patient/PreocupacionButtons'
import ChatAsistenteMedico from '@/components/patient/ChatAsistenteMedico'
import DoctorCardsSection from '@/components/patient/DoctorCardsSection'
import EvaluationForm from '@/components/patient/EvaluationForm'

/**
 * Vista completa del paciente
 * Página minimalista y moderna tipo ChatGPT para pacientes
 */
export default function PatientPage() {
  const [showChat, setShowChat] = useState(false)
  const [showDoctorCards, setShowDoctorCards] = useState(false)
  const [showEvaluationForm, setShowEvaluationForm] = useState(false)

  const handleStartEvaluation = () => {
    setShowEvaluationForm(true)
    // Scroll suave al formulario
    setTimeout(() => {
      const formSection = document.getElementById('evaluation-form')
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handlePreocupacionSelect = () => {
    setShowChat(true)
    setShowDoctorCards(false)
  }

  // Detectar cuando hay interacciones en el chat para mostrar las cards
  const handleChatInteraction = () => {
    setShowDoctorCards(true)
    setTimeout(() => {
      const cardsSection = document.getElementById('doctor-cards')
      if (cardsSection) {
        cardsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header simple */}
      <header className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="text-celeste font-semibold text-lg">
              SouthGenetics
            </Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">CDSS Oncológico</span>
          </div>
          <Link
            href="/"
            className="text-gray-600 hover:text-celeste text-sm font-medium transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-5xl mx-auto">
        {/* Hero Section */}
        {!showChat && !showEvaluationForm && (
          <>
            <HeroPaciente onStartEvaluation={handleStartEvaluation} />
            
            {/* Botones de preocupación */}
            <PreocupacionButtons onSelect={handlePreocupacionSelect} />
          </>
        )}

        {/* Chat del asistente médico - Fullscreen */}
        {showChat && (
          <div className="fixed inset-0 z-50 bg-gray-50">
            <ChatAsistenteMedico 
              onInteraction={handleChatInteraction}
              onBack={() => setShowChat(false)}
            />
          </div>
        )}

        {/* Formulario de evaluación */}
        {showEvaluationForm && (
          <div id="evaluation-form">
            <EvaluationForm />
          </div>
        )}

        {/* Botones de navegación adicionales */}
        {!showChat && !showEvaluationForm && (
          <div className="py-8 px-4 text-center">
            <button
              onClick={() => {
                setShowChat(true)
                setTimeout(() => {
                  const chatSection = document.getElementById('chat-section')
                  if (chatSection) {
                    chatSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }, 100)
              }}
              className="text-celeste hover:text-celeste-dark font-medium"
            >
              O hablá directamente con nuestro asistente →
            </button>
          </div>
        )}
      </main>

      {/* Footer simple */}
      <footer className="bg-white border-t border-gray-200 py-6 px-4 mt-16">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-600">
          <p>SouthGenetics - Sistema de apoyo a decisiones clínicas</p>
          <p className="mt-2">No reemplaza una consulta médica profesional</p>
        </div>
      </footer>
    </div>
  )
}
