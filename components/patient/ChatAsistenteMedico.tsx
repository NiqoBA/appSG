'use client'

import { useState, useRef, useEffect } from 'react'
import DoctorCardsSection from './DoctorCardsSection'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  showDoctors?: boolean
}

interface ChatAsistenteMedicoProps {
  onInteraction?: () => void
  onBack?: () => void
}

/**
 * Chat tipo ChatGPT para el asistente médico
 * Versión fullscreen que ocupa toda la pantalla
 */
export default function ChatAsistenteMedico({ onInteraction, onBack }: ChatAsistenteMedicoProps = {}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hola, soy el asistente médico de SouthGenetics. Podés contarme qué te preocupa y te ayudaré a entender qué tipo de estudio y qué especialista podrían ser adecuados para tu caso.',
      timestamp: new Date(),
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Importante: No doy diagnósticos ni reemplazo una consulta médica, pero sí puedo orientarte.',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isThinking])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isThinking) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsThinking(true)

    // Simular delay de pensamiento
    await new Promise((resolve) => setTimeout(resolve, 700))

    // Respuesta hardcodeada de la IA
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: 'Gracias por compartir lo que estás viviendo. Después de una cirugía por cáncer de mama es completamente normal sentir dudas sobre cuál es el próximo paso y si vas a necesitar quimioterapia. Muchas mujeres están en esta misma situación, y buscar claridad es lo mejor que podés hacer ahora.\n\nEn estos casos, uno de los estudios que más se utiliza —y que ofrecemos en SouthGenetics— es el Oncotype Dx Mama.\n\nEste estudio analiza la muestra de tu tumor que fue removida en la cirugía (no necesitás sacar sangre ni hacerte otra biopsia).\n\nLo que hace es ayudarte a responder dos preguntas muy importantes para vos:\n\n¿Cuál es tu riesgo real de que el cáncer vuelva?\n\n¿La quimioterapia te daría un beneficio concreto o no sería necesaria?\n\nEl resultado te da un "puntaje de recurrencia" que permite personalizar tu tratamiento y evitar quimioterapia cuando no aporta beneficio, o confirmar cuándo realmente sí puede ayudarte.\n\nEste estudio no reemplaza a tu oncólogo, pero sí aporta información muy valiosa para que puedas tomar una decisión más tranquila y basada en evidencia.\n\nSi querés, puedo mostrarte especialistas que pueden acompañarte en este proceso y ayudarte a confirmar si este estudio es adecuado para tu caso.',
      timestamp: new Date(),
      showDoctors: true, // Marcar que este mensaje debe mostrar los médicos
    }

    setIsThinking(false)
    setMessages((prev) => [...prev, assistantMessage])
    
    // Notificar que hubo una interacción
    if (onInteraction) {
      setTimeout(() => {
        onInteraction()
      }, 500)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header del chat */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              Hablá con nuestro asistente médico
            </h2>
            <p className="text-sm text-gray-600">
              Escribí en lenguaje natural qué te preocupa y nuestro asistente, basado en guías 
              clínicas internacionales como NCCN, te orientará sobre qué tipo de especialista 
              puede ayudarte. No reemplaza una consulta médica.
            </p>
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className="ml-4 p-2 text-gray-600 hover:text-celeste hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              title="Volver al inicio"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Área de mensajes - ocupa todo el espacio disponible */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message) => (
            <div key={message.id}>
              <div
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
              {message.role === 'assistant' && (
                <div className="w-10 h-10 rounded-full bg-celeste flex items-center justify-center text-white font-semibold text-base mr-3 flex-shrink-0">
                  IA
                </div>
              )}
                <div
                  className={`max-w-[80%] rounded-lg px-5 py-4 ${
                    message.role === 'user'
                      ? 'bg-celeste text-white'
                      : 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap text-lg leading-relaxed">
                    {message.content.split('Oncotype Dx Mama').map((part, index, array) => 
                      index === array.length - 1 ? (
                        part
                      ) : (
                        <span key={index}>
                          {part}
                          <strong>Oncotype Dx Mama</strong>
                        </span>
                      )
                    )}
                  </p>
                </div>
                {message.role === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-base ml-3 flex-shrink-0">
                    Tú
                  </div>
                )}
              </div>

              {/* Mostrar PDF adjunto y médicos después de la respuesta de la IA */}
              {message.role === 'assistant' && message.showDoctors && (
                <div className="mt-4 ml-11">
                  {/* Simulación de PDF adjunto */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4 max-w-md">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate">
                          Info-Oncotype.pdf
                        </p>
                        <p className="text-xs text-gray-500">
                          Documento adjunto
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cards de médicos */}
                  <div className="mt-6">
                    <DoctorCardsSection show={true} />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Indicador de "pensando" */}
          {isThinking && (
            <div className="flex justify-start">
              <div className="w-10 h-10 rounded-full bg-celeste flex items-center justify-center text-white font-semibold text-base mr-3 flex-shrink-0">
                IA
              </div>
              <div className="bg-white border border-gray-200 rounded-lg px-5 py-4 shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input de chat fijo abajo */}
      <div className="bg-white border-t border-gray-200 px-4 py-4 flex-shrink-0">
        <form onSubmit={handleSend} className="max-w-3xl mx-auto">
          <div className="flex items-end space-x-2">
            {/* Botón de audio */}
            <button
              type="button"
              className="p-3 text-gray-500 hover:text-celeste hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              title="Enviar audio"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSend(e)
                }
              }}
              placeholder="Ejemplo: Tengo 42 años, mi mamá y mi tía tuvieron cáncer de mama antes de los 50…"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent resize-none"
              rows={2}
              disabled={isThinking}
            />
            <button
              type="submit"
              disabled={!input.trim() || isThinking}
              className="bg-celeste text-white px-6 py-3 rounded-lg font-medium hover:bg-celeste-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
