export interface Tasks {
  id: number
  title: string
  description: string
  status: "pending" | "in progress" | "completed",
  created_at: Date,
  updated_at: Date
}