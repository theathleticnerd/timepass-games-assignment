import { Route, Routes } from 'react-router';
import HomePage from '/src/pages/HomePage';
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
