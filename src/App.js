import React from 'react';

function App() {
    const onclick = () => {
        alert("Clicked");
    }
    return (
        <Button onclick={onclick}>ohh okay
        <div>okay</div>
        </Button>
    )

}
// function LoginButton(props){
//     return (
//         <Button onclick={props.onclickhandler} />
//             )
//         }
function Button(props) {
    return (
        <button onClick={props.onclick} >{props.children}</button>
    )
}


export default App;