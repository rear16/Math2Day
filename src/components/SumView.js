import React, { Component } from 'react'
import {Typography, TextField} from '@mui/material';
import ResultsComponent from './ResultsComponent';

export default class SumView extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            digit1: 0,
            digit2: 0,
            result: '',
            list: [],
            correct: 0,
            consecutiv: 0,
            maxConsecutiv: 0
        }
    }

    componentDidMount(){
        const list = JSON.parse(localStorage.getItem('sum'))||[];
        this.setState({list});
        this.newValues();
    }

    newValues(){
        let val1 = Math.floor(Math.random() * 11);
        let val2 = Math.floor(Math.random() * 11);
        let v1 = Math.max(val1, val2);
        let v2 = Math.min(val1, val2);
        this.setState({
            digit1: v1,
            digit2: v2
        });
    }

    handleResult({target}){
        this.setState({result: target.value});
    }

    result({key}){
        if(key === "Enter"){
            const{digit1, digit2, result, list, correct, consecutiv, maxConsecutiv} = this.state;
        
            list.unshift({
                operation: digit1 + ' + ' + digit2 + ' = ' + result,
                result: digit1 + ' + ' + digit2 + ' = ' + (digit1+digit2)
            });
            let cor = correct, cons = consecutiv, mCons = maxConsecutiv;
            if(digit1+digit2 === parseInt(result)) {
                cor++;
                cons++;
            }else{
                cons = 0;
            }
            mCons = Math.max(cons, mCons);
            localStorage.setItem('sum', JSON.stringify(list));
            this.setState({list, result: '', correct: cor, consecutiv: cons, maxConsecutiv: mCons});
            this.newValues();
        }
    }

    render() {
        const {digit1, digit2, result, list, correct, consecutiv, maxConsecutiv} = this.state;
        return (
            <>
                <div style={{display: 'inline-flex'}}>
                    <Typography variant="h2" gutterBottom>
                        {digit1}
                    </Typography>
                    <Typography variant="h2" gutterBottom style={{padding: '0 20px'}}>
                        +
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        {digit2}
                    </Typography>
                    <Typography variant="h2" gutterBottom style={{padding: '0 20px'}}>
                        =
                    </Typography>
                    <TextField id="outlined-basic" label="Resultado" variant="outlined" value={result} onChange={e => this.handleResult(e)} onKeyUp={e => this.result(e)}/>
                </div>
                <br/>
                {correct}/{list.length} 
                <span style={{padding: '0 10px'}}>
                    Consecutivas: {consecutiv}
                </span>
                <span style={{padding: '0 10px'}}>
                    Max Consecutivas: {maxConsecutiv}
                </span>
                <ResultsComponent list={list}/>
            </>
        )
    }
}
