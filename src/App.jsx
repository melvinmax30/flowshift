import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubscribePage from './pages/Subscribe';
import { SuccessPage } from './pages/Success';
import { CancelPage } from './pages/Cancel';
import AdminPanel from './admin/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscribePage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
