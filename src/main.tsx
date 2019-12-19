import * as React from 'react'
import { render } from 'react-dom'
import {useCallback, useEffect, useMemo, useState} from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return () => clearInterval(interval)
    })
    return <div>{ count }</div>
}

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

const Double = () => {
    const [count, setCount] = useState(0)
    const double = useMemo(() => count * 2, [count])
    const doubleWithUnit = useMemo(() => `${double} pt`, [double])
    const handleClick = useCallback(() => {
        setCount(prevState => prevState + 1)
    }, [])

    return (
        <div>
            <p>cont  : {count}</p>
            <p>double: {double}</p>
            <p>doubleWithUnit : {doubleWithUnit}</p>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

type Props = {
    clickedX: number
    clickedY: number
    handleClick: (Event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Coordinate: React.FC<Props> = props => (
    <div>
        <div style={{width: 100, height: 100, background: '#ccf'}}/>
        <p style={{ width: 100, height: 100, background: '#fcc' }} onClick={props.handleClick}/>
        <p>X: { props.clickedX }</p>
        <p>Y: { props.clickedY }</p>
    </div>
)

const Wrapper = () => {
    const [state, update] = useState({
        clickedX: 0,
        clickedY: 0
    })
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            event.persist()
            const { top, left } = event.currentTarget.getBoundingClientRect()
            update(prevState => ({
                ...prevState,
                clickedX: event.clientX - left,
                clickedY: event.clientY - top
            }))
        },
        []
    )
    return (
        <Coordinate
            clickedX={state.clickedX}
            clickedY={state.clickedY}
            handleClick={handleClick}
        />
    )
}

const Title = () => <h1>hooks sample</h1>

const App = () => (
    <div>
        <Title/>
        <Counter/>
        <Double/>
        <Wrapper/>
        <CounterEffect/>
    </div>
)

render(<App/>, document.getElementById('app'))
