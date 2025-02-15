import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import planOptions from 'src/data/planOptions';
import addOnOptions from 'src/data/addOnOptions';
const SummaryStep = forwardRef((props, ref) => {
  const userData = props.userData;
  const selectedPlan = planOptions.find((plan) => plan.id === userData.planID);
  const selectedAddOns = addOnOptions.filter((addOn) => userData.addOnIDs.includes(addOn.id));
  const totalCost = () => {
    let total = 0;
    total = userData.isAnnual ? selectedPlan.annualCost : selectedPlan.monthlyCost;
    selectedAddOns.forEach((addOn) => {
      total += userData.isAnnual ? addOn.annualCost : addOn.monthlyCost;
    });
    return total;
  };
  useImperativeHandle(ref, () => ({
    nextStep: () => console.log(userData)
  }));
  return (
    <div>
      <div className="bg-magnolia px-6 py-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="font-semibold text-marine-blue">
              {selectedPlan.name} <span>({userData.isAnnual ? 'Yearly' : 'Monthly'})</span>
            </p>
            <p className="text-sm text-cool-gray underline">Change</p>
          </div>
          <button className="text-marine-blue font-semibold cursor-pointer">
            {userData.isAnnual
              ? `$${selectedPlan.annualCost}/yr`
              : `$${selectedPlan.monthlyCost}/mo`}
          </button>
        </div>
        <div className="border-b bg-light-gray mb-6"></div>
        <div className="space-y-4 mb-2">
          {selectedAddOns.map((addOn) => (
            <p key={addOn.id} className="text-sm flex justify-between">
              <span>{addOn.title}</span>
              <span>
                {userData.isAnnual ? `$${addOn.annualCost}/yr` : `$${addOn.monthlyCost}/mo`}
              </span>
            </p>
          ))}
        </div>
      </div>
      <p className="flex justify-between items-center px-6">
        <span className="text-sm text-cool-gray font-medium">Total (per month)</span>
        <span className="text-purplish-blue font-bold text-xl">+${totalCost()}/mo</span>
      </p>
    </div>
  );
});
export default SummaryStep;
