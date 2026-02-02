import "./AuthField.scss"

type AuthFieldProps = {
  label: string
  id: string
  name: string
  type: "email" | "password" | "text"
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AuthField = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: AuthFieldProps) => {
  return (
    <div className="auth-field">
      <label className="auth-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="auth-field__input"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default AuthField
