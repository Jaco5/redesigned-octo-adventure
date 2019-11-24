import React from "react";



export default class Form extends React.Component {
    state = {
        string : "red",
        inputText : "redmond redford",
    };

    countString =()=> {
        let strArr = this.state.inputText.match(/red/ig);
        console.log(strArr);
        let count = strArr.length;
        console.log(count)
    }

    render() {
        return (
            <div>
                <form >
                    <input className="main-text-input"
                    value={this.state.inputText} 
                    onChange={e=>this.setState({inputText:e.target.value})}
                    />
                </form>
                <button onClick={this.countString}></button>
            </div>
        );
    }
}



