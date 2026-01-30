import "./AuthField.scss"

type AuthFieldProps = {
  label: string
  id: string
  name: string
  type?: string
  placeholder?: string
}

const AuthField = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
}: AuthFieldProps) => {
  return (
    <div className="AuthField">
      <label className="AuthField__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="AuthField__input"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default AuthField
