import { useState } from "react";

type Props = {
    user: string
}

export const Component1 = ():JSX.Element => {
console.log('reRender Component1')
const [user, setUser] = useState("John");

const changedName = ():void => {
    user === 'John' ? setUser('Pony') : setUser('John')
}

return (
    <>
        <h1>{`Hello ${user}!`}</h1>
        <button onClick={() => changedName()}>Name Changed</button>
        <Component2 user={user} />
    </>
    );
}

function Component2({ user }: Props) {
    console.log('reRender Component2')
    return (
    <>
        <h1>Component 2</h1>
        <Component3 user={user} />
    </>
    );
}

function Component3({ user }: Props) {
    console.log('reRender Component3')
    return (
    <>
        <h1>Component 3</h1>
        <Component4 user={user} />
    </>
    );
}

function Component4({ user }: Props) {
    console.log('reRender Component4')
    return (
    <>
        <h1>Component 4</h1>
        <Component5 user={user} />
    </>
    );
}

function Component5({ user }: Props) {
    console.log('reRender Component5')
    return (
    <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
    </>
    );
}