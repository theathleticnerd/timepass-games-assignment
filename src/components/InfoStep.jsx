import { useState } from 'react';
import TextField from 'src/components/TextField';
export default function InfoStep() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);
  const saveInfo = () => {
    setIsFormValid(true);
    if (!name) {
      console.log('Name is required.');
      setIsFormValid(false);
    }
    if (!phoneNumber) {
      console.log('Phone Number is required');
      setIsFormValid(false);
    }

    if (isFormValid) {
      console.log('Go To Next Step');
    }
  };
  return (
    <div className="space-y-8">
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
      <p>{name}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </div>
  );
}
