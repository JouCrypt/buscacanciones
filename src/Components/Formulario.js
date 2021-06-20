import React,{useState} from 'react';



const Formulario = ({setBuscarLetra}) => {

    const [error, setError] = useState(false);

const [busqueda, setBusqueda] = useState({
    artista:'',
    cancion:''
});

const {artista, cancion} = busqueda;

//funcion a cada input para leer su contenido
const actualizarState= (e)=>{
   const {name, value} = e.target;
   setBusqueda({...busqueda,[name]:value});
};
const buscarInformacion=(e)=>{
 e.preventDefault();

 if (artista.trim()==='' || cancion.trim()===''){
     setError(true);
     return;
 }

 setError(false);
 //todo bien, pasar componente principal
 setBuscarLetra(busqueda);
};


    return (<div className="bg-info">
         
        <div className="container">
            
            <div className="row">
             
                <form className="col card text-white bg-transparent mb-5 pt-5 pb=2"
                onSubmit={buscarInformacion}>
                    <fieldset>
                        <legend className="text-center">
                            Buscador Letras Canciones
                        </legend>
                        {error ? <p className="alert alert-danger text-center p-2"> Todos los campos son obligatorios</p>:null}
                        <div className="row">
                            <div className="col-md-6">
                               <div className="form-group">
                                   <label>Artista</label>
                                   <input type="text" name="artista" className="form-control" placeholder="Nombre Artista" onChange={actualizarState}
                                   value={artista}/>
                               </div>
                               
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                   <label>Canción</label>
                                   <input type="text" name="cancion" className="form-control" placeholder="Nombre Cancion" onChange={actualizarState} value={cancion}/>
                               </div>
                            </div>
                        </div>
                         <button type="submit" className="btn btn-primary float-right">Buscar</button>   
                        
                    </fieldset>
                </form>
            </div>
        </div>
        
    </div>  );
}
 
export default Formulario;