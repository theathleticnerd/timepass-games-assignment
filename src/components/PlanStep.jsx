import { useState } from 'react';
import arcadeIcon from 'src/assets/icons/arcade.svg';
import advancedIcon from 'src/assets/icons/advanced.svg';
import proIcon from 'src/assets/icons/pro.svg';
export default function Plan() {
  const plans = [
    {
      icon: arcadeIcon,
      name: 'Arcade',
      monthly: '$9/mo',
      yearly: '$90/yr'
    },
    {
      icon: advancedIcon,
      name: 'Advanced',
      monthly: '$12/mo',
      yearly: '$120/yr'
    },
    {
      icon: proIcon,
      name: 'Pro',
      monthly: '$15/mo',
      yearly: '$150/yr'
    }
  ];
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <div className="mt-4">
      <div className="flex space-x-4 mb-8">
        {plans.map((plan) => {
          return (
            <div
              key={plan.name}
              className="border h-[9.3rem] border-gray-300 basis-1/3 flex flex-col justify-between rounded-lg px-2.5 py-2.5">
              <img src={plan.icon} alt="Arcade Icon" className="size-10 mt-1" />
              <div>
                <p className="text-marine-blue font-semibold"> {plan.name} </p>
                <p className="text-sm text-cool-gray"> {isAnnual ? plan.yearly : plan.monthly} </p>
              </div>
            </div>
          );
        })}
      </div>

      <label class="flex justify-center items-center bg-light-blue py-2 rounded-lg cursor-pointer">
        <input
          type="checkbox"
          value=""
          class="sr-only peer"
          onChange={(event) => {
            setIsAnnual(event.target.checked);
          }}
        />
        <span
          className={`mx-3 text-sm font-semibold ${isAnnual ? 'text-cool-gray' : 'text-marine-blue'}`}>
          Monthly
        </span>
        <div className="relative w-11 h-6 bg-marine-blue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span
          className={`mx-3 text-sm font-semibold ${isAnnual ? 'text-marine-blue' : 'text-cool-gray'}`}>
          Yearly
        </span>
      </label>
    </div>
  );
}
