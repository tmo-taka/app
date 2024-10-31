import { useSelector, useDispatch } from 'react-redux'
import { Dispatch } from 'redux';
import type { User, Action } from '../reducers/user'
import { type RootState } from '../reducers';

export const useUser = ():[User,(action:Action) => void] => {
    const user = useSelector((state:RootState) => state.user);
    const dispatchUser = useDispatch<Dispatch<Action>>();
    return [user,dispatchUser]
}