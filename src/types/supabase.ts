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
      accounts: {
        Row: {
          email: string
          id: string
          resources: Json[] | null
          subjects_and_times: Json[] | null
        }
        Insert: {
          email?: string
          id: string
          resources?: Json[] | null
          subjects_and_times?: Json[] | null
        }
        Update: {
          email?: string
          id?: string
          resources?: Json[] | null
          subjects_and_times?: Json[] | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          created_at: string
          date: string | null
          email: string
          id: string
          name: string | null
          phone_number: string
          surname: string | null
          time: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          email?: string
          id?: string
          name?: string | null
          phone_number?: string
          surname?: string | null
          time?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          email?: string
          id?: string
          name?: string | null
          phone_number?: string
          surname?: string | null
          time?: string | null
        }
        Relationships: []
      }
      leaderboard: {
        Row: {
          id: string
          leaderboard_time: string | null
          name: string | null
        }
        Insert: {
          id: string
          leaderboard_time?: string | null
          name?: string | null
        }
        Update: {
          id?: string
          leaderboard_time?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leaderboard_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      todos: {
        Row: {
          email: string
          id: string
          todolist: Json[] | null
        }
        Insert: {
          email: string
          id: string
          todolist?: Json[] | null
        }
        Update: {
          email?: string
          id?: string
          todolist?: Json[] | null
        }
        Relationships: [
          {
            foreignKeyName: "todos_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          is_admin: boolean | null
          name: string | null
          stripe_current_period_end: string
          stripe_customer_id: string | null
          stripe_price_id: string | null
          stripe_subscription_id: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id: string
          is_admin?: boolean | null
          name?: string | null
          stripe_current_period_end?: string
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          is_admin?: boolean | null
          name?: string | null
          stripe_current_period_end?: string
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_user: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      email_exists: {
        Args: {
          email_param: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
