import { forwardRef, useImperativeHandle, useState } from 'react';
import TextField from 'src/components/TextField';
const InfoStep = forwardRef((props, ref) => {
  const userData = props.userData;
  const [name, setName] = useState(userData.name || '');
  const [email, setEmail] = useState(userData.email || '');
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber || '');

  const nextStep = () => {
    let isValid = true;
    if (!name) {
      console.log('Name is required.');
      isValid = false;
    }
    if (!phoneNumber) {
      console.log('Phone Number is required');
      isValid = false;
    }
    if (isValid) {
      return { name, email, phoneNumber };
    }
  };

  useImperativeHandle(ref, () => ({
    nextStep: nextStep
  }));

  return (
    <div className="space-y-4 lg:space-y-8">
      <TextField
        label="Name"
        value={name}
        placeholder="e.g. Stephen King"
        onChange={(event) => setName(event.target.value)}
        required
      />
      <TextField
        type="email"
        value={email}
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        placeholder="e.g. +1 234 567 890"
        onChange={(event) => {
          setPhoneNumber(event.target.value);
        }}
        required
      />
    </div>
  );
});
export default InfoStep;
