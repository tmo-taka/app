import React from 'react';
import './App.css';
import { useRef, useEffect, useState } from 'react';
import { ApolloProvider } from "@apollo/client";
import { client } from './utils/graphql/client'
import { Navigation } from './components/Navigation';
import { Page } from './components/Page';
import { Component1 } from './components/NestedContext';
import { ReducerTest } from './components/Reducer';
import { Form } from './components/TanstackForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';
import { type RootState } from './reducers';


function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const [text, setText] = useState('');
  const count = useRef(0);

  const dispatch = useDispatch();

  useEffect(() => {
    count.current++;
  })

  const inputText = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log('hai');
    const newText = event.target.value;
    setText(newText)
  }

  const handleClick = ():void => {
    dispatch(increment())
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        これ {count.current}
        <BrowserRouter>
          <Routes>
            <Route path="/page" element={<Page />} />
            <Route path="*" element={<div>エラー</div>} />
          </Routes>
        </BrowserRouter>
        <Navigation />
        <Form />
        <Component1 />
        <button onClick={handleClick}>テスト</button>
        <div>{counter}</div>
        <input type="text" onChange={inputText} value={text}/>
        <div>{text}</div>
        <ReducerTest />
      </div>
    </ApolloProvider>
  );
}

export default App;
