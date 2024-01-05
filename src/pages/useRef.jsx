import { useState, useRef } from "react";

const UseRef = () => {

    const [message, setMessage] = useState('');
    const InputRef = useRef();

    return (
        <>
            <h1>Bem vindo ao useRef!</h1>
            <input placeholder="Digite sua mensagem" 
            value={message} onChange={(e) => setMessage(e.target.value)} 
            ref={InputRef}/>
            <button onClick={() => {
                setMessage('');
                InputRef.current.focus();
        }}>Enviar</button>       
        </>
    );
}

export default UseRef;