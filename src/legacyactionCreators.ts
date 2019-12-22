import * as types from './legacyActionTypes'
import * as Actions from './legacyActions'

export function increment(): Actions.IncrementAction {
    return { type: types.INCREMENT }
}

export function decrement(): Actions.DecrementAction {
    return { type: types.DECREMENT }
}

export function setCount(amount: number): Actions.SetCountAction {
    return { type: types.SET_COUNT, payload: { amount }}
}
