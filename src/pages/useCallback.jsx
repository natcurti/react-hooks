import { useCallback, useState } from "react";

const UseCallBackPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onChangeName = useCallback((e) => 
        {setName(e.target.value)
    }, [])

    return (
        <>
            <h1>Bem vindo ao useCallback!</h1>
            <input placeholder="Nome" value={name} onChange={onChangeName}/>
            <input placeholder="Senha" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        </>
    );
}

export default UseCallBackPage;