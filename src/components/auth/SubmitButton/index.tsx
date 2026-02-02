import "./SubmitButton.scss"

type SubmitButtonProps = {
  children: React.ReactNode
  isLoading: boolean
}

const SubmitButton = ({ children, isLoading }: SubmitButtonProps) => {
  return (
    <button className="submit-button" type="submit" disabled={isLoading}>
      {isLoading ? "ログイン中..." : children}{" "}
    </button>
  )
}

export default SubmitButton
