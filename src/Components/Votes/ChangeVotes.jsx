import { useEffect, useState} from "react";

const ChangeVotes = ({votes, setVotes}) => {

    const incrementClick = () => {
        patchVotes().th
        setVotes(votes+1)
    }
    
    const decrementClick = () => {
        setVotes(votes-1)
    }

    return (
        <main>
            <p>votes</p>
            <button onClick={()=> incrementClick()}>+</button>
                <button onClick={() => decrementClick() }>-</button>
        </main>
    )
}

export default ChangeVotes