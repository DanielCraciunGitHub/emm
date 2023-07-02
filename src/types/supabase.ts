export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          is_admin: boolean
          name: string
        }
        Insert: {
          id?: string
          name?: string
          email: string
          created_at?: string | null
          is_admin?: boolean
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          is_admin?: boolean
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
