type State = {
    count: number
    unit: string
}

type IncrementAction = {
    type: 'INCREMENT'
}

type DecrementAction = {
    type: 'DECREMENT'
}

type SetCountAction = {
    type: 'SET_COUNT'
    payload: {
        amount: number
    }
}

type Actions = IncrementAction | DecrementAction | SetCountAction

export const initialState: State = {
    count: 0,
    unit: 'pt'
}

export const reducer: (state: State, action: Actions) => State =
    (state , action) => {
        switch (action.type) {
            case 'INCREMENT':
                return { ...state, count: state.count + 1 }
            case 'DECREMENT':
                return { ...state, count: state.count - 1 }
            case 'SET_COUNT':
                return { ...state, count: action.payload.amount }
            default:
                throw new Error()
        }
    }
