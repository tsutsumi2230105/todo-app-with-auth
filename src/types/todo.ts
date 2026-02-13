import type { Timestamp } from "firebase/firestore"

export type Todo = {
  id: string
  title: string
  completed: boolean
  priority: "high" | "middle" | "low"
  dueDate: Date
  createdAt: Timestamp
}
