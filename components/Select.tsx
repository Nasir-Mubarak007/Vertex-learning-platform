'use client'

import { useState } from 'react'
import type { FocusEvent, SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helpText?: string
  options: { value: string; label: string }[]
}

export function Select({ label, error, helpText, options, onFocus, onBlur, ...props }: SelectProps) {
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = (event: FocusEvent<HTMLSelectElement>) => {
    setIsFocused(true)
    onFocus?.(event)
  }
  const handleBlur = (event: FocusEvent<HTMLSelectElement>) => {
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
        <select
          className={`w-full px-4 py-2 rounded-sm border border-neutral-300 bg-neutral-0 text-neutral-900 appearance-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
            isFocused ? 'border-primary-500' : ''
          } ${
            error ? 'border-red-500' : ''
          }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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