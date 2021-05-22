import { Button } from '@material-ui/core';
import React, { Component } from 'react';

/* eslint no-eval: 0 */
export class Core extends Component {
    constructor(props){
        super(props)
        this.state = {
            first_value : 0,
            second_value : 0,
            operation : '',
            result : [0]
        }
        this.clear = this.clear.bind(this);
        this.addValue = this.addValue.bind(this);
        this.addition = this.addition.bind(this);
        this.multiplication = this.multiplication.bind(this);
        this.soustraction = this.soustraction.bind(this);
        this.division = this.division.bind(this);
    }

    clear(){
        this.setState({
            result : [0],
        })
    }

    calculation(type){
        let prev_value = this.state.result;
        prev_value.shift();
        this.setState({
            first_value : prev_value,
            result:[0],
            operation:type
        });
    }

    addition(){
        this.calculation('+');
    }



    soustraction(){
        this.calculation('-');
    }

    multiplication(){
        this.calculation('*');
    }

    division(){
        this.calculation('/');
    }

    addValue(event){
       let value = event.target.innerHTML;
       this.setState({
            result : [...this.state.result, value],
       })
    }

    calculate(){
        let second_value = this.state.result;
        second_value.shift()
        this.setState({
            second_value : second_value,
        });
        second_value = second_value.join('');
        let first_value = this.state.first_value.join('');
        this.setState({
            result : eval( first_value + this.state.operation + second_value )
        })
    }


    render(){
        console.log(this.state.result)
        return(
            <div>
                  <table >
                        <tr>
                        <td colspan="4" style={{'text-align':'right'}}>{this.state.result}</td>
                        </tr>
                        <tr>
                        <td colspan="2" ><center><Button onClick={this.clear.bind(this)} color="primary">AC</Button></center></td>
                        <td><Button onClick={this.division.bind(this)}  color="primary">/</Button></td>
                        <td><Button onClick={this.multiplication.bind(this)} color="primary">X</Button></td>
                        </tr>
                        <tr>
                        <td><Button onClick={this.addValue.bind(this)} color="primary">7</Button></td>
                        <td><Button onClick={this.addValue.bind(this)} color="primary">8</Button></td>
                        <td><Button onClick={this.addValue.bind(this)} color="primary">9</Button></td>
                        <td><Button onClick={this.soustraction.bind(this)} color="primary">-</Button></td>
                        </tr>
                        <tr>
                        <td><Button  onClick={this.addValue.bind(this)} color="primary">4</Button></td>
                        <td><Button onClick={this.addValue.bind(this)} color="primary">5</Button></td>
                        <td><Button onClick={this.addValue.bind(this)} color="primary">6</Button></td>
                        <td><Button  onClick={this.addition.bind(this)} color="primary">+</Button></td>
                        </tr>
                        <tr>
                        <td><Button onClick={this.addValue.bind(this)} color="primary">1</Button></td>
                        <td><Button onClick={this.addValue.bind(this)} color="primary">2</Button></td>
                        <td><Button onClick={this.addValue.bind(this)} color="primary">3</Button></td>
                        <td><center>:)</center></td>
                        </tr>
                        <tr>
                        <td colspan="3" ><Button color="primary" onClick={this.addValue.bind(this)} >0</Button></td>
                        <td><Button onClick={this.calculate.bind(this)} color="primary">=</Button></td>
                        </tr>
                        </table>
            </div>
        )
    }
}