import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Query = ():JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    console.log(id);
    useEffect(() => {
        if(id === "2"){
            setSearchParams({id: '6'})
        }
    },[id])
    return (
        <div>{id}がクエリです</div>
    )
}