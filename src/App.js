
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =()=>{
 const  pageSize=6;
  const apikey=process.env.REACT_APP_NEWS_API;
  const [progress,setProgress]=useState(0);
    return (
      <>
      <BrowserRouter>
      <div>
        <Navbar/>
        <LoadingBar
        color="#f11946"
        height={4}
        progress={progress}
      />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="us" category="business"/>}></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}></Route>
          <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="us" category="health"/>}></Route>
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="us" category="science"/>}></Route>
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="us" category="sports"/>}></Route>
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="us" category="technology"/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
      </>
    )
  }
  export default App;



