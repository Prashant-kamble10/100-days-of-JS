
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter >
     <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
