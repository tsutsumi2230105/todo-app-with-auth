import { useState, useMemo } from "react"
import type { Todo } from "../types/todo"
import type { Filters } from "../types/filter"

const MockTodo: Todo[] = [
  {
    id: "1",
    title: "テスト1",
    completed: false,
    priority: "high",
    dueDate: "2026-02-05",
  },
  {
    id: "2",
    title: "テスト2",
    completed: true,
    priority: "middle",
    dueDate: "2026-02-06",
  },
  {
    id: "3",
    title: "テスト3",
    completed: false,
    priority: "low",
    dueDate: "2026-02-07",
  },
]

export const useDashBoard = () => {
  const [todos, setTodos] = useState<Todo[]>(MockTodo)
  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  const [filters, setFilters] = useState<Filters>({
    status: "all",
    priority: "all",
    limit: "all",
  })

  const activeFilterCount = Object.values(filters).filter(
    (value) => value !== "all"
  ).length

  const today = useMemo(() => {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    return date
  }, [])

  const filterTodos = todos.filter((todo) => {
    if (filters.status === "uncompleted" && todo.completed) return false
    if (filters.status === "completed" && !todo.completed) return false
    if (filters.priority !== "all" && todo.priority !== filters.priority)
      return false
    if (filters.limit !== "all") {
      const dueDate = new Date(todo.dueDate)
      dueDate.setHours(0, 0, 0, 0)

      if (filters.limit === "expired") {
        if (dueDate >= today) return false
      }

      if (filters.limit === "today") {
        if (dueDate.getTime() !== today.getTime()) return false
      }

      if (filters.limit === "this-week") {
        const weekEnd = new Date(today)
        weekEnd.setDate(today.getDate() + (7 - today.getDay()))
        if (dueDate < today || dueDate > weekEnd) return false
      }
    }
    return true
  })

  const isExpired = (dueDate: string) => {
    const date = new Date(dueDate)
    date.setHours(0, 0, 0, 0)
    return date < today
  }

  const totalCount = todos.length
  const completedCount = todos.filter((todo) => todo.completed).length
  const uncompletedCount = todos.filter(
    (todo) => !todo.completed && !isExpired(todo.dueDate)
  ).length
  const expiredCount = todos.filter(
    (todo) => !todo.completed && isExpired(todo.dueDate)
  ).length

  return {
    todos,
    filterTodos,
    filters,
    setFilters,
    activeFilterCount,
    totalCount,
    completedCount,
    uncompletedCount,
    expiredCount,
    toggleTodo,
  }
}
