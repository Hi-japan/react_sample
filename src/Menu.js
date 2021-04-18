import React, { useState }  from "react"
import ReserveNisa from "./ReserveNisa"
import Ideco from "./Ideco"

class Menu extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            isShowReserveNisa : false,
            isShowIdeco : false
        }
    }

    render(){
        return (
            <div className="container">
                <a class="button is-link is-outlined" onClick={this.toggleReserveNisa}>つみたてnisaをシミュレーションする</a>
                {this.state.isShowReserveNisa &&
                    <ReserveNisa />
                }
                <a class="button is-link is-outlined" onClick={this.toggleIdeco}>Idecoをシミュレーションする</a>
                {this.state.isShowIdeco &&
                    <Ideco />
                }
                
            </div>
            
        );
    }

    toggleReserveNisa = () => {
        const isShow = !this.state.isShowReserveNisa
        this.setState({
            isShowReserveNisa: isShow
        })
    }

    toggleIdeco = () => {
        const isShow = !this.state.isShowIdeco
        this.setState({
            isShowIdeco: isShow
        })
    }
}

export default Menu;