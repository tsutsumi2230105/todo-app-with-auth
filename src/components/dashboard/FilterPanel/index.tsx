import Filter from "../../../assets/images/filter.png"
import "./FilterPanel.scss"
import type { Filters } from "../../../types/filter"

type Props = {
  filters: Filters
  activeFilterCount: number
  setFilters: (filters: Filters) => void
}

const FilterPanel = ({ filters, activeFilterCount, setFilters }: Props) => {
  return (
    <div className="dashboard-filter">
      <div className="dashboard-filter__header">
        <img src={Filter} alt="フィルターアイコン" />
        <p>フィルター</p>

        {activeFilterCount > 0 && (
          <span className="dashboard-filter__badge">{activeFilterCount}</span>
        )}
      </div>

      <div className="dashboard-filter__main">
        <div className="dashboard-filter__status">
          <label htmlFor="status" className="dashboard-label">
            ステータス
          </label>
          <select
            id="status"
            className="dashboard-filter__select"
            value={filters.status}
            onChange={(e) =>
              setFilters({
                ...filters,
                status: e.target.value as Filters["status"],
              })
            }
          >
            <option value="all">すべて</option>
            <option value="uncompleted">進行中</option>
            <option value="completed">完了</option>
          </select>
        </div>
        <div className="dashboard-filter__priority">
          <label htmlFor="priority" className="dashboard-label">
            優先度
          </label>
          <select
            id="priority"
            className="dashboard-filter__select"
            value={filters.priority}
            onChange={(e) =>
              setFilters({
                ...filters,
                priority: e.target.value as Filters["priority"],
              })
            }
          >
            <option value="all">すべて</option>
            <option value="high">高</option>
            <option value="middle">中</option>
            <option value="low">低</option>
          </select>
        </div>
        <div className="dashboard-filter__limit">
          <label htmlFor="limit" className="dashboard-label">
            期限
          </label>
          <select
            id="limit"
            className="dashboard-filter__select"
            value={filters.limit}
            onChange={(e) =>
              setFilters({
                ...filters,
                limit: e.target.value as Filters["limit"],
              })
            }
          >
            <option value="all">すべて</option>
            <option value="expired">期限切れ</option>
            <option value="today">今日</option>
            <option value="this_week">今週</option>
          </select>
        </div>
        {activeFilterCount > 0 && (
          <button
            className="dashboard-filter__button"
            type="button"
            onClick={() =>
              setFilters({
                status: "all",
                priority: "all",
                limit: "all",
              })
            }
          >
            リセット
          </button>
        )}
      </div>
    </div>
  )
}

export default FilterPanel
