import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App max-w-screen-3xl mx-auto font-miedinger">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;