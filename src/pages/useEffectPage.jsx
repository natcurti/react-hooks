import { useEffect, useState } from "react";

const UseEffectPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(name);
    }, [name]);

    return (
        <>
            <h1>Bem vindo ao useEffect!</h1>
            <input placeholder="Nome" value={name} onChange={(e) => {setName(e.target.value)}}/>
            <input placeholder="Senha" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        </>
    );
}

export default UseEffectPage;