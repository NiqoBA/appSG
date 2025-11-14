'use client'

interface Chat {
  id: string
  patientName: string
  lastMessage: string
  timestamp: string
  isActive: boolean
}

interface ChatSidebarProps {
  chats: Chat[]
  activeChatId: string
  onSelectChat: (chatId: string) => void
  onNewChat?: () => void
}

/**
 * Sidebar con lista de chats del médico
 * Muestra todas las conversaciones activas
 */
export default function ChatSidebar({ chats, activeChatId, onSelectChat, onNewChat }: ChatSidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Conversaciones</h3>
        </div>
        {onNewChat && (
          <button
            onClick={onNewChat}
            className="w-full bg-celeste text-white py-2 px-4 rounded-lg font-medium hover:bg-celeste-dark transition-colors text-sm"
          >
            + Nueva consulta
          </button>
        )}
      </div>
      <div className="divide-y divide-gray-100">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
              chat.id === activeChatId ? 'bg-celeste/10 border-l-4 border-celeste' : ''
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                {chat.patientName.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-medium text-sm truncate ${
                  chat.id === activeChatId ? 'text-celeste-dark' : 'text-gray-800'
                }`}>
                  {chat.patientName}
                </p>
                <p className="text-xs text-gray-500 truncate mt-1">
                  {chat.lastMessage}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {chat.timestamp}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  )
}

