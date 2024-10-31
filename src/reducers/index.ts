import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'

export const rootReducer =  combineReducers({ counter, user })

export type RootState = ReturnType<typeof rootReducer>;