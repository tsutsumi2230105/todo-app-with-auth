import "./AddToDo.scss"

const AddToDo = () => {
  return (
    <div className="add-todo__form">
      <div className="add-todo__header">
        <div className="add-todo__title">
          <h2>新しいTODOを追加</h2>
        </div>
        <div className="add-todo__sub-title">
          <h3>タスクの詳細を入力してください</h3>
        </div>
      </div>

      <div className="add-todo__main">
        <div className="add-todo__form--fields">
          <div className="add-todo__form--field">
            <label htmlFor="add-todo__form--title">タイトル</label>
            <input
              id="add-todo__form--title"
              type="text"
              placeholder="TODOを入力…"
              className="input__form"
            />
          </div>
          <div className="add-todo__form--field">
            <label htmlFor="add-todo__form--limit">期限</label>
            <input
              id="add-todo__form--limit"
              type="date"
              className="input__form"
            />
          </div>
        </div>

        <div className="add-todo__form--fields">
          <div className="add-todo__form--field">
            <label htmlFor="add-todo__form--priority">優先度</label>
            <select id="add-todo__form--priority" className="input__form">
              <option value="all">すべて</option>
              <option value="high">高</option>
              <option value="middle">中</option>
              <option value="low">低</option>
            </select>
          </div>
          <div className="add-todo__form--button">
            <button>+ 追加</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToDo
