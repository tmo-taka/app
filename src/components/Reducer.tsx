import {useReducer} from 'react'

type NameObject = {
    id: number,
    name: string
}

const initialLists:NameObject[] = [
    {
        id: 1,
        name: 'test'
    },
    {
        id: 2,
        name: 'yamamoto'
    },
];

const reducer = (state:NameObject[], action: {type: 'ADD_ITEM' | 'DELETE_ITEM'}) => {
    switch (action.type) {
        case "ADD_ITEM":
            const addObject = {
                id: state.slice(-1)[0].id + 1,
                name: 'test'
            }
            state = [...state, addObject]
            return state;
        case "DELETE_ITEM":
            state.pop()
            return state;
        default:
            return state;
    }
};

export const ReducerTest = () => {
    const [nameLists, dispatch] = useReducer(reducer, initialLists);

    const addName = () => {
        dispatch({type:'ADD_ITEM'})
    }

    const deleteName = () => {
        dispatch({type:'DELETE_ITEM'})
    }

    return (
        <div>
            {
                nameLists.map((nameObj:NameObj) => (
                    <div key={nameObj.id}>
                        <div>{nameObj.id}</div>
                        <div>{nameObj.name}</div>
                    </div>
                ))
            }
            <button onClick={() => addName()}>
                add
            </button>
            <button onClick={() => deleteName()}>
                delete
            </button>
        </div>
    )
}