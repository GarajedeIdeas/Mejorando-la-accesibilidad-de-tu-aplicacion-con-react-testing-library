import { useStepNumber } from "../hooks/useStepNumber";
import { Step } from "./Step";
import "./Steps.css";

export function Steps() {
  const currentStep = useStepNumber();
  return (
    <nav>
      <ol aria-label="Errores mas comunes">
        <Step
          to="/contrast"
          name="Contraste"
          isCompleted={currentStep > 0}
          isActive={currentStep === 0}
        />
        <Step
          to="/alt"
          name="Alt"
          isCompleted={currentStep > 1}
          isActive={currentStep === 1}
        />
        <Step
          to="/empty-links"
          name="Enlaces"
          isCompleted={currentStep > 2}
          isActive={currentStep === 2}
        />
        <Step
          to="/labels"
          name="Labels"
          isCompleted={currentStep > 3}
          isActive={currentStep === 3}
        />
        <Step
          to="/empty-buttons"
          name="Botones"
          isCompleted={currentStep > 4}
          isActive={currentStep === 4}
        />
        <Step
          to="/lang"
          name="Lang"
          isCompleted={currentStep > 5}
          isActive={currentStep === 5}
        />
      </ol>
    </nav>
  );
}
