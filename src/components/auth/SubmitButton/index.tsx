import "./SubmitButton.scss"

type SubmitButtonProps = {
  children: React.ReactNode
  isLoading: boolean
  LoadingText: string
}

const SubmitButton = ({
  children,
  isLoading,
  LoadingText,
}: SubmitButtonProps) => {
  return (
    <button className="submit-button" type="submit" disabled={isLoading}>
      {isLoading ? LoadingText : children}
    </button>
  )
}

export default SubmitButton
