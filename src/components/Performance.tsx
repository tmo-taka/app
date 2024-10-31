import {useCallback, useState, memo} from 'react'

type Props = {
    text: string,
    clickFn: () => void
}

const ChildPerformance = memo((props: Props):JSX.Element => {
    console.log(`re-render Performane`);
    return (
        <div onClick={props.clickFn}>
            {props.text}
        </div>
    )
})

export const Performance = ():JSX.Element => {
    const [text, setText] = useState('');
    const clickFn = useCallback(():void => {
        alert('tesuto')
    },[])

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={inputChange} value={text}/>
            <ChildPerformance clickFn={clickFn} text={'テスト'} />
        </div>
    )
}