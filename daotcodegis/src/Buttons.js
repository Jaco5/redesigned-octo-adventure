import React from "react";


function countString(text) {
    let strArr = text.match(/this.state.string/ig);
    let count = strArr.length();
    console.log(count)
}


export default class Buttons extends React.Component {
    state = {
        string : ""
    };

    
    render() {
        return (
            <div>
                <button onClick=""></button>
            </div>
        )
    }
}