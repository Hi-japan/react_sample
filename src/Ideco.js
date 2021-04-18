import React from "react";

class Ideco extends React.Component{

    constructor (props) {
        super(props)
        this.state = {showFlag : false}
    }

    render(){
        return (
            <div >
                <a >Ideco</a>

                <a onClick={this.showReserveNisa}>計算</a>
            </div>
        );
    }

    showReserveNisa(){
        alert('Click!!')
    }
}

export default Ideco;