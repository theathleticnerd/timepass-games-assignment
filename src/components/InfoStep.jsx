import TextField from 'src/components/TextField';
export default function InfoStep() {
  return (
    <div className="space-y-8">
      <TextField label="Name" placeholder="e.g. Stephen King" />
      <TextField label="Email Address" placeholder="e.g. stephenking@lorem.com" />
      <TextField label="Phone Number" placeholder="e.g. +1 234 567 890" />
    </div>
  );
}
