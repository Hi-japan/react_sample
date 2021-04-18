import React from "react";

class ReserveNisa extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            isShowResult : false,
            result: "",
            isShowAmountError : false,
            amountError: "",
            isShowYearError : false,
            yearError: "",
            isShowRateError : false,
            rateError: "",
            investmentAmount: null,
            investmentYear: null,
            interestRate: null,
        }
    }

    render(){
        return (
            <div>
                <div >積立nisaシミュレーション</div>
                <div class="clearfix">
                    <div id="investmentColm1">
                        月々の積立額
                    </div>
                    <div id="investmentColm2">
                        <input  class="input" type="number" maxLength="5" min="1" max="33333" placeholder="33333" onChange={this.investmentOnChange} />
                    </div>
                    <div id="investmentColm3">
                        円
                    </div>
                </div>
                {this.state.isShowAmountError &&
                    <div class="error">
                        {this.state.amountError}
                    </div>
                }
                <div class="clearfix">
                    <div id="investmentColm1">
                        積立年数
                    </div>
                    <div id="investmentColm2">
                        <input  class="input" type="number" maxLength="2" min="1" max="20" placeholder="20"  onChange={this.investmentYearsOnChange} />
                    </div>
                    <div id="investmentColm3">
                        年
                    </div>
                </div>
                {this.state.isShowYearError &&
                    <div class="error">
                        {this.state.yearError}
                    </div>
                }
                <div class="clearfix">
                    <div id="investmentColm1">
                        年間リターン
                    </div>
                    <div id="investmentColm2">
                        <input  class="input" type="number" maxLength="3" min="1" max="30" placeholder="5"  onChange={this.interestRateOnChange} />
                    </div>
                    <div id="investmentColm3">
                        ％
                    </div>
                </div>
                {this.state.isShowRateError &&
                    <div class="error">
                        {this.state.rateError}
                    </div>
                }
                <div id="calc" class="button is-primary"　onClick={this.calc}>計算</div>
                {this.state.isShowResult &&
                    <div class="title is-4" id="result">
                        {this.state.result}
                    </div>
                }
                
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
        const minRate = 1

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

        if(!this.state.investmentAmount){
            this.setState({
                isShowAmountError: true
            })
            this.setState({
                amountError: "月々の積立額に1～33333を入れてください"
            })
            return
        }

        this.setState({
            isShowAmountError: false
        })

        if(!this.state.investmentYear){
            this.setState({
                isShowYearError: true
            })
            this.setState({
                yearError: "積立年数に1～20を入れてください"
            })
            return
        }

        this.setState({
            isShowYearError: false
        })

        if(!this.state.interestRate){
            this.setState({
                isShowRateError: true
            })
            this.setState({
                rateError: "年間リターンに1～30を入れてください"
            })
            return
        }

        this.setState({
            isShowRateError: false
        })

        const yearMonth = 12
        let total = 0
        for(let i=0; i< this.state.investmentYear; i++){
            total = total + (this.state.investmentAmount * yearMonth)
            total = total * ((100/100) + (this.state.interestRate/100))
        }
        total = Math.floor(total)

        let base = 0
        for (let i=0; i< this.state.investmentYear; i++){
            base = base + (this.state.investmentAmount * yearMonth)
        }

        const yild = total - base

        const str = "投資元本: " + base.toLocaleString() + "円 + 運用利益: " +  yild.toLocaleString() + "円 = 合計: " + total.toLocaleString() + "円" 
        
        this.setState({
            isShowResult: true
        })

        this.setState({
            result: str
        })
    }
}

export default ReserveNisa;