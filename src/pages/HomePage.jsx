import { useState } from 'react';
import DesktopBanner from 'src/assets/images/bg-sidebar-desktop.svg';
import InfoStep from 'src/components/InfoStep';
import PlanStep from 'src/components/PlanStep';
export default function HomePage() {
  const steps = [
    {
      id: 1,
      title: 'Your Info'
    },
    {
      id: 2,
      title: 'Select Plan'
    },
    {
      id: 3,
      title: 'Add Ons'
    },
    {
      id: 4,
      title: 'Summary'
    }
  ];
  const stepContent = {
    1: {
      title: 'Personal Info',
      subtitle: 'Please provide your name, email address and phone number.',
      component: <InfoStep />
    },
    2: {
      title: 'Select Your Plan',
      subtitle: 'You have the option of monthly or yearly billing.',
      component: <PlanStep />
    },
    3: {
      title: 'Personal Info',
      subtitle: 'Please provide your name, email address and phone number.',
      component: <InfoStep />
    },
    4: {
      title: 'Personal Info',
      subtitle: 'Please provide your name, email address and phone number.',
      component: <InfoStep />
    }
  };
  const [activeStep, setActiveStep] = useState(1);
  const goToNextStep = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };
  const goToPreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };
  return (
    <main className="max-w-7xl mx-auto h-svh relative">
      <div className="absolute flex bg-white w-4xl top-1/2 left-1/2 -translate-1/2 min-h-[32rem] rounded-xl shadow-lg px-3 py-3 justify-between space-x-24">
        <div className=" bg-[url('src/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat relative rounded-lg">
          <div className="space-y-8 px-8 py-12 absolute">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center space-x-3 text-white/90">
                <p
                  className={`border size-8 rounded-full flex items-center justify-center font-semibold text-sm ${step.id === activeStep && 'bg-[#bfe2fd] text-marine-blue border-[#bfe2fd]'}`}>
                  {step.id}
                </p>
                <div>
                  <p className="font-light text-xs">STEP {step.id}</p>
                  <p className="font-bold uppercase text-sm tracking-wide"> {step.title} </p>
                </div>
              </div>
            ))}
          </div>
          <img src={DesktopBanner} alt="Desktop Banner Image" className="invisible" />
        </div>
        <div className="mr-20 flex flex-col justify-between grow pt-10 pb-6">
          <h2 className="text-marine-blue text-3xl font-bold mb-2">
            {stepContent[activeStep].title}
          </h2>
          <p className="text-cool-gray mb-6 text-sm">{stepContent[activeStep].subtitle}</p>
          <div className="grow">{stepContent[activeStep].component}</div>
          <div className="flex justify-between items-center">
            <button
              className={`font-medium text-cool-gray ${activeStep === 1 ? 'invisible' : 'visible'}`}
              onClick={goToPreviousStep}>
              Go Back
            </button>
            <button
              className="px-6 bg-marine-blue py-3 text-white rounded-lg font-semibold text-sm cursor-pointer"
              onClick={goToNextStep}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
