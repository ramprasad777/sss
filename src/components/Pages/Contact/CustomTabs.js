import React, {Component} from 'react';

class CustomTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : 'used',
            show: true
        };
        this.toggleRadio = this.toggleRadio.bind(this);
        this.toggleSomething = this.toggleSomething.bind(this);
    }
    toggleRadio(e){
        this.setState({
            value: e.target.value
        })
        console.log(e.target.value)
    }
    toggleSomething(){
        console.warn('clicked')
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        return(
            <div className="" style={{paddingTop:"100px"}}>
                {
                    this.state.show?
                    <h2>some heading</h2>:null
                }
                <button onClick={this.toggleSomething}>toggle button</button>
                <label htmlFor="used">
                    <input type="radio" name="type" value="used" id="used" defaultChecked onChange={this.toggleRadio}
                        />
                    Used
                </label>
                <label htmlFor="new">
                    <input type="radio" name="type" value="new" id="new" onChange={this.toggleRadio} />
                    New
                </label>
                <label htmlFor="old">
                    <input type="radio" name="type" value="old" id="old" onChange={this.toggleRadio} />
                    Old
                </label>
                {
                    this.state.value === 'used'?
                    <div className="used">used</div>
                    :this.state.value === 'new'?
                    <div className="new">new data</div>
                    :
                    <div className="old">old data</div>
                }
            </div>
        )
    }
}
export default CustomTab;