import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

const HomePage = () => {
    const {name, setName} = useContext(UserContext);
    setName('Natalia Julia');
    return (
        <>
            <h1>Bem vindo aos Hooks! {name}</h1>
            <Link to="/useState">useState</Link><br/>
            <Link to="/useEffect">useEffect</Link><br/>
            <Link to="/useCallback">useCallback</Link><br/>
            <Link to="/useMemo">useMemo</Link><br/>
            <Link to="/useRef">useRef</Link><br/>
        </>

    );
}

export default HomePage;