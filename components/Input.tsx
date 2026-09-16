'use client'

import { useState } from 'react'
import type { FocusEvent, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
  type?: string
}

export function Input({ label, error, helpText, type = 'text', onFocus, onBlur, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(event)
  }
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <div className="space-y-1 w-full">
      {label && (
        <label className="block text-body-small font-medium text-neutral-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          type={type}
          className={`w-full px-4 py-2 rounded-sm border border-neutral-300 bg-neutral-0 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
            isFocused ? 'border-primary-500' : ''
          } ${
            error ? 'border-red-500' : ''
          }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-red-500 text-body-small">
            {error}
          </p>
        )}
      </div>
      {helpText && (
        <p className="text-xs text-neutral-500 text-body-small">
          {helpText}
        </p>
      )}
    </div>
  )
}