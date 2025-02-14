export default function SummaryStep() {
  return (
    <div>
      <div className="bg-magnolia px-6 py-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="font-semibold text-marine-blue">
              Arcade <span>(Monthly)</span>
            </p>
            <p className="text-sm text-cool-gray underline">Change</p>
          </div>
          <button className="text-marine-blue font-semibold cursor-pointer">$9/mo</button>
        </div>
        <div className="border-b bg-light-gray mb-6"></div>
        <div className="space-y-4 mb-2">
          <p className="text-sm flex justify-between">
            <span>Online Service</span>
            <span>+$1/mo</span>
          </p>
          <p className="text-sm flex justify-between">
            <span>Larger Storage</span>
            <span>+$2/mo</span>
          </p>
        </div>
      </div>
      <p className="flex justify-between items-center px-6">
        <span className="text-sm text-cool-gray font-medium">Total (per month)</span>
        <span className="text-purplish-blue font-bold text-xl">+$12/mo</span>
      </p>
    </div>
  );
}
