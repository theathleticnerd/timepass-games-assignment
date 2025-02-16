import { forwardRef, useImperativeHandle, useState } from 'react';
import TextField from 'src/components/TextField';
const InfoStep = forwardRef((props, ref) => {
  const userData = props.userData;
  const [name, setName] = useState(userData.name || '');
  const [email, setEmail] = useState(userData.email || '');
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber || '');
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneNumberRegex = /^[\d\s()+-]+$/;
  const nextStep = () => {
    let isValid = true;
    setNameError(null);
    setEmailError('');
    setPhoneNumberError(null);
    if (!name) {
      setNameError('This is required.');
      isValid = false;
    } else if (name.length < 2) {
      setNameError('Name should have at least 2 characters');
      isValid = false;
    }
    if (email && !emailRegex.test(email)) {
      setEmailError('Email not valid');
      isValid = false;
    }
    if (!phoneNumber) {
      setPhoneNumberError('This is required');
      isValid = false;
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError('Phone Number not valid');
      isValid = false;
    } else if (phoneNumber.length < 6) {
      setPhoneNumberError('Minimum length 6 digits');
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
        errorMessage={nameError}
        required
      />
      <TextField
        type="email"
        value={email}
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        onChange={(event) => setEmail(event.target.value)}
        errorMessage={emailError}
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        placeholder="e.g. +1 234 567 890"
        onChange={(event) => {
          setPhoneNumber(event.target.value);
        }}
        errorMessage={phoneNumberError}
        required
      />
    </div>
  );
});
export default InfoStep;
