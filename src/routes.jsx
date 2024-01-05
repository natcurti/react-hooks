import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import UseStatePage from './pages/useStatePage';
import UseEffectPage from './pages/useEffectPage';
import UseCallBackPage from './pages/useCallback';
import UseMemoPage from './pages/useMemo';
import UseRef from './pages/useRef';
import UserContextProvider from './context/userContext';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/useState" element={<UseStatePage/>}/>
                    <Route path="/useEffect" element={<UseEffectPage/>}/>
                    <Route path="/useCallback" element={<UseCallBackPage/>}/>
                    <Route path="/useMemo" element={<UseMemoPage/>}/>
                    <Route path="/useRef" element={<UseRef/>}/>
                </Routes>
            </UserContextProvider>
        </BrowserRouter>
    )
}