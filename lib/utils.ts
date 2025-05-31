import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { randomBytes } from 'crypto'

export function generateSecret(): string {
  return randomBytes(32).toString('hex')
}

export function calculateAmount(seats: number): number {
  if (seats < 1 || seats > 20) {
    throw new Error('Seats must be between 1 and 20')
  }
  return seats === 1 ? 29 : 29 + (seats - 1) * 20
}







// // lib/utils.ts
// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// export function generateSecret(): string {
//   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
// }

// export function calculateAmount(seats: number): number {
//   if (seats === 1) return 29
//   return 29 + (seats - 1) * 20
// }