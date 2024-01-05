import { useMemo, useState } from "react";

const UseMemoPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const ValidatePassword = ({password}) => {
        if(!password.length) return <span>A senha deve ser preenchida!</span>
        if(password.length < 5) return <span>A senha deve ser maior que 5 caracteres.</span>

        return <span>Senha aprovada!</span>
    }

    const validate = useMemo(() => {
        return <ValidatePassword password={password}/>
    }, [password])

    return (
        <>
            <h1>Bem vindo ao useMemo!</h1>
            <input placeholder="Nome" value={name} onChange={(e) => {setName(e.target.value)}}/>
            <input placeholder="Senha" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            {validate}
        </>
    );
}

export default UseMemoPage;