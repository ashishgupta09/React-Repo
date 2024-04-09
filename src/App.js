import './App.css';
import DarkMode from './components/DarkMode';
import PropsReact from './components/PropsReact';

function App() {
  return (
    <>
      <PropsReact />
      <div className='container my-3'>
        <DarkMode />
      </div>
    </>
  );
}

export default App;
