import * as types from './legacyActionTypes'

export type IncrementAction = {
    type: typeof types.INCREMENT
}

export type DecrementAction = {
    type: typeof types.DECREMENT
}

export type SetCountAction = {
    type: typeof types.SET_COUNT
    payload: {
        amount: number
    }
}

export type Actions = IncrementAction | DecrementAction | SetCountAction



