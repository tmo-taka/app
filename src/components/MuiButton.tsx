import { Button } from "@mui/material"
import { useCounter } from "../hooks/useCounter"

type Props = {
    text: string,

}

export const MuiButton = (props:Props):JSX.Element => {
    const [counter, dispatchAction] = useCounter();

    const alertDisplay = () => {
        alert('押されました')
    }
    return (
        <Button variant="outlined" onClick={alertDisplay}>
            {props.text}
            <div>{counter}</div>
        </Button>
    )
}