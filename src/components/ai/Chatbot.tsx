import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useChatbot } from '../../hooks/useChatbot'
import LoadingSpinner from '../ui/LoadingSpinner'

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, loading, sendMessage } = useChatbot()
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleSendMessage = () => {
    const text = inputRef.current?.value
    if (text) {
      sendMessage(text)
      inputRef.current.value = ''
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      <motion.button
        className="fixed bottom-5 right-5 z-50 bg-accent-orange p-3 rounded-full shadow-lg hover:bg-accent-teal transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle chatbot"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M12 18a6 6 0 1 1 6-6c0 2-3 3-3 5.5"/>
          <path d="M12 6.5A2.5 2.5 0 1 1 9.5 9c0 1.5 2.5 2.5 2.5 5"/>
          <path d="m9.5 14.5 2.5 2.5 2.5-2.5"/>
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 50 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed bottom-20 right-5 z-50 w-full max-w-md"
          >
            <div className="card-bg rounded-xl shadow-2xl flex flex-col h-[500px]">
              <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-lg font-bold ai-gradient-text">AURA Assistant</h3>
                <button onClick={() => setIsOpen(false)} className="text-light-gray hover:text-white text-2xl" aria-label="Close chatbot">&times;</button>
              </div>
              <div className="flex-grow p-4 overflow-y-auto">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-3 rounded-lg max-w-[80%] ${
                      msg.sender === 'user'
                        ? 'bg-accent-orange text-white ml-auto rounded-br-none'
                        : 'bg-dark-gray text-light-gray mr-auto rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                {loading && (
                  <div className="mb-2 p-3 rounded-lg bg-dark-gray text-light-gray mr-auto rounded-bl-none flex items-center">
                    <LoadingSpinner size="sm" color="accent" />
                    <span className="ml-2">Thinking...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-4 border-t border-gray-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    ref={inputRef}
                    className="flex-grow bg-dark-gray border border-gray-600 rounded-lg px-4 py-2 text-text-light focus:outline-none focus:ring-2 focus:ring-accent-orange"
                    placeholder="Ask me anything..."
                    onKeyPress={handleKeyPress}
                    disabled={loading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={loading}
                    className="bg-accent-orange text-white px-4 py-2 rounded-lg hover:bg-accent-teal transition-colors disabled:opacity-50"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot