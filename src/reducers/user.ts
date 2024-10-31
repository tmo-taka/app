const initialUser = {
    name: 'testUser',
    age: 28
}

export type User = typeof initialUser

type NameChange = {
    name: string,
    type: 'NAME_CHANGE'
}

type AgeChange = {
    age: number,
    type: 'AGE_CHANGE'
}

export type Action = NameChange | AgeChange

export default (state = initialUser, action: Action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'NAME_CHANGE':
            return {
                ...state,
                name: action.name
            }
        case 'AGE_CHANGE':
            return {
                ...state,
                age: action.age
            }
        default:
            return state
    }
}