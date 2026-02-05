import { useCallback } from 'react'

import { useStore } from '../store'

import { type ChatMessage } from '@/types/os'

const useChatActions = () => {
  const { chatInputRef } = useStore()
  const setMessages = useStore((state) => state.setMessages)

  const clearChat = useCallback(() => {
    setMessages([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const focusChatInput = useCallback(() => {
    setTimeout(() => {
      requestAnimationFrame(() => chatInputRef?.current?.focus())
    }, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addMessage = useCallback(
    (message: ChatMessage) => {
      setMessages((prevMessages) => [...prevMessages, message])
    },
    [setMessages]
  )

  return {
    clearChat,
    addMessage,
    focusChatInput
  }
}

export default useChatActions
