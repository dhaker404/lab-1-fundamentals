import './JSXErrors.css'

// ERROR 1: What's wrong here?
function BadComponent1() {
    return (
        <div className="BadComponent-container">
            <h1>Hello</h1>
            <p>This is broken</p>
        </div>
    )
}
// ERROR 2: What's wrong here?
function BadComponent2() {
const isTrue = true
    return (
        <div className="BadComponent-container">
            <div>
                <p>Result:</p>
                {isTrue ? <h1>Yes</h1> : <h1>no</h1>}
            </div>

        </div>
    )
}
// ERROR 3: What's wrong here?
function BadComponent3() {
    return (
        <div className="BadComponent-container">
            <img src="b0p8axbk05nd1.png"/>
            <p>A paragraph</p>
        </div>
    )
}

export { BadComponent1, BadComponent2, BadComponent3 }
