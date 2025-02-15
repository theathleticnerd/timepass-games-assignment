import { forwardRef, useImperativeHandle, useState } from 'react';
import addOnOptions from 'src/data/addOnOptions';
const AddonStep = forwardRef((props, ref) => {
  const userData = props.userData;
  const isAnnual = userData.isAnnual || false;
  const [checkedItems, setCheckedItems] = useState(new Set(userData.addOnIDs || null));
  const toggleChecked = (id) => {
    setCheckedItems((prev) => {
      const newChecked = new Set(prev);
      newChecked.has(id) ? newChecked.delete(id) : newChecked.add(id);
      return newChecked;
    });
  };
  const nextStep = () => {
    const selectedArr = [...checkedItems];
    return { addOnIDs: selectedArr };
  };
  useImperativeHandle(ref, () => ({
    nextStep: nextStep
  }));
  return (
    <div className="space-y-4">
      {addOnOptions.map((addOnStep) => {
        const isChecked = checkedItems.has(addOnStep.id);
        return (
          <label
            key={addOnStep.id}
            htmlFor={addOnStep.id}
            className={`border border-light-gray flex items-center py-3 lg:py-4 px-4 rounded-lg cursor-pointer hover:border-purplish-blue ${isChecked ? 'bg-magnolia border-purplish-blue' : ''}`}>
            <input
              id={addOnStep.id}
              type="checkbox"
              checked={isChecked}
              className="mr-4 lg:mr-6 size-5 accent-purplish-blue bg-light-gray border-light-gray rounded-3xl focus:ring-purplish-blue focus:ring"
              onChange={() => toggleChecked(addOnStep.id)}
            />
            <div className="grow">
              <p className="text-sm lg:text-base font-semibold text-marine-blue">
                {addOnStep.title}
              </p>
              <p className="text-xs lg:text-sm text-cool-gray">{addOnStep.subtitle}</p>
            </div>
            <p className="whitespace-nowrap text-purplish-blue font-medium text-sm">
              +${isAnnual ? `${addOnStep.annualCost}/yr` : `${addOnStep.monthlyCost}/mo`}
            </p>
          </label>
        );
      })}
    </div>
  );
});
export default AddonStep;
