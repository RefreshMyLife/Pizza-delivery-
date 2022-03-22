import React from 'react';
import './scss/app.scss';

import {Header} from './components';//сборщик ищет кмпоненту, по проекту и сначала заходит в js файлы
import {Home, Cart} from './pages';
import { Route, Routes } from 'react-router-dom';



// 
function App() {
  
    return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        
      <Routes>
          <Route path="/" element ={<Home/>} exact />
          <Route path="/cart" element={<Cart/>} exact />
      </Routes>
      </div>
    </div>
  );
}

export default App;
