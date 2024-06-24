import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './Components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SignUp from './Components/User/SignUp';
import { CircularProgress, Stack } from '@chakra-ui/react';

const Header = lazy(() => import('./Components/Header/Header'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const LondonMart = lazy(() => import('./Components/LatestProperty/LondonMart/LondonMart'));
const EliteX = lazy(() => import('./Components/LatestProperty/Elite-x/EliteX'));
const Eldeco = lazy(() => import('./Components/LatestProperty/Eldeco/Eldeco'));
const Sikka = lazy(() => import('./Components/LatestProperty/Sikka/Sikka'));
const Home = lazy(() => import('./Components/Home/Home'));

function App() {
  return (
    <BrowserRouter>
    <Suspense
      fallback={
        <Stack w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'}  >
            <CircularProgress thickness="4px" size={'20vmax'} isIndeterminate color='green.300' />
            {/* <Loader /> */}
        </Stack>
      }
    >
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/london" element={<LondonMart />} />
          <Route path="/elitex" element={<EliteX />} />
          <Route path="/eldeco" element={<Eldeco />} />
          <Route path="/sikka" element={<Sikka />} />
        </Routes>
        <Footer />
      </>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
