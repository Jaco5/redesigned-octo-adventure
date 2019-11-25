import React from "react";



export default class Form extends React.Component {
    state = {
        string : "red",
        inputText : "redmond redford",
    };

    _regExpEscape = (stringInput) => {
        return stringInput.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
    };
   

    _countString =()=> {
        let regExp = new RegExp(this._regExpEscape(this.state.string), "ig");
        console.log(regExp);
        let strArr = this.state.inputText.match(regExp);
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
                <button onClick={this._countString}></button>
            </div>
        );
    }
}



