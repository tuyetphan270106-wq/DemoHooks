import React, { useMemo, useState } from 'react'

function DemoMemo() {
    //useMemo dung de ghi nho ket qua tinh toan trong truong hop phep tinh ton nhieu tai nguyen ma ko muon tinh lai
    const [number, setNumber] = useState(10);
    const doubleNumber = useMemo(() => {
        return number * 2;
    }, [number]);
    //doubleNumber chi duoc tinh lai khi gia tri co so: number thay doi
    return (
        <div>
            <p>Double Number: {doubleNumber}</p>
            <button onClick={() => { setNumber(number + 1); }}>Increase</button>
        </div>
    )
}

export default DemoMemo
