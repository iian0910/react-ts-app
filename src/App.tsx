import './assets/style/main.scss';
import { Router } from './router';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Router/>
    </>
  );
}

export default App;
