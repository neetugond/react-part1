import { useRef, useState } from "react"

const Counter = () => {
    console.log('render Counter')
    const [inc, setInc] = useState(0)
    // let num = 0
    let num = useRef(0) // 1. the value store in object formate for accessing this num.current


    const handleInc=() => {
        setInc(inc + 1)
        // console.log(inc) //0 previous value will be print because state is asynchronous type, 1st whole code which run than next time render code

        // won't work because function render everytime so everytime 1 will print for this we can use useRef 
        // num++
        // console.log(num)

        num.current++ // 2.never use as a rerendering value, it is just for storing value
        // never use on place of state
        // any value which don't want to display only need record for that we can use useRef

        console.log(num.current)
    }
    const handleDec = () => {
        if (inc === 0) {
            setInc(inc)
        } else {
            setInc(inc-1)
        }

        // console.log(inc)
    }

    //local variable can't be in react because is render the component for this we need state, we can change state
    // let number = 0
    // const handleInc = () => {
    //     number++;
    //     console.log(number)

    // }
   
    return (
        <>
            {/* never useRef to display value */}
            {/* <h3>{number}</h3> */}
            <h3>{ inc}</h3>
            <button onClick={handleDec}>-</button>
            <button onClick={handleInc}>+</button>
            
        </>
    )
}

export default Counter