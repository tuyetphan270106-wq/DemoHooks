import React, { useRef } from 'react'

function DemoRef() {
    const inputRef = useRef();
    const focusInput = () => {
        inputRef.current.focus();
    };
    return (
        <div>
            <input ref={inputRef}></input>
            <button onClick={focusInput}>Focus</button>
        </div>
    )
}

export default DemoRef
