import { useState } from "react"

const withCounter = (OldComponent) => {
    return function EnhanceComponent(props){
        const [count,setCount] = useState(0)
        return (
            <OldComponent {...props} count={count} increment={()=> setCount(count+1)}/>
        )
    }
}

export default withCounter