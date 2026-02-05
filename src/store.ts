import { create } from 'zustand'

import { type ChatMessage } from '@/types/os'

interface Store {
  streamingErrorMessage: string
  setStreamingErrorMessage: (streamingErrorMessage: string) => void
  pendingPrompt: string
  setPendingPrompt: (prompt: string) => void
  isStreaming: boolean
  setIsStreaming: (isStreaming: boolean) => void
  messages: ChatMessage[]
  setMessages: (
    messages: ChatMessage[] | ((prevMessages: ChatMessage[]) => ChatMessage[])
  ) => void
  chatInputRef: React.RefObject<HTMLTextAreaElement | null>
}

export const useStore = create<Store>()((set) => ({
  streamingErrorMessage: '',
  setStreamingErrorMessage: (streamingErrorMessage) =>
    set(() => ({ streamingErrorMessage })),
  pendingPrompt: '',
  setPendingPrompt: (prompt) => set(() => ({ pendingPrompt: prompt })),
  isStreaming: false,
  setIsStreaming: (isStreaming) => set(() => ({ isStreaming })),
  messages: [],
  setMessages: (messages) =>
    set((state) => ({
      messages:
        typeof messages === 'function' ? messages(state.messages) : messages
    })),
  chatInputRef: { current: null }
}))
