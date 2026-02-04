import "./AddToDo.scss"
import { useId, useState } from "react"

type DashBoardToDoProps = {
  label?: string
}

const AddToDo = ({ label }: DashBoardToDoProps) => {
  const [] = useState(false)
  const checkboxId = useId()

  return (
    <>
      <div className="add-todo__field">
        <div className="add-todo__title">
          <h2>新しいTODOを追加</h2>
        </div>
        <div className="add-todo__sub-title">
          <h3>タスクの詳細を入力してください</h3>
        </div>

        <div className="add-todo__form">
          <div className="add-todo-form__field">
            <label htmlFor="add-todo__title">タイトル</label>
            <input id="add-todo__title" type="text" placeholder="TODOを入力…" />
            <div />

            <label htmlFor="add-todo__limit">期限</label>
            <input id="add-todo__limit" type="date" />
            <label htmlFor="add-todo__priority">優先度</label>
            <select id="add-todo__priority">
              <option value="all">すべて</option>
              <option value="high">高</option>
              <option value="middle">中</option>
              <option value="low">低</option>
            </select>
            <div className="">
              <button>+ 追加</button>
            </div>
            <div />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddToDo
