import React, {Fragment, useEffect, useState} from 'react';
import Formulario from './Components/Formulario';
import Cancion from './Components/Cancion';
import Info from './Components/Info';
import axios from 'axios';

function App() {

const [buscarLetra, setBuscarLetra] = useState({});
const [letra, setLetra] = useState('');
const [informacion, setInformacion] = useState({});

useEffect(() => {
  
if(Object.keys(buscarLetra).length===0)return;
const consultarAPILetra=async()=>{
  const {artista, cancion} = buscarLetra;
  const url=`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
  const url2=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

  const[letra, informacion] = await Promise.all([
    axios(url),
    axios(url2)
  ]); 
  setLetra (letra.data.lyrics);
  setInformacion (informacion.data.artists[0]);



};
consultarAPILetra();

}, [buscarLetra])
  return (
    <Fragment>
      <Formulario setBuscarLetra={setBuscarLetra}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info informacion={informacion}/>
          </div>
          <div className="col-md-6">
            <Cancion letra={letra}/>
          </div>
        </div>
        
      </div>
    </Fragment>
  );
}

export default App;
