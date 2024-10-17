import { INCREMENT, DECREMENT, type Action } from '../actions'

const initialState = { value: 0 }

export default (state = initialState, action: Action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}