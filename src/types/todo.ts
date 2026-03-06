import type { Timestamp } from "firebase/firestore"

export type Todo = {
  id: string
  title: string
  completed: boolean
  priority: "high" | "middle" | "low"
  dueDate: Timestamp | null
  createdAt: Timestamp
}

export type UpdateTodoInput = {
  title: string
  dueDate: Date | null
  priority: "high" | "middle" | "low"
}
