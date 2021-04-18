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
                <div class="button is-link is-outlined menuButton" onClick={this.toggleReserveNisa}>つみたてnisaをシミュレーションする</div>
                {this.state.isShowReserveNisa &&
                    <ReserveNisa />
                }
                <div>
                </div>
                <div class="button is-link is-outlined menuButton" onClick={this.toggleIdeco}>iDeCoをシミュレーションする</div>
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