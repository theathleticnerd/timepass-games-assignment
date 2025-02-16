import { useState, useMemo, useRef } from 'react';
import DesktopBanner from 'src/assets/images/bg-sidebar-desktop.svg';
import ThankYouScreen from 'src/components/ThankYouScreen';
import InfoStep from 'src/steps/InfoStep';
import PlanStep from 'src/steps/PlanStep';
import AddonStep from 'src/steps/AddonStep';
import SummaryStep from 'src/steps/SummaryStep';
export default function HomePage() {
  const steps = [
    {
      id: 1,
      name: 'step1',
      title: 'Your Info'
    },
    {
      id: 2,
      name: 'step2',
      title: 'Select Plan'
    },
    {
      id: 3,
      name: 'step3',
      title: 'Add Ons'
    },
    {
      id: 4,
      name: 'step4',
      title: 'Summary'
    }
  ];
  const stepContent = {
    step1: {
      title: 'Personal info',
      subtitle: 'Please provide your name, email address and phone number.',
      component: InfoStep
    },
    step2: {
      title: 'Select your plan',
      subtitle: 'You have the option of monthly or yearly billing.',
      component: PlanStep
    },
    step3: {
      title: 'Pick add-ons',
      subtitle: 'Add-ons help enhance your gaming experience.',
      component: AddonStep
    },
    step4: {
      title: 'Finishing up',
      subtitle: 'Double check whether everything looks OK before confirming.',
      component: SummaryStep
    }
  };
  const [userData, setUserData] = useState({});
  const [activeStep, setActiveStep] = useState(1);
  const [isThankYouScreen, setIsThankYouScreen] = useState(false);
  const currentStep = useMemo(() => {
    return stepContent[steps[activeStep - 1].name];
  }, [activeStep]);
  const goToStep = (id) => {
    setActiveStep(id);
  };
  const goToNextStep = async () => {
    if (stepRefs.current[activeStep]?.current) {
      const result = await stepRefs.current[activeStep].current.nextStep();
      if (result && activeStep < steps.length) {
        setUserData((prev) => ({
          ...prev,
          ...result
        }));
        setActiveStep(activeStep + 1);
      } else if (activeStep === steps.length) {
        setIsThankYouScreen(true);
      }
    }
  };
  const goToPreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };
  //
  // Store the ref for the current component
  const stepRefs = useRef({});
  const Component = currentStep.component;
  const ref = (stepRefs.current[activeStep] = useRef(null));
  return (
    <main className="max-w-7xl mx-auto h-svh relative">
      <div className="lg:hidden bg-[url('src/assets/images/bg-sidebar-mobile.svg')]  bg-no-repeat  bg-cover h-[10rem] flex pt-8 justify-center space-x-4 text-white">
        {steps.map((step) => (
          <p
            className={`border size-8 rounded-full flex items-center justify-center font-semibold text-sm ${step.id === activeStep && 'bg-light-blue text-marine-blue border-light-blue'}`}>
            {step.id}
          </p>
        ))}
      </div>
      <div className="absolute flex bg-white lg:w-4xl top-[6.2rem] -translate-x-1/2  lg:top-1/2 left-1/2 min-h-96 lg:-translate-1/2 lg:min-h-[32rem] rounded-xl shadow-lg lg:px-3 lg:py-3 justify-between space-x-24 w-11/12 px-5 py-8 overflow-y-auto">
        <div className="hidden lg:block bg-[url('src/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat relative rounded-lg shrink-0">
          <div className="space-y-8 px-8 py-12 absolute">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center space-x-3 text-white/90">
                <p
                  className={`border size-8 rounded-full flex items-center justify-center font-semibold text-sm ${step.id === activeStep && 'bg-light-blue text-marine-blue border-pastel-blue'}`}>
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
        <div className="grow lg:mr-20 lg:grow lg:flex">
          {isThankYouScreen ? (
            <ThankYouScreen />
          ) : (
            <div className="flex flex-col h-full justify-between lg:pt-10 lg:pb-6 grow">
              <h2 className="text-marine-blue text-2xl lg:text-3xl font-bold mb-2">
                {currentStep.title}
              </h2>
              <p className="text-cool-gray mb-6 text-sm">{currentStep.subtitle}</p>
              <div className="grow">
                <Component ref={ref} userData={userData} goToStep={goToStep} />
              </div>
              <div className="hidden lg:flex justify-between items-center">
                <button
                  className={`font-medium text-cool-gray hover:text-marine-blue focus:text-marine-blue active:text-marine-blue cursor-pointer ${activeStep === 1 ? 'invisible' : 'visible'}`}
                  onClick={goToPreviousStep}>
                  Go Back
                </button>
                <button
                  className={`px-6 py-3 text-white rounded-lg font-semibold cursor-pointer ${activeStep === steps.length ? 'bg-purplish-blue' : 'bg-marine-blue'}`}
                  onClick={goToNextStep}>
                  {activeStep === steps.length ? 'Confirm' : 'Next Step'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {!isThankYouScreen && (
        <div className="absolute bottom-0 w-full px-6 py-2.5 bg-white flex justify-between items-center lg:hidden">
          <button
            className={`text-sm font-medium text-cool-gray hover:text-marine-blue focus:text-marine-blue active:text-marine-blue cursor-pointer ${activeStep === 1 ? 'invisible' : 'visible'}`}
            onClick={goToPreviousStep}>
            Go Back
          </button>
          <button
            className={`px-4 py-2.5 text-white rounded-lg font-semibold text-sm cursor-pointer ${activeStep === steps.length ? 'bg-purplish-blue' : 'bg-marine-blue'}`}
            onClick={goToNextStep}>
            {activeStep === steps.length ? 'Confirm' : 'Next Step'}
          </button>
        </div>
      )}
    </main>
  );
}
