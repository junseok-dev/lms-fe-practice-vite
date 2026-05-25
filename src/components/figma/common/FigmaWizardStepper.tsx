import './figma-common.css'

type FigmaWizardStepperProps = {
  currentStep: number
  steps: readonly string[]
}

// Figma component: "공통 - Wizard Stepper / Variants"
// 단계형 생성 화면 상단에서 현재 단계와 다음 단계를 같은 구조로 표시합니다.
export function FigmaWizardStepper({ currentStep, steps }: FigmaWizardStepperProps) {
  return (
    <ol className="figma-wizard-stepper" aria-label="프로젝트 생성 단계">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        const isComplete = stepNumber < currentStep

        return (
          <li className={`${isActive ? 'is-active' : ''} ${isComplete ? 'is-complete' : ''}`.trim()} key={step}>
            <span>{isComplete ? '✓' : stepNumber}</span>
            <strong>{step}</strong>
          </li>
        )
      })}
    </ol>
  )
}
