
import React, { useState } from 'react'

function DemoState1() {

    const [count, setCount] = useState(0);

    const [name, setName] = useState("");

    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    }

    // Todo
    const [toDo, settoDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const handleAddTodo = () => {
        if (toDo.trim() === "") {
            return;
        }

        setToDos([...toDos, toDo]);
        settoDo("");
    };

    const handleDelete = (index) => {
        const newTodo = toDos.filter((item, i) => i !== index);
        setToDos(newTodo);
    }

    // Color
    const [color, setColor] = useState("");

    const handleChange = (e) => {
        setColor(e.target.value);
    };

    // Search
    const [search, setSearch] = useState("");

    const items = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Pineapple"
    ];

    const filterItems = items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    // Drag and Drop
    const [fruits, setFruits] = useState([
        "Apple",
        "Banana",
        "Orange",
        "Mango"
    ]);

    const [draggingItem, setDraggingItem] = useState(null);

    const handleDragStart = (index) => {
        setDraggingItem(index);
    };

    const handleDragEnd = () => {
        setDraggingItem(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (index) => {
        const newItems = [...fruits];

        const draggedItem = newItems[draggingItem];

        newItems.splice(draggingItem, 1);

        let newIndex = index;

        if (draggingItem < index) {
            newIndex--;
        }

        newItems.splice(newIndex, 0, draggedItem);

        setFruits(newItems);
    };

    return (
        <div>

            {/* Counter */}
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <p>Count: {count}</p>


            {/* Input */}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p>Input text: {name}</p>


            {/* Toggle */}
            <button onClick={handleToggle}>
                {show ? "Hide" : "Show"}
            </button>

            {show && <p>Toggle me!</p>}

            <br />


            {/* Todo List */}
            <input
                type="text"
                value={toDo}
                onChange={(e) => settoDo(e.target.value)}
            />

            <button onClick={handleAddTodo}>
                Add
            </button>

            <h3>To do list:</h3>

            {toDos.map((item, index) => (
                <div key={index}>
                    <span>{item}</span>&nbsp;

                    <button onClick={() => handleDelete(index)}>
                        Delete
                    </button>
                </div>
            ))}


            {/* Color Switcher */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >

                <select
                    value={color}
                    onChange={handleChange}
                >
                    <option value="">Select a color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>

                <div
                    style={{
                        backgroundColor: color,
                        width: "100px",
                        height: "100px",
                        marginTop: "20px",
                    }}
                >
                </div>

            </div>


            {/* Search Filter */}
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {filterItems.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>


            {/* Drag and Drop */}
            <h2>Drag and Drop List</h2>

            <ul>
                {fruits.map((item, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragEnd={handleDragEnd}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default DemoState1