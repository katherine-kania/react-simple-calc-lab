import React, { Component } from 'react'

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0
        }
    }
    
    setNum = (e, num) => {
        this.setState({ 
            [num]: parseInt(e.target.value)
            })
    }


    addNums = () => {
        this.setState(prevState => (
            {sum: prevState.num1 + prevState.num2}
        ))
    }
   
  
    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input 
                        type="text" 
                        placeholder="Enter your first number" 
                        onChange={ (e) => this.setNum(e, 'num1') } 
                    />
                    <span>+</span>
                    <input 
                        type="text" 
                        placeholder="Enter your second number" 
                        onChange={ (e) => this.setNum(e, 'num2') } 
                    />
                    <button onClick={this.addNums}>=</button>
                    <h3>Result: {this.state.sum}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator;