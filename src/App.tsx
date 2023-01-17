import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './page/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
