import React from "react";

class Ideco extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            isShowResult : false,
            result: "",
            isShowAnnualIncomeError : false,
            AnnualIncomeError: "",
            isShowAgeError : false,
            ageError: "",
            isShowAmountError : false,
            amountError: "",
            isShowReceiveStartError : false,
            receiveStartError: "",
            isShowRateError : false,
            rateError: "",
            AnnualIncome: null,
            age: null,
            investmentAmount: null,
            interestRate: null,
            receiveStart: null,
        }
    }

    render(){
        return (
            <div>
                <div >iDeCoシミュレーション</div>
                <div class="clearfix">
                    <div id="investmentColm1">
                        年収
                    </div>
                    <div id="investmentColm2">
                        <input  class="input" type="number" maxLength="5" min="1" max="10000" placeholder="300" onChange={this.annualIncomeOnChange} />
                    </div>
                    <div id="investmentColm3">
                        万円
                    </div>
                </div>
                {this.state.isShowAnnualIncomeError &&
                    <div class="error">
                        {this.state.annualIncomeError}
                    </div>
                }
                <div class="clearfix">
                    <div id="investmentColm1">
                        年齢
                    </div>
                    <div id="investmentColm2">
                        <input  class="input" type="number" maxLength="2" min="20" max="59" placeholder="20" onChange={this.ageOnChange} />
                    </div>
                    <div id="investmentColm3">
                        歳
                    </div>
                </div>
                {this.state.isShowAgeError &&
                    <div class="error">
                        {this.state.ageError}
                    </div>
                }
                <div class="clearfix">
                    <div id="investmentColm1">
                        月々の掛金
                    </div>
                    <div id="investmentColm2">
                        <input  class="input" type="number" maxLength="5" min="5000" max="68000" placeholder="23000"  onChange={this.amountOnChange} />
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
                <div class="clearfix">
                    <div id="investmentColm1">
                        受給開始年齢
                    </div>
                    <div id="investmentColm2">
                        <input  class="input" type="number" maxLength="2" min="60" max="99" placeholder="65"  onChange={this.receiveStartOnChange} />
                    </div>
                    <div id="investmentColm3">
                        歳
                    </div>
                </div>
                {this.state.isShowReceiveStartError &&
                    <div class="error">
                        {this.state.receiveStartError}
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

    annualIncomeOnChange = (e) => {
        const maxIncome = 10000
        const minIncome = 1

        if(e.target.value.length == 0){return}

        e.target.value = e.target.value.slice(0, 5); 

        if(maxIncome < e.target.value){
            e.target.value = maxIncome.toString()
        }

        if(e.target.value < minIncome){
            e.target.value = minIncome.toString()
        }

        this.setState({
            annualIncome: parseInt(e.target.value)
        })
    }


    ageOnChange = (e) => {
        const maxAge = 59
        const minAge = 20

        if(e.target.value.length <= 1){return}

        e.target.value = e.target.value.slice(0, 2); 

        if(maxAge < e.target.value){
            e.target.value = maxAge.toString()
        }

        if(e.target.value < minAge){
            e.target.value = minAge.toString()
        }

        this.setState({
            age: parseInt(e.target.value)
        })

    }

    amountOnChange = (e) => {
        const maxAmount = 68000
        const minAmount = 100

        if(e.target.value.length <= 3){return}

        e.target.value = e.target.value.slice(0, 5); 

        if(maxAmount < e.target.value){
            e.target.value = maxAmount.toString()
        }

        if(e.target.value < minAmount){
            e.target.value = minAmount.toString()
        }

        this.setState({
            investmentAmount: parseInt(e.target.value)
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
    
    receiveStartOnChange = (e) => {
        const maxAge = 99
        const minAge = 59

        if(e.target.value.length <= 1){return}

        e.target.value = e.target.value.slice(0, 2); 

        if(maxAge < e.target.value){
            e.target.value = maxAge.toString()
        }

        if(e.target.value < minAge){
            e.target.value = minAge.toString()
        }

        this.setState({
            receiveStart: parseFloat(e.target.value)
        })
    }
    

    calc= () => {

        if(!this.state.annualIncome){
            this.setState({
                isShowAnnualIncomeError: true
            })
            this.setState({
                annualIncomeError: "年収に1～10000を入れてください"
            })
            return
        }

        this.setState({
            isShowAnnualIncomeError: false
        })

        if(!this.state.age){
            this.setState({
                isShowAgeError: true
            })
            this.setState({
                ageError: "年齢に20～59を入れてください"
            })
            return
        }

        this.setState({
            ageError: false
        })

        if(!this.state.investmentAmount){
            this.setState({
                isShowAmountError: true
            })
            this.setState({
                amountError: "月々の掛け金に5000～68000を入れてください"
            })
            return
        }

        this.setState({
            isShowAmountError: false
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

        if(!this.state.receiveStart){
            this.setState({
                isShowReceiveStartError: true
            })
            this.setState({
                receiveStartError: "受給開始年齢に60～99を入れてください"
            })
            return
        }

        this.setState({
            isShowReceiveStartError: false
        })

        let taxRate = 0
        if(this.state.annualIncome <= 195){
            taxRate = 5
        }else if(195 < this.state.annualIncome && this.state.annualIncome <= 330){
            taxRate = 10
        }else if(330 < this.state.annualIncome && this.state.annualIncome <= 695){
            taxRate = 20
        }else if(695 < this.state.annualIncome && this.state.annualIncome <= 900){
            taxRate = 23
        }else if(900 < this.state.annualIncome && this.state.annualIncome <= 1800){
            taxRate = 33
        }else if(1800 < this.state.annualIncome && this.state.annualIncome <= 4000){
            taxRate = 40
        }else{
            taxRate = 45
        }

        const totalYears = this.state.receiveStart - this.state.age

        const yearMonth = 12
        let total = 0
        for(let i=0; i< totalYears; i++){
            total = total + (this.state.investmentAmount * yearMonth)
            total = total * ((100/100) + (this.state.interestRate/100))
        }
        total = Math.floor(total)

        let base = 0
        for (let i=0; i< totalYears; i++){
            base = base + (this.state.investmentAmount * yearMonth)
        }

        let taxAvoidance = 0
        for (let i=0; i< totalYears; i++){
            taxAvoidance = taxAvoidance + ((this.state.investmentAmount * yearMonth) * taxRate/100)
        }

        const yild = total - base

        const str = "投資元本: " + base.toLocaleString() + "円 + 運用利益: " +  yild.toLocaleString() + "円 = 合計: " + total.toLocaleString() + "円 + 節税: " + taxAvoidance.toLocaleString() + "円" 
        
        this.setState({
            isShowResult: true
        })

        this.setState({
            result: str
        })
    }
}

export default Ideco;