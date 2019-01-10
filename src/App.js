import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { click: true }
        this.handleclick = this.handleclick.bind(this);
    }
    render() {
        const display = this.state.click ? "hi" : "bye";
        return (
            <Button onclick={this.handleclick} text = {display}>
            </Button>
        )
    }
    handleclick() {
        this.setState({ click: !this.state.click })
    }
}
// function LoginButton(props){
//     return (
//         <Button onclick={props.onclickhandler} />
//             )
//         }
function Button(props) {
    return (
        <button onClick={props.onclick} >{props.text}</button>
    )
}


export default App;