import "./SubmitButton.scss"

type SubmitButtonProps = {
  children: React.ReactNode
  isLoading: boolean
  loadingText: string
}

const SubmitButton = ({
  children,
  isLoading,
  loadingText,
}: SubmitButtonProps) => {
  return (
    <button className="submit-button" type="submit" disabled={isLoading}>
      {isLoading ? loadingText : children}
    </button>
  )
}

export default SubmitButton
