import React from "react";


export default class Form extends React.Component {
    state = {
        string : "",
        inputText : "",
    };

    render() {
        return (
            <form className="main-text-input">
                <input 
                value={this.state.inputText} 
                onChange={e=>this.setState({inputText:e.target.value})}
                />
            </form>
        );
    }
}



