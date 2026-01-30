import "./SubmitButton.scss"

type SubmitButtonProps = {
  children: React.ReactNode
}

const SubmitButton = ({ children }: SubmitButtonProps) => {
  return (
    <button className="SubmitButton" type="submit">
      {children}
    </button>
  )
}

export default SubmitButton
