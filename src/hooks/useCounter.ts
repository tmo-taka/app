import { useSelector, useDispatch } from 'react-redux'
import { Dispatch } from 'redux';
import {type Action} from '../actions'
import { type RootState } from '../reducers';

export const useCounter = ():[number,(action:Action) => void] => {
    const counter = useSelector((state:RootState) => state.counter.value);
    const dispatchAction = useDispatch<Dispatch<Action>>();
    return [counter,dispatchAction]
}