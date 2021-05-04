//https://sujeitoprogramador.com/r-api/?api=filmes/

import Routes from './routes';


import 'react-toastify/dist/ReactToastify.css';
//alert melhorado
// npm install toastify
import { ToastContainer } from 'react-toastify';

import './style.css';

export default function App(){
  fetch(process.env.REACT_APP_API_URL || 'https://localhost:8080/api/v1')


    return(
      <div className="app">
        <Routes/>
        <ToastContainer autoClose={3000}/>
      </div>
    );
}

