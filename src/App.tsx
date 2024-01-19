import './assets/style/main.scss';
import { Router } from './router';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar showNavItem={false}/>
      <Router/>
    </>
  );
}

export default App;
