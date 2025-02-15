import { forwardRef, useImperativeHandle, useState } from 'react';

const AddonStep = forwardRef((props, ref) => {
  const isAnnual = props.userData.isAnnual || false;
  const addOnSteps = [
    {
      name: 'addOnStep1',
      title: 'Online Services',
      subtitle: 'Access to multiplayer games.',
      monthlyCost: '+$1/mo',
      annualCost: '+$10/yr'
    },
    {
      name: 'addOnStep2',
      title: 'Larger Storage',
      subtitle: 'Extra 1TB of cloud save.',
      monthlyCost: '+$2/mo',
      annualCost: '+$20/yr'
    },
    {
      name: 'addOnStep3',
      title: 'Customizable Profile',
      subtitle: 'Custom theme on your profile.',
      monthlyCost: '+$2/mo',
      annualCost: '+$20/yr'
    }
  ];
  const [checkedItems, setCheckedItems] = useState(new Set());
  const toggleChecked = (id) => {
    setCheckedItems((prev) => {
      const newChecked = new Set(prev);
      newChecked.has(id) ? newChecked.delete(id) : newChecked.add(id);
      return newChecked;
    });
  };
  const saveData = () => {
    const selectedArr = [...checkedItems];
    return { addOnIDs: selectedArr };
  };
  useImperativeHandle(ref, () => ({
    saveData: saveData
  }));
  return (
    <div className="space-y-4">
      {addOnSteps.map((addOnStep) => {
        const isChecked = checkedItems.has(addOnStep.name);
        return (
          <label
            key={addOnStep.name}
            htmlFor={addOnStep.name}
            className={`border border-light-gray flex items-center space-x-6 py-4 px-4 rounded-lg ${isChecked ? 'bg-magnolia' : ''}`}>
            <input
              id={addOnStep.name}
              type="checkbox"
              value={isChecked}
              className="size-5 accent-purplish-blue bg-light-gray border-light-gray rounded-3xl focus:ring-purplish-blue focus:ring"
              onChange={() => toggleChecked(addOnStep.name)}
            />
            <div className="grow">
              <p className="font-semibold text-marine-blue">{addOnStep.title}</p>
              <p className="text-sm text-cool-gray">{addOnStep.subtitle}</p>
            </div>
            <p className="text-purplish-blue font-medium text-sm">
              {isAnnual ? addOnStep.annualCost : addOnStep.monthlyCost}
            </p>
          </label>
        );
      })}
    </div>
  );
});
export default AddonStep;
