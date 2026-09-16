import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text'
  children: ReactNode
  isLoading?: boolean
  disabled?: boolean
}

export function Button({
  variant = 'primary',
  children,
  isLoading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses = 'btn px-4 py-2 rounded-sm font-medium text-sm transition-all'
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-900',
    secondary: 'border border-primary-500 text-primary-500 bg-transparent hover:bg-primary-100 active:bg-primary-100 active:text-primary-900',
    tertiary: 'text-neutral-700 hover:bg-neutral-100',
    text: 'text-neutral-700 hover:underline',
  }
  const disabledClasses = 'opacity-50 cursor-not-allowed'
  const className = [
    baseClasses,
    variantClasses[variant],
    disabled && disabledClasses,
    isLoading && 'opacity-70 cursor-wait',
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={className}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  )
}