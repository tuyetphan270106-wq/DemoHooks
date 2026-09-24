import React, { useEffect, useState } from 'react'

function DemoState() {
    const [count, setCount] = useState(10);
    //Thuc hien effect khi ma count thay doi:[dependency] - gia tri phu thuoc
    //1. ko co dependency: effect chay sau khi component render
    //2. dependency rong [] : effect chay mot lan sau lan render dau tien cua component
    //3. Dependency co gia tri [denpendency] : effect thuc hien khi gia tri thay doi
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])
    return (
        <div>
            <p>Number: {count}</p>
            <button onClick={() => { setCount(count + 5); }}>Increase</button>
        </div>
    )
}

export default DemoState
