import "./Button.scss"

interface ButtonProps {
  text: string;
  status: string;
}

export function Button({ text, status }: ButtonProps) {
  const combinedClassName = `btn ${status} Subtitle_mobile`;
  return (
    <>
      <button
        type="button"
        className={combinedClassName}
      >
        {text}
      </button>
    </>
  )
}