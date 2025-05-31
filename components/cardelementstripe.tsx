// components/cardelementstripe.tsx
"use client"

import React, { useEffect, useState } from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import type { StripeCardElementChangeEvent } from '@stripe/stripe-js'

interface CardElementStripProps {
  onCardChange: (isValid: boolean, error?: string) => void
}

export function CardElementstrip({ onCardChange }: CardElementStripProps) {
  const [error, setError] = useState<string | null>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (event: StripeCardElementChangeEvent) => {
    if (event.error) {
      setError(event.error.message)
      onCardChange(false, event.error.message)
    } else {
      setError(null)
      onCardChange(event.complete, undefined)
    }
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#ffffff',
        fontFamily: 'Inter, system-ui, sans-serif',
        backgroundColor: 'transparent',
        '::placeholder': {
          color: '#94a3b8',
        },
        iconColor: '#60a5fa',
      },
      invalid: {
        color: '#ef4444',
        iconColor: '#ef4444',
      },
    },
    hidePostalCode: true,
    classes: {
      focus: 'ring-2 ring-blue-400 ring-opacity-20',
    },
  }

  return (
    <div 
      className={`p-3 bg-slate-700/50 border rounded-lg transition-all ${
        isFocused 
          ? 'border-blue-400 ring-2 ring-blue-400/20' 
          : error 
            ? 'border-red-500' 
            : 'border-slate-600'
      }`}
    >
      <CardElement 
        options={cardElementOptions}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      
      {error && (
        <p className="text-red-400 text-sm mt-2 font-medium">
          {error}
        </p>
      )}
    </div>
  )
}