import './Stepper.scss'

interface StepConstructor{
  step: number
}

export function Stepper ({step}: StepConstructor) {
  return(
    <div className='d-flex justify-content-between align-items-center mb-56 mt-32'>
      <div className='d-flex flex-column align-items-center'>
        <div className="stepCircle d-flex justify-content-center align-items-center mb-1">
          <span className="Title">1</span>
        </div>
        <div className="Subtitle text-white">輸入信箱及密碼</div>
      </div>
      <div className="flex-fill step-bar mx-2"></div>
      <div className='d-flex flex-column align-items-center'>
        <div
          className={step === 1 ? "stepCircle d-flex justify-content-center align-items-center mb-1 non-step" : "stepCircle d-flex justify-content-center align-items-center mb-1"}
        >
          <span className={step === 1 ? "Title non-step-text" : "Title"}>2</span>
        </div>
        <div className={step === 1 ? "Subtitle non-step-text" : "Subtitle text-white"}>填寫基本資料</div>
      </div>
    </div>
  )
}