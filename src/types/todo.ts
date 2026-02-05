export type Todo = {
  id: string
  title: string
  completed: boolean
  status: "progress" | "done"
  priority: "high" | "middle" | "low"
}
