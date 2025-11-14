'use client'

import { useState, useRef, useEffect } from 'react'
import ChatSidebar from './ChatSidebar'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface Chat {
  id: string
  patientName: string
  lastMessage: string
  timestamp: string
  isActive: boolean
}

interface MedicalAssistantChatProps {
  onCreateOrder: () => void
  onBack?: () => void
}

/**
 * Chat del asistente médico
 * Diseño fullscreen similar al de pacientes pero con sidebar de chats
 * Completamente independiente de las solicitudes pendientes
 */
export default function MedicalAssistantChat({ onCreateOrder, onBack }: MedicalAssistantChatProps) {
  // Chats independientes del médico (no relacionados con solicitudes)
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      patientName: 'Nueva consulta',
      lastMessage: 'Iniciar nueva conversación...',
      timestamp: 'Ahora',
      isActive: true,
    },
  ])

  const [activeChatId, setActiveChatId] = useState('1')
  const [showPatientNameInput, setShowPatientNameInput] = useState(true)
  const [patientName, setPatientName] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [showOrderButton, setShowOrderButton] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isThinking])

  const handleStartChat = () => {
    if (!patientName.trim()) return

    // Agregar mensajes iniciales
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: 'Hola, soy tu asistente clínico. Escribí la situación de la paciente y te ayudaré a recomendar el estudio más adecuado basado en guías clínicas internacionales de NCCN y ASCO.',
        timestamp: new Date(),
      },
      {
        id: '2',
        role: 'assistant',
        content: 'Podés describir el caso clínico, antecedentes, diagnóstico y cualquier información relevante para la recomendación.',
        timestamp: new Date(),
      },
    ])

    // Actualizar el chat activo con el nombre de la paciente
    setChats(prev => prev.map(chat => 
      chat.id === activeChatId 
        ? { ...chat, patientName: patientName.trim(), lastMessage: 'Conversación iniciada', isActive: true }
        : { ...chat, isActive: false }
    ))

    setShowPatientNameInput(false)
  }

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
    
    // Actualizar último mensaje en el sidebar
    setChats(prev => prev.map(chat => 
      chat.id === activeChatId 
        ? { ...chat, lastMessage: input.trim().substring(0, 50) + '...', timestamp: 'Ahora' }
        : chat
    ))

    setInput('')
    setIsThinking(true)
    setShowOrderButton(false)

    // Simular delay de pensamiento
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Respuesta hardcodeada de la IA
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: 'Según lo que describe, una prueba recomendada es Oncotype Dx Mama, que analiza la muestra de la cirugía para estimar el riesgo de recurrencia y si la quimioterapia aportaría un beneficio real. Este estudio está disponible en SouthGenetics.',
      timestamp: new Date(),
    }

    setIsThinking(false)
    setMessages((prev) => [...prev, assistantMessage])
    setShowOrderButton(true)
  }

  const handleSelectChat = (chatId: string) => {
    setActiveChatId(chatId)
    const selectedChat = chats.find(chat => chat.id === chatId)
    
    if (selectedChat?.patientName === 'Nueva consulta' || !selectedChat?.patientName) {
      setShowPatientNameInput(true)
      setPatientName('')
      setMessages([])
    } else {
      setShowPatientNameInput(false)
      setPatientName(selectedChat.patientName)
      // Resetear mensajes cuando cambias de chat (simulación)
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: 'Hola, soy tu asistente clínico. Escribí la situación de la paciente y te ayudaré a recomendar el estudio más adecuado basado en guías clínicas internacionales de NCCN y ASCO.',
          timestamp: new Date(),
        },
        {
          id: '2',
          role: 'assistant',
          content: 'Podés describir el caso clínico, antecedentes, diagnóstico y cualquier información relevante para la recomendación.',
          timestamp: new Date(),
        },
      ])
    }
    setShowOrderButton(false)
    setInput('')
  }

  const handleNewChat = () => {
    const newChatId = Date.now().toString()
    const newChat: Chat = {
      id: newChatId,
      patientName: 'Nueva consulta',
      lastMessage: 'Iniciar nueva conversación...',
      timestamp: 'Ahora',
      isActive: false,
    }
    setChats(prev => prev.map(chat => ({ ...chat, isActive: false })).concat(newChat))
    setActiveChatId(newChatId)
    setShowPatientNameInput(true)
    setPatientName('')
    setMessages([])
    setShowOrderButton(false)
    setInput('')
  }

  const activeChat = chats.find(chat => chat.id === activeChatId)

  return (
    <div className="fixed inset-0 z-40 bg-gray-50 flex flex-col">
      {/* Header del chat */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              Asistente Médico
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              Describí la situación clínica para recibir recomendaciones basadas en guías clínicas
            </p>
            <p className="text-xs text-gray-500">
              Información basada en guías de NCCN y ASCO
            </p>
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className="ml-4 p-2 text-gray-600 hover:text-celeste hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              title="Volver a solicitudes"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar con chats */}
        <ChatSidebar 
          chats={chats}
          activeChatId={activeChatId}
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
        />

        {/* Área principal del chat */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Header del chat activo */}
          {activeChat && (
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-800">
                {activeChat.patientName}
              </p>
            </div>
          )}

          {/* Input para nombre de paciente (si es nueva consulta) */}
          {showPatientNameInput && (
            <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
              <div className="max-w-3xl mx-auto">
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de la paciente
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    id="patientName"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleStartChat()
                      }
                    }}
                    placeholder="Ej: María González"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-celeste focus:border-transparent"
                    autoFocus
                  />
                  <button
                    onClick={handleStartChat}
                    disabled={!patientName.trim()}
                    className="bg-celeste text-white px-6 py-3 rounded-lg font-medium hover:bg-celeste-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Iniciar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Área de mensajes */}
          {!showPatientNameInput && (
            <>
              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                <div className="max-w-3xl mx-auto space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
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
                          {message.content}
                        </p>
                      </div>
                      {message.role === 'user' && (
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-base ml-3 flex-shrink-0">
                          Dr.
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

                  {/* Botón para crear orden */}
                  {showOrderButton && (
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={onCreateOrder}
                        className="bg-celeste text-white px-8 py-4 rounded-lg font-semibold hover:bg-celeste-dark transition-colors shadow-lg text-lg"
                      >
                        Crear orden para esta prueba
                      </button>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input de chat fijo abajo */}
              <div className="bg-white border-t border-gray-200 px-4 py-4 flex-shrink-0">
                <form onSubmit={handleSend}>
                  <div className="flex items-end space-x-2 max-w-3xl mx-auto">
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
                      placeholder="Describí la situación clínica de la paciente..."
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}
