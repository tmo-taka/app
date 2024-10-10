import { useState, useContext, createContext, memo } from "react";

type Props = {
    user: string
}

const UserContext = createContext('')

export const Component1 = ():JSX.Element => {
console.log('reRender Component1')
const [user, setUser] = useState("John");

const changedName = ():void => {
    user === 'John' ? setUser('Pony') : setUser('John')
}

return (
    <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <button onClick={() => changedName()}>Name Changed</button>
        <Component2 />
    </UserContext.Provider>
    );
}

const Component2 = memo(() => {
    console.log('reRender Component2')
    return (
    <>
        <h1>Component 2</h1>
        <Component3 />
    </>
    );
})

const Component3 = memo(() => {
    console.log('reRender Component3')
    return (
    <>
        <h1>Component 3</h1>
        <Component4 />
    </>
    );
})

const Component4 = memo(() => {
    console.log('reRender Component4')
    return (
    <>
        <h1>Component 4</h1>
        <Component5 />
    </>
    );
})

function Component5() {
    const user = useContext(UserContext);
    console.log('reRender Component5')
    return (
    <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
    </>
    );
}