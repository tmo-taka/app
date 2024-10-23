import { useState, useContext, createContext, memo, useCallback } from "react";

type Props = {
    test: string
}

const UserContext = createContext('')

export const Component1 = ():JSX.Element => {
console.log('reRender Component1')
const [user, setUser] = useState("John");
const [test, setTest] = useState('これはテスト');

const changedName = useCallback(():void => {
    user === 'John' ? setUser('Pony') : setUser('John')
    if(test === 'これはテスト') {setTest('これはテスト')}
},[])

return (
    <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <button onClick={() => changedName()}>Name Changed</button>
        <Component2 test={test} onClick={changedName}/>
    </UserContext.Provider>
    );
}

type Child2Props = {
    onClick: () => void
} & Props

const Component2 = memo(({test}:Child2Props) => {
    console.log('reRender Component2')
    return (
    <>
        <h1>Component 2</h1>
        <Component3 test={test}/>
    </>
    );
})

const Component3 = memo(({test}:Props) => {
    console.log('reRender Component3')
    return (
    <>
        <h1>Component 3</h1>
        <Component4 test={test}/>
    </>
    );
})

const Component4 = memo(({test}:Props) => {
    console.log('reRender Component4')
    return (
    <>
        <h1>Component 4</h1>
        <Component5 test={test} />
    </>
    );
})

function Component5({test}:Props) {
    const user = useContext(UserContext);
    console.log('reRender Component5')
    return (
    <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
        <p>{test}</p>
    </>
    );
}