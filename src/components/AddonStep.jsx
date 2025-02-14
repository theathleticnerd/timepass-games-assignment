export default function AddonStep() {
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
  return (
    <div className="space-y-4">
      {addOnSteps.map((addOnStep) => (
        <label
          key={addOnStep.name}
          for={addOnStep.name}
          className="border flex items-center space-x-6 py-4 px-4 rounded-lg">
          <input
            id={addOnStep.name}
            type="checkbox"
            className="size-5 accent-purple-500 bg-gray-500 border-gray-50 rounded-3xl focus:ring-blue-500 focus:ring-2"
          />
          <div className="grow">
            <p className="font-semibold text-marine-blue">{addOnStep.title}</p>
            <p className="text-sm text-cool-gray">{addOnStep.subtitle}</p>
          </div>
          <p className="text-purplish-blue font-medium text-sm">{addOnStep.monthlyCost}</p>
        </label>
      ))}
    </div>
  );
}
