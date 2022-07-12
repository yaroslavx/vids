import { Route, Routes } from 'react-router-dom';
import HudComponent from './components/hudComponent';
import Main from './pages/Main';
import Jackboys from './pages/jackboys';
import Familyties from './pages/familyties'
import Humanconcept from './pages/humanconcept'
import Duragactivity from './pages/duragactivity'
import Floorseats from './pages/floorseats'
import Escapeplan from './pages/escapeplan'
import AF from './pages/af'
import Kidsturnedoutfine from './pages/kidsturnedoutfine'
import Klarna from './pages/klarna'
import Nigo from './pages/nigo'
import Pacsun from './pages/pacsun'
import Yeezus from './pages/yeezus'
import Cico from './pages/cashincashout';
import Alwaysyams from './pages/alwaysyams';

function App() {
  return (
    <div>
      <body>
        <HudComponent/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/jackboys' element={<Jackboys/>}/>
          <Route path='/familyties' element={<Familyties/>}/>
          <Route path='/humanconcept' element={<Humanconcept/>}/>
          <Route path='/duragactivity' element={<Duragactivity/>}/>
          <Route path='/floorseats' element={<Floorseats/>}/>
          <Route path='/escapeplan' element={<Escapeplan/>}/>
          <Route path='/af' element={<AF/>}/>
          <Route path='/kidsturnedoutfine' element={<Kidsturnedoutfine/>}/>
          <Route path='/klarna' element={<Klarna/>}/>
          <Route path='/nigo' element={<Nigo/>}/>
          <Route path='/pacsun' element={<Pacsun/>}/>
          <Route path='/yeezus' element={<Yeezus/>}/>
          <Route path='/cashincashout' element={<Cico/>}/>
          <Route path='/alwaysyams' element={<Alwaysyams/>}/>
        </Routes>
      </body> 
    </div>
  );
}

export default App;
