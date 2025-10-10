import { useState, useCallback } from 'react'
import { ChatMessage } from '../types'

export const useChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hello! I am the AURA Assistant, powered by Gemini. Ask me about James's GeoAI services. (Habari! Mimi ni AURA Assistant).",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return

    const newUserMessage: ChatMessage = { text, sender: 'user', timestamp: new Date() }
    setMessages((prev) => [...prev, newUserMessage])
    setLoading(true)
    setError(null)

    try {
      // For now, simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const botReply: ChatMessage = {
        text: "Thank you for your message! I'm currently being set up with the Gemini API. Please contact James directly at jmsmuigai@gmail.com for immediate assistance.",
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botReply])
    } catch (err) {
      console.error("Chatbot error:", err)
      setError("Sorry, I encountered an error. Please try again later.")
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I encountered an error. Please try again later.", sender: 'bot', timestamp: new Date() },
      ])
    } finally {
      setLoading(false)
    }
  }, [])

  return { messages, loading, error, sendMessage }
}