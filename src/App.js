import logo from './logo.svg';
import './App.css';
const estilo2 = {
  boxSadow: '0 5px 3px rgba(0,0,0,0.5)'
}
const estilo = ({bg = '#222'}) =>({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})
const Li = ({children}) =>{
  return(
    <li style={{...estilo2,...estilo({bg: '#333'})} }class='clase-li'>{children}</li>
  )
}
const App = () =>{
  const valor = 'triste'
  return (
   <ul style={estilo({bg: '#750'})} className='clase-css'>
    <Li estado='feliz'>valor de li</Li>
   </ul>
  );
}

export default App;
