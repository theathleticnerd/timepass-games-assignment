import { BrowserRouter } from 'react-router';
import AppRoutes from '/src/router/index.jsx';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
