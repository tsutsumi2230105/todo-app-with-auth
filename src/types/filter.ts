export type FilterStatus = "all" | "uncompleted" | "completed"
export type FilterPriority = "all" | "high" | "middle" | "low"
export type FilterLimit = "all" | "expired" | "today" | "this-week"

export type Filters = {
  status: FilterStatus
  priority: FilterPriority
  limit: FilterLimit
}
