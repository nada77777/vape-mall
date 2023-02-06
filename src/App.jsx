import './App.css';
import Banner from './components/banner/banner';
import Header from './components/header/header';
import MainPage from './pages/main_page/main_page';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MainPage />
    </div>
  );
}

export default App;
