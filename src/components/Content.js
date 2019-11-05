import React, { Component } from 'react'
import M from 'materialize-css'
import Funcion from './Funcion'
import Restricciones from './Restricciones'

export default class Content extends Component {
    state = {
        objetivo: 'max',
        variables: 2
    }
    componentDidMount = ()=>{
        M.AutoInit()
    }
    _handleChange = (event) => {
        this.setState({ objetivo: event.target.value })
      }
      _changeVariables = (event) =>{
          if(event.target.value<=100 && event.target.value>1){
            this.setState({variables: event.target.value})
          }if(event.target.value>100){this.setState({variables: 100})}
      }
    render() {
        return (
            <div className="card content container row">
                <div className="col l5 rest">
                    <h5 style={{
                        height:'15%',
                        paddingTop:'5%',
                        paddingBottom:'5%',
                        background:'linear-gradient(-45deg, #0087ff 0%, #00ff7f 100%)',
                        marginTop:'0',
                        marginBottom:'0'
                        }}
                        className="white-text">
                        Método simplex</h5>
                    <div style={{
                        padding:'10px',
                        height:'75%',
                        overflowY: 'scroll',
                        overflowX:'hidden',
                    }}>
                        <div className="input-field col l6">
                            <select onChange={this._handleChange}>
                            <option value="max">Maximizar</option>
                            <option value="min">Minimizar</option>
                            </select>
                            <label>Objetivo</label>
                        </div>
                        <div className="input-field col l6">
                            <input id="input_text" type="number" data-length="2" onChange={this._changeVariables}defaultValue="2" min="2" max="100"/>
                            <label htmlFor="input_text">Variables de desición</label>
                        </div>
                        <div className="col l12 row" style={{marginTop:'2%', marginBottom:'0'}}>
                            <Funcion objetivo={this.state.objetivo} variables={this.state.variables}/>
                        </div>
                        <div className="col l12">
                            <Restricciones variables={this.state.variables}/>
                        </div>
                    </div>
                    <div style={{
                        height:'10%',

                    }}>
                        <a className="btn blue" style={{
                            marginTop:'2%'
                        }}>Resolver</a>
                    </div>
                </div>
            </div>
        )
    }
}
