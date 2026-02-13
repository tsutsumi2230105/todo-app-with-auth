import type { Timestamp } from "firebase/firestore"

export type Todo = {
  id: string
  title: string
  completed: boolean
  priority: "high" | "middle" | "low"
  dueDate: string
  createdAt: Timestamp
}

export type UpdateTodoInput = {
  title: string
  dueDate: string
  priority: "high" | "middle" | "low"
}
