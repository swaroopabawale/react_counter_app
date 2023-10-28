import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Products from './features/Products/Products';

function App() {
  return (
    <>
      <Header/>
      <main className='container'>
        <Products/>
      </main>
    </>
  );
}

export default App;
