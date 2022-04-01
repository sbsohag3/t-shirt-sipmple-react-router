import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import OrderReview from './component/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/orderreview' element={<OrderReview/>}/>

      </Routes>

    </div>
  );
}
export default App;
