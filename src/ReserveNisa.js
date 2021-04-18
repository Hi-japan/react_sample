import React from "react";

class ReserveNisa extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            showFlag : false,
            investmentAmount: 0,
            investmentYear: 0,
            interestRate: 0
        }
    }

    render(){
        return (
            <div>
                <div >つみたてnisa</div>
                <div class="clearfix">
                    <div id="investmentAmount1">
                        月々の積立額
                    </div>
                    <div id="investmentAmount2">
                        <input  class="input" type="number" maxLength="5" min="1" max="33333" placeholder="33333" value={this.investmentAmount} onChange={this.investmentOnChange} />
                    </div>
                    <div id="investmentAmount3">
                        円
                    </div>
                </div>
                <div class="clearfix">
                    <div id="investmentAmount1">
                        積立年数
                    </div>
                    <div id="investmentAmount2">
                        <input  class="input" type="number" maxLength="2" min="1" max="20" placeholder="20" value={this.investmentYear} onChange={this.investmentYearsOnChange} />
                    </div>
                    <div id="investmentAmount3">
                        年
                    </div>
                </div>
                <div class="clearfix">
                    <div id="investmentAmount1">
                        年間リターン
                    </div>
                    <div id="investmentAmount2">
                        <input  class="input" type="number" maxLength="3" min="-30" max="30" placeholder="5" value={this.interestRate} onChange={this.interestRateOnChange} />
                    </div>
                    <div id="investmentAmount3">
                        ％
                    </div>
                </div>
                <a  class="button"　onClick={this.calc}>計算</a>
            </div>
        );
    }

    investmentOnChange = (e) => {
        const maxInverstment = 33333
        const minInverstment = 1

        if(e.target.value.length == 0){return}

        e.target.value = e.target.value.slice(0, 5); 

        if(maxInverstment < e.target.value){
            e.target.value = maxInverstment.toString()
        }

        if(e.target.value < minInverstment){
            e.target.value = minInverstment.toString()
        }

        this.setState({
            investmentAmount: parseInt(e.target.value)
        })
    }


    investmentYearsOnChange = (e) => {
        const maxYear = 20
        const minYear = 1

        if(e.target.value.length == 0){return}

        e.target.value = e.target.value.slice(0, 2); 

        if(maxYear < e.target.value){
            e.target.value = maxYear.toString()
        }

        if(e.target.value < minYear){
            e.target.value = minYear.toString()
        }

        this.setState({
            investmentYear: parseInt(e.target.value)
        })

    }

    interestRateOnChange = (e) => {
        const maxRate = 30
        const minRate = -30

        if(e.target.value.length == 0){return}

        e.target.value = e.target.value.slice(0, 3); 

        if(maxRate < e.target.value){
            e.target.value = maxRate.toString()
        }

        if(e.target.value < minRate){
            e.target.value = minRate.toString()
        }

        this.setState({
            interestRate: parseFloat(e.target.value)
        })
    }

    

    calc= () => {
        const yearMonth = 12
        let total = 0
        for(let i=0; i< this.state.investmentYear; i++){
            total = total + (this.state.investmentAmount * yearMonth)
            total = total * ((100/100) + (this.state.interestRate/100))
        }
        alert(total)
        
    }
}

export default ReserveNisa;