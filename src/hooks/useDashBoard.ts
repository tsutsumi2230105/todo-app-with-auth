import { useState, useMemo, useEffect } from "react"
import type { Todo } from "../types/todo"
import type { Filters } from "../types/filter"
import { useAuth } from "./useAuth"
import { db } from "../utils/firebase"
import { collection, onSnapshot } from "firebase/firestore"

export const useDashBoard = () => {
  const { user } = useAuth()
  const [todos, setTodos] = useState<Todo[]>([])
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

  const filteredTodos = todos.filter((todo) => {
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

  useEffect(() => {
    if (!user) return
    const todosRef = collection(db, "users", user.uid, "todos")
    const unsubscribe = onSnapshot(todosRef, (snapshot) => {
      const todosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Todo[]

      setTodos(todosData)
    })

    return () => unsubscribe()
  }, [user])

  const totalCount = todos.length
  const completedCount = todos.filter((todo) => todo.completed).length
  const uncompletedCount = todos.filter(
    (todo) => !todo.completed && !isExpired(todo.dueDate)
  ).length
  const expiredCount = todos.filter(
    (todo) => !todo.completed && isExpired(todo.dueDate)
  ).length

  return {
    filteredTodos,
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
