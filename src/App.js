import React from 'react';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { name: '' }
        this.Change = this.Change.bind(this);
        this.Submit = this.Submit.bind(this);
    }
    render() {
        
        return (
            <form onSubmit = {this.Submit}>
                <input type="text" value = {this.state.name} onChange = {this.Change}/>
                <input type ="submit" value="submit"/>
            </form>
        )
    }
    Change(e) {
        this.setState({ name: e.target.value })
    }
    Submit(e){
        alert(this.state.name);
        e.preventDefault();
    }
}
// function LoginButton(props){
//     return (
//         <Button onclick={props.onclickhandler} />
//             )
//         }
// function Button(props) {
//     return (
//         <button onClick={props.onclick} >{props.text}</button>
//     )
// }


export default App;