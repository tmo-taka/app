import React from 'react';
import './App.css';
import { useRef, useEffect, useState } from 'react';
import { ApolloProvider } from "@apollo/client";
import { client } from './utils/graphql/client'
import { Navigation } from './components/Navigation';
import { Page } from './components/Page';
import { Component1 } from './components/NestedContext';
import { ReducerTest } from './components/Reducer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [text, setText] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current++;
  })

  const inputText = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log('hai');
    const newText = event.target.value;
    setText(newText)
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
        {/* <Page /> */}
        <Component1 />
        <input type="text" onChange={inputText} value={text}/>
        <div>{text}</div>
        <ReducerTest />
      </div>
    </ApolloProvider>
  );
}

export default App;
