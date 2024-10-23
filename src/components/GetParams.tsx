import { useParams } from "react-router-dom";

export const GetParams = ():JSX.Element => {
    const {name} = useParams();

    return (
        <div>{name}がパラメータです</div>
    )
}