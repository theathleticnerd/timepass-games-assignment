import { forwardRef, useImperativeHandle, useState } from 'react';
import planOptions from 'src/data/planOptions';
const PlanStep = forwardRef((props, ref) => {
  const userData = props.userData || {};
  const [selectedPlan, setSelectedPlan] = useState(userData.planID || null);
  const [isAnnual, setIsAnnual] = useState(userData.isAnnual || false);
  const nextStep = () => {
    let isValid = true;
    if (!selectedPlan) {
      console.log('Please select a plan.');
      isValid = false;
    }
    if (isValid) {
      return {
        planID: selectedPlan,
        isAnnual: isAnnual
      };
    }
  };
  useImperativeHandle(ref, () => ({
    nextStep: nextStep
  }));
  return (
    <div className="lg:mt-4">
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-8">
        {planOptions.map((plan) => {
          return (
            <div
              key={plan.name}
              className={`border border-light-gray lg:basis-1/3 flex items-center lg:items-start lg:flex-col lg:justify-between rounded-lg cursor-pointer px-3 lg:px-2.5 py-2.5 hover:border-purplish-blue ${plan.id === selectedPlan && 'bg-magnolia border-purplish-blue'}`}
              onClick={() => setSelectedPlan(plan.id)}>
              <img
                src={plan.icon}
                alt="Arcade Icon"
                className="size-10 mr-4 lg:mr-0 lg:mb-8 lg:mt-1"
              />
              <div>
                <p className="text-marine-blue font-semibold"> {plan.name} </p>
                <p className="text-sm text-cool-gray">
                  {isAnnual ? `$${plan.annualCost}/yr` : `$${plan.monthlyCost}/mo`}
                </p>
                {isAnnual && (
                  <p className="mt-1 text-marine-blue text-xs font-medium">2 months free</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <label className="flex justify-center items-center bg-light-blue py-2 rounded-lg cursor-pointer">
        <input
          type="checkbox"
          checked={isAnnual}
          className="sr-only peer"
          onChange={(event) => {
            setIsAnnual(event.target.checked);
          }}
        />
        <span
          className={`mx-3 text-sm font-semibold ${isAnnual ? 'text-cool-gray' : 'text-marine-blue'}`}>
          Monthly
        </span>
        <div className="relative w-11 h-6 bg-marine-blue peer-focus:outline-none peer-focus:ring peer-focus:ring-marine-blue  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-light-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-marine-blue"></div>
        <span
          className={`mx-3 text-sm font-semibold ${isAnnual ? 'text-marine-blue' : 'text-cool-gray'}`}>
          Yearly
        </span>
      </label>
    </div>
  );
});
export default PlanStep;
