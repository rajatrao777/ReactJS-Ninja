import React from 'react';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={click:false}
        this.click=this.click.bind(this);
    }
    click(){
        this.setState({click:!this.state.click});
    }
    render(){
        const but=this.state.click?"Test":"Prod";
        return (
            <div>
                <button onClick={this.click}>{but}</button>
            </div>
        )
    }
}
export default App;