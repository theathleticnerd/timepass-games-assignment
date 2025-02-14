import DesktopBanner from 'src/assets/images/bg-sidebar-desktop.svg';
import TextField from 'src/components/TextField';
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
  const activeStep = 1;
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
        <div className="mr-20 grow py-10 relative">
          <h2 className="text-marine-blue text-3xl font-bold mb-2">Personal Info</h2>
          <p className="text-cool-gray mb-6 text-sm">
            Please provide your name, email address and phone number.
          </p>
          {/*  */}
          <div className="space-y-8">
            <TextField label="Name" placeholder="e.g. Stephen King" />
            <TextField label="Email Address" placeholder="e.g. stephenking@lorem.com" />
            <TextField label="Phone Number" placeholder="e.g. +1 234 567 890" />
          </div>
          <button className="absolute right-0 px-6 bg-marine-blue py-3 bottom-0 mb-4 text-white rounded-lg font-semibold text-sm">
            Next Step
          </button>
        </div>
      </div>
    </main>
  );
}
