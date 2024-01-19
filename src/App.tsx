import './assets/style/main.scss';
import { Router } from './router';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  // 畫面滿版設定
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <>
      <Navbar showNavItem={false}/>
      <Router/>
    </>
  );
}

export default App;
