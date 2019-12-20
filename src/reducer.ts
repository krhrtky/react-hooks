type State = {
    count: number
    unit: string
}

type Action = {
    type: 'increment' | 'decrement'
}

export const initialState: State = {
    count: 0,
    unit: 'pt'
}

export const reducer: (state: State, action: Action) => State =
    (state , action) => {
        switch (action.type) {
            case 'increment':
                return { ...state, count: state.count + 1 }
            case 'decrement':
                return { ...state, count: state.count - 1 }
            default:
                throw new Error()
        }
    }
