declare global {
  export type Account = {
    id: string
    username: string
    email: string
    password: string
    created_at: Date
    updated_at: Date | null
    role_id: number
    has_email_verified: boolean
  }

  export type Role = {
    id: number
    name: string
  }

  export type Blog = {
    id: string
    title: string
    content: string | null
    is_draft: boolean
    tag: string
    slug: string
    created_at: Date
    updated_at: Date | null
  }
}

export {}
