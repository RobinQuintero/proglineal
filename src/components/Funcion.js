import React, { Component } from 'react'
import 'katex/dist/katex.min.css';
import { InlineMath} from 'react-katex';

export default class Funcion extends Component {
    render() {
        let variables = []
        for (let i=1; i<this.props.variables; i++){
            variables.push(
                <div key={i} className="col l3" style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                        <input style={{width:'30px',textAlign:'center'}}id="input_text" type="number" data-length="4" defaultValue="0"/>
                    
                    <InlineMath math={"x_{"+i+"}"}/>
                    <div style={{paddingLeft:'20px'}}>
                    <InlineMath math={"+"}/></div>
                </div>
            )
        }
        variables.push(
            <div key={this.props.variables} className="col l3">
                    <input style={{width:'30px',textAlign:'center',padding:'0',margin:'0'}}id="input_text" type="number" data-length="4" defaultValue="0"/>
                
                <InlineMath math={"x_{"+this.props.variables+"}"}/>
            </div>
        )
        return (
            <div className="func"style={{
                display:'flex',
                flexDirection:'row',
                justifyItems:'center',
                justifyContent:'center',
                
            }}>
                <div style={{
                    width:'15%',height:'50px', alignSelf:'flex-start',display:'flex',alignItems:'center'
                }}>
                        <InlineMath math={this.props.objetivo+"  Z = "}/>
                </div>
                <div className="row"
                    style={{
                        width:'85%', 
                        alignSelf:'flex-end',
                        paddingRight:'10px'
                }}>
                    {variables}
                </div>
            </div>
        )
    }
}
