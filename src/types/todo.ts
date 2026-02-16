import type { Timestamp } from "firebase/firestore"

export type Todo = {
  id: string
  title: string
  completed: boolean
  priority: "high" | "middle" | "low"
  dueDate: Timestamp
  createdAt: Timestamp
}

export type UpdateTodoInput = {
  title: string
<<<<<<< HEAD
  dueDate: Date
=======
  dueDate: string
>>>>>>> origin/main
  priority: "high" | "middle" | "low"
}
