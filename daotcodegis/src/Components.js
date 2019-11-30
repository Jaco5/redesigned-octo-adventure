import React from "react";



export default class Form extends React.Component {
    state = {
        string : "th",
        inputText : "A bunch of the words. A bunch of the words. A bunch of the words. A bunch of the words. A bunch of the words.",
    };

    _regExpEscape = (stringInput) => {
        return stringInput.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
    };
   

    _countString =()=> {
        let regExp = new RegExp(this._regExpEscape(this.state.string), "ig");
        console.log(regExp);
        let strArr = this.state.inputText.match(regExp);
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            console.log(count)
        } else {
            console.log("Yo, its null.")
        }
    }
//\b\w*[Yy]\w*\b/
    _wordsWithString =()=> {
        // let regString = "\\b\\w*"+(this._regExpEscape(this.state.string))+"\\w*\\b"
        let regExp = new RegExp("\\b\\w*"+(this._regExpEscape(this.state.string))+"\\w*\\b", "ig");
        console.log(regExp);
        let strArr = this.state.inputText.match(regExp);
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            console.log(count)
        } else {
            console.log("Yo, its null.")
        }
    }
    //  [A-Za-z," ]+word[A-Za-z," ]+
    // ***deprecated***
    // _sentencesWithWord =()=> {
    //     //let regExp = new RegExp('[A-Za-z,\" ]'+(this._regExpEscape(this.state.string))+'[A-Za-z,\" ]+', "ig"); //pulls clauses
    //     let regExp = new RegExp('[^.?!]*(?<=[.?!\\s])'+(this._regExpEscape(this.state.string))+'(?=[\\s.?!])[^.?!]*[.?!]', 'ig'); // pulls on case sensitive word
    //     console.log(regExp);
    //     let strArr = this.state.inputText.match(regExp);
    //     console.log(strArr);
    //     let count = strArr.length;
    //     console.log(count)
    // }
    _sentencesWithString =()=> {
        let regExp = new RegExp('[^.?!]*(?<=[.?!\\s])\\b\\w*'+(this._regExpEscape(this.state.string))+'\\w*\\b(?=[\\s.?!])[^.?!]*[.?!]', 'ig'); 
        console.log(regExp);
        let strArr = this.state.inputText.match(regExp);
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            console.log(count)
        } else {
            console.log("Yo, its null.")
        };
       
    }
    render() {
        return (
            <div>
                <form >
                    <label>
                        Text to parse:
                        <textarea type="text" className="main-text-input"
                        value={this.state.inputText} 
                        onChange={e=>this.setState({inputText:e.target.value})}
                        />
                    </label>
                    
                </form>
                <button onClick={this._countString}>Count!</button>
                <button onClick={this._wordsWithString}>Words!</button>
                <button onClick={this._sentencesWithWord}>"Sentences(Word)!"</button>
                <button onClick={this._sentencesWithString}>"Sentences!(String)"</button>
            </div>
        );
    }
}



