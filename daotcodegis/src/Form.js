import React from "react";


export default class Form extends React.Component {
    state = {
        string : "",
        inputText : "",
    };

    

    render() {
        return (
                <form >
                    <input className="main-text-input"
                    value={this.state.inputText} 
                    onChange={e=>this.setState({inputText:e.target.value})}
                    />
                </form>
        );
    }
}



