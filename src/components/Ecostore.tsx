import { useReducer, Reducer } from "react";

type State = {
    name: string,
    email: string,
    tel: string,
}

type Action = {
    type: "UPDATE_EMAIL" | "UPDATE_TEL",
    payload: string
}

const reducer: Reducer<State, Action> = (state,action) => {
    switch(action.type) {
        case 'UPDATE_EMAIL':
            return {...state, email: action.payload}
        case 'UPDATE_TEL':
            return {...state, tel: action.payload}
    }
}

const initialState = {
    name: "コナン",
    email: "",
    tel: "",
}

export const Ecostore = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const action = (e: ReactChangeEvent<HTMLInputElement>, type: Action.type):void => {
        const payload = e.target.value
        dispatch({type,payload});
    }

    return (
        <form action="">
            <div>
                こんにちは、{state.name}
            </div>
            <div>
                メールアドレス、{state.email}
            </div>
            <div>
                電話番号、{state.tel}
            </div>
            <input type="text" name="email" value={state.email} onChange={(e)=> action(e,'UPDATE_EMAIL')}/>
            <input type="text" name="tel" value={state.tel} onChange={(e)=> action(e,'UPDATE_TEL')} />
        </form>
    )
}