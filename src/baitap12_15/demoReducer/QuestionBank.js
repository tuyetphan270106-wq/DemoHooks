import React, { useReducer } from "react";

const initialState = {
    questions: [
        {
            id: 1,
            question: "What is the capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Perth"],
            answer: "Canberra"
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            id: 3,
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            answer: "Pacific Ocean"
        }
    ],
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    showScore: false
};

function reducer(state, action) {
    switch (action.type) {
        case "SELECT_OPTION":
            return {
                ...state,
                selectedOption: action.payload
            };

        case "NEXT_QUESTION": {
            const current = state.questions[state.currentQuestion];

            const newScore =
                state.selectedOption === current.answer
                    ? state.score + 1
                    : state.score;

            if (state.currentQuestion + 1 < state.questions.length) {
                return {
                    ...state,
                    currentQuestion: state.currentQuestion + 1,
                    selectedOption: "",
                    score: newScore
                };
            }

            return {
                ...state,
                score: newScore,
                showScore: true
            };
        }

        case "RESTART_QUIZ":
            return initialState;

        default:
            return state;
    }
}

function QuestionBank() {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    const {
        questions,
        currentQuestion,
        selectedOption,
        score,
        showScore
    } = state;

    const question = questions[currentQuestion];

    const handleOptionSelect = (option) => {
        dispatch({
            type: "SELECT_OPTION",
            payload: option
        });
    };

    const handleNextQuestion = () => {
        dispatch({
            type: "NEXT_QUESTION"
        });
    };

    const handleRestartQuiz = () => {
        dispatch({
            type: "RESTART_QUIZ"
        });
    };

    if (showScore) {
        return (
            <div>
                <h2>Quiz Completed!</h2>

                <p>
                    Your score: {score} / {questions.length}
                </p>

                <button onClick={handleRestartQuiz}>
                    Restart Quiz
                </button>
            </div>
        );
    }

    return (
        <div>
            <h2>Question Bank</h2>

            <h3>
                Question {currentQuestion + 1} / {questions.length}
            </h3>

            <h3>{question.question}</h3>

            {question.options.map((option) => (
                <div key={option}>
                    <button
                        onClick={() => handleOptionSelect(option)}
                        style={{
                            backgroundColor:
                                selectedOption === option
                                    ? "lightblue"
                                    : "white"
                        }}
                    >
                        {option}
                    </button>
                </div>
            ))}

            <br />

            <button
                onClick={handleNextQuestion}
                disabled={selectedOption === ""}
            >
                {currentQuestion === questions.length - 1
                    ? "Finish"
                    : "Next Question"}
            </button>
        </div>
    );
}

export default QuestionBank;