import thankYouIcon from 'src/assets/icons/thankYou.svg';
export default function ThankYouScreen() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <img src={thankYouIcon} alt="Thank you icon" className="size-20 block mb-6" />
      <h2 className="text-marine-blue font-bold text-3xl mb-6 text-center">Thank you!</h2>
      <p className="text-center text-sm text-cool-gray font-medium">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com
      </p>
    </div>
  );
}
