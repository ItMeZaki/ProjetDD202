
import './App.css';
import { Provider } from 'react-redux';
import Nav from './Compenants/Nav';
import Mystore from './Store/Mystore'
import Cartsliste from './Compenants/Cartsliste';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={Mystore}>
      <div className="App">
      <Nav />
        <Routes>
        
          <Route path='cart' element={<Cartsliste />}/>
          
        
        
        
        
        

        </Routes>
      </div>
    </Provider>
  );
}

export default App;
