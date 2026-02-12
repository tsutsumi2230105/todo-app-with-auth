export type Todo = {
  id: string
  title: string
  completed: boolean
  priority: "high" | "middle" | "low"
  dueDate: string
}
