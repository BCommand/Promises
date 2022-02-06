import './App.css';
import Header from './components/Header/Header';
import CardListComponent from './components/CardListComponent/CardListComponent';


const App = () => {
  
  return (
    <div className='App'>
      <Header />
      <div className='Cards-Container'>
      <CardListComponent />
      
    </div>
    </div>
  );
};

export default App;
