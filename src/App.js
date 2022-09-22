import Button from "./Button"

const arr = [
    'chachito feliz',
    'chachito triste',
    'chachito emocionado'
]

function App() {
    const miVariable = false
    if(miVariable){
        return <p>Mi variable dio true!</p>
    }
  return (
    <div>
        <h1 onClick={(e)=> console.log('click',e)}>Hola mundo</h1>
        {arr.map(el => <p key={el}>{el}</p>)}
        <Button onClick={()=>console.log('clickeado')} >
            Enviar
        </Button>
    </div>
  )
}

export default App