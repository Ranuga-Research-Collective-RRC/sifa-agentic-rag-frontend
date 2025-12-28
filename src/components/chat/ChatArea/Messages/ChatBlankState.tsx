'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { useStore } from '@/store'
import Icon from '@/components/ui/icon'

const EXAMPLE_PROMPTS = [
  'Classify: Senior Software Engineer responsible for system architecture and mentoring junior developers',
  'What skill level is needed for someone who leads technical teams and makes strategic decisions?',
  'Analyze this job requirement: Must have 5+ years experience in cloud infrastructure and DevOps practices'
]

const SFIA_LEVELS = [
  { level: 1, name: 'Follow', desc: 'Works under supervision' },
  { level: 2, name: 'Assist', desc: 'Works with guidance' },
  { level: 3, name: 'Apply', desc: 'Works independently' },
  { level: 4, name: 'Enable', desc: 'Leads small teams' },
  { level: 5, name: 'Ensure/Advise', desc: 'Strategic influence' },
  { level: 6, name: 'Initiate', desc: 'Organizational leadership' },
  { level: 7, name: 'Set Strategy', desc: 'Shapes industry direction' }
]

const ChatBlankState = () => {
  const { setPendingPrompt, chatInputRef } = useStore()

  const handlePromptClick = (prompt: string) => {
    setPendingPrompt(prompt)
    setTimeout(() => {
      chatInputRef?.current?.focus()
    }, 100)
  }

  return (
    <section
      className="flex flex-col items-center text-center font-geist px-4"
      aria-label="Welcome message"
    >
      <div className="flex max-w-2xl flex-col gap-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-y-3"
        >
          <h1 className="text-3xl font-semibold tracking-tight">
            SFIA Skills Classification
          </h1>
          <p className="text-muted-foreground text-base">
            Powered by the{' '}
            <span className="font-medium text-primary">
              Skills Framework for the Information Age (SFIA 8)
            </span>
            . Analyze job descriptions, courses, or skill statements to identify
            the matching skill category and responsibility level.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col gap-y-3"
        >
          <p className="text-xs font-medium text-muted uppercase tracking-wide">
            SFIA Responsibility Levels
          </p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {SFIA_LEVELS.map((level) => (
              <div
                key={level.level}
                className="group relative flex items-center gap-1.5 rounded-lg border border-border bg-accent/30 px-2 py-1 text-xs"
              >
                <span className="font-bold text-primary">{level.level}</span>
                <span className="text-muted-foreground">{level.name}</span>
                <div className="absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-background-secondary px-2 py-1 text-xs text-primary shadow-lg group-hover:block">
                  {level.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col gap-y-3"
        >
          <p className="text-xs font-medium text-muted uppercase tracking-wide">
            Click an example to get started
          </p>
          <div className="flex flex-col gap-2">
            {EXAMPLE_PROMPTS.map((prompt, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                onClick={() => handlePromptClick(prompt)}
                className="group flex items-center gap-3 rounded-xl border border-border bg-accent/50 px-4 py-3 text-left text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-accent hover:text-foreground hover:shadow-sm"
              >
                <Icon
                  type="send"
                  size="xs"
                  className="shrink-0 opacity-0 transition-opacity group-hover:opacity-60"
                />
                <span className="flex-1">{prompt}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col gap-y-2 rounded-lg bg-accent/30 p-3 text-xs text-muted-foreground/80"
        >
          <p className="font-medium text-muted-foreground">How it works:</p>
          <ol className="list-inside list-decimal space-y-1 text-left">
            <li>Describe a job role, skill requirement, or competency</li>
            <li>Our AI agents search the SFIA framework knowledge base</li>
            <li>Get the best matching skill with responsibility level and evidence</li>
          </ol>
        </motion.div>
      </div>
    </section>
  )
}

export default ChatBlankState
