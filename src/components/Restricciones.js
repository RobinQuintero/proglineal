import React, { Component } from 'react'
import { InlineMath } from 'react-katex'

class Restriccion{
    constructor(variables, igualdad, valor){
        this.variables = variables
        this.valores = []
        this.igualdad = igualdad // = ó <= ó >=
        this.valor = valor
    }
}

export default class Restricciones extends Component {
    state = {
        restricciones: []
    }
    render() {
        const campos = []
        for(let i=1;i<this.props.variables;i++){
            campos.push(
                <div key={i} className="col l3" style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                        <input style={{width:'30px',textAlign:'center'}}id="input_text" type="number" data-length="4" defaultValue="0"/>
                    
                    <InlineMath math={"x_{"+i+"}"}/>
                    <div style={{paddingLeft:'20px'}}>
                    <InlineMath math={"+"}/></div>
                </div>
            )
        }
        
        campos.push(
            <div key={this.props.variables} className="col l2" style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                    <input style={{width:'30px',textAlign:'center'}}id="input_text" type="number" data-length="4" defaultValue="0"/>
                
                <InlineMath math={"x_{"+this.props.variables+"}"}/>
            </div>
        )
        return (
            <div>
                <h6 style={{textAlign:'left'}}>Restricciones</h6>
                <div className="restricciones"></div>
                <div className="card">
                    <div className="card-content">
                        <div style={{minHeight:'5vh'}}>
                            {campos}
                            <div className="col l3" style={{width:'60px', display:'flex',flexDirection:'row', alignItems:'center'}}>
                                    <select >
                                        <option>≤</option>
                                        <option>≥</option>
                                        <option>=</option>
                                    </select>
                            </div>
                            <div className="col l3"style={{width:'40px', display:'flex',flexDirection:'row', alignItems:'center'}}>
                                <input style={{width:'30px',textAlign:'center'}}id="input_text" type="number" data-length="4" defaultValue="0"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-action"><a className="btn blue">Añadir</a></div>
                </div>
            </div>
        )
    }
}
