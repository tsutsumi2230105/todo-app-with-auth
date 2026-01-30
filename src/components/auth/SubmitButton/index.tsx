import "./SubmitButton.scss"

type SubmitButtonProps = {
  children: React.ReactNode
}

const SubmitButton = ({ children }: SubmitButtonProps) => {
  return (
    <button className="submit-button" type="submit">
      {children}
    </button>
  )
}

export default SubmitButton
