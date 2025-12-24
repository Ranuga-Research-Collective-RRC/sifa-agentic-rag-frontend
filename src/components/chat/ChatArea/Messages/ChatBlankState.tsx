'use client'

import { motion } from 'framer-motion'
import React from 'react'

const EXAMPLE_PROMPTS = [
  'Classify: Senior Software Engineer responsible for system architecture and mentoring junior developers',
  'What skill level is needed for someone who leads technical teams and makes strategic decisions?',
  'Analyze this job requirement: Must have 5+ years experience in cloud infrastructure and DevOps practices'
]

const ChatBlankState = () => {
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
            Skills Classification System
          </h1>
          <p className="text-muted-foreground text-base">
            Analyze job descriptions, courses, or skill statements to identify
            the matching skill category and responsibility level (1-7).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-y-3"
        >
          <p className="text-sm font-medium text-muted uppercase tracking-wide">
            Try an example
          </p>
          <div className="flex flex-col gap-2">
            {EXAMPLE_PROMPTS.map((prompt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="rounded-xl border border-border bg-accent/50 px-4 py-3 text-left text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-default"
              >
                {prompt}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col gap-y-2 text-xs text-muted-foreground/70"
        >
          <p>
            Select an agent from the sidebar, then describe a role, skill, or
            job requirement to classify.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ChatBlankState
