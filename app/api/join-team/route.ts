import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { z } from 'zod'

const joinTeamSchema = z.object({
  full_name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  profession: z.string().min(1, 'Profession is required'),
  years_experience: z.number().min(0, 'Years of experience must be positive'),
  reason: z.string().min(1, 'Reason for joining is required'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = joinTeamSchema.parse(body)

    const { error } = await supabaseAdmin
      .from('applicants')
      .insert([validatedData])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, error: 'Database error' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Join team API error:', error)   
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid data', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}



