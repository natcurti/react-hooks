import { useState } from 'react';

const UseStatePage = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Bem vindo ao useState!</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>Remover</button>
            <button onClick={() => setCount(count + 1)}>Adicionar</button>
        </>
    );
}

export default UseStatePage;