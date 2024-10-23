import React from 'react';
import './App.css';
import { useRef, useEffect, useState } from 'react';
import { ApolloProvider } from "@apollo/client";
import { client } from './utils/graphql/client'
import { Navigation } from './components/Navigation';
import { Component1 } from './components/NestedContext';
import { ReducerTest } from './components/Reducer';
import { Form } from './components/TanstackForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCounter } from './hooks/useCounter';
import { increment, decrement } from './actions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {routes} from './routes/map'

function App() {
  const [counter, dispatchAction] = useCounter();
  const [text, setText] = useState('');
  const [flag,setFlag] = useState(false);
  const count = useRef(0);

  useEffect(() => {
    count.current++;
  })

  const inputText = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log('hai');
    const newText = event.target.value;
    setText(newText)
  }

  const handleClick = ():void => {
    dispatchAction(increment())
  }

  const minus = ():void => {
    dispatchAction(decrement())
  }

  // const changeComponent = ():void => {
  //   const updateFlag = !flag;
  //   setFlag(updateFlag);
  // }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        これ {count.current}
        <BrowserRouter>
          <Routes>
            {
              routes.map(({path,Component}) =><Route key={path} path={path} Component={Component} />)
            }
          </Routes>
        </BrowserRouter>
        <Navigation />
        <Form />
        <Component1 />
        <ButtonGroup variant="contained" size="large" aria-label="Basic button group">
          <Button onClick={handleClick}>redux add</Button>
          <Button onClick={minus}>redux minus</Button>
        </ButtonGroup>
        <div>{counter}</div>
        <input type="text" onChange={inputText} value={text}/>
        <div>{text}</div>
        <ReducerTest />
      </div>
    </ApolloProvider>
  );
}

export default App;
