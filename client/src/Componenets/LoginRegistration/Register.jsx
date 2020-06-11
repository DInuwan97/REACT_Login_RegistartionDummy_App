import React, { Component } from 'react'
import { Link, withRouter, Redirect } from "react-router-dom";
import {register} from './UserFunctions';
import axios from "axios";


export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    }
    onChangeHandler = e =>{
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = e =>{
        e.preventDefault()
        const userData = {
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          email:this.state.email,
          password:this.state.password
        }

        register(userData);

        setTimeout(( ()=>{
            this.setState({
                firstName:'',
                lastName:'',
                email:'',
                password:''
            })
        }),1000)
    
    }


    render() {
        return (
            <div className="container">


            <h2>
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        
                        <form onSubmit={this.onSubmitHandler}>
                            <h1 className="h3 mb-3 font-weight-normal">
  
                                <div class="card">
                                <div className="card-header">
                                   User Registration
                                </div>

                          
  
                                <div className="col-md-12">
                                  <div className="form-group">
                                      <label htmlFor="firstName" style={{fontSize:15,fontFamily:'arial',fontWeight:'bold'}}> First Name </label>
  
                                      <input 
                                          type="text" 
                                          className="form-control"
                                          name="firstName" 
                                          placeholder="Enter First Name" 
                                          id="firstName"
                                          onChange={this.onChangeHandler}
                                          value={this.state.firstName}
                                           />
                                      
                                  </div> 
                                         
                                  </div> 
  
                                  <div className="col-md-12">
                                  <div className="form-group">
                                      <label htmlFor="lastName" style={{fontSize:15,fontFamily:'arial',fontWeight:'bold'}}> Last Name </label>
  
                                      <input 
                                          type="text" 
                                          style={{paddingLeft:10,paddingRight:10}}
                                          className="form-control"
                                          name="lastName" 
                                          placeholder="Enter Last Name" 
                                          id="lastName"
                                          onChange={this.onChangeHandler}
                                          value={this.state.lastName}
                                           />
                                      
                                  </div> 
                                  </div> 
  
  
                                  <div className="col-md-12">
                                  <div className="form-group">
                                      <label htmlFor="email" style={{fontSize:15,fontFamily:'arial',fontWeight:'bold'}}> Email Address </label>
  
                                      <input 
                                          type="email" 
                                          className="form-control"
                                          name="email" 
                                          placeholder="Enter Email" 
                                          id="email"
                                          onChange={this.onChangeHandler}
                                          value={this.state.email}
                                           />
                                      
                                  </div>   
                                  </div>   
  
                                    
                                  <div className="col-md-12">
                                  <div className="form-group">
                                      <label htmlFor="password" style={{fontSize:15,fontFamily:'arial',fontWeight:'bold'}}> Password </label>
  
                                      <input 
                                          type="password" 
                                          className="form-control"
                                          name="password" 
                                          placeholder="Enter Password" 
                                          id="password"
                                          onChange={this.onChangeHandler}
                                          value={this.state.password}
                                           />
  
                                  </div> 
                                  </div>
                                  <div className="col-md-12"> 
                                    <button className="btn btn-lg btn-primary btn-block">Sign Up</button>
                                  </div>

                                  <hr/>

                                    <center>
                                    <p style={{fontSize:16}}>Already have an account? <Link style={{marginLeft:10}}to='/login'>Sign In</Link></p>
                                   
                                    </center>
                                </div>
                            </h1>
                        </form>
                    </div>
                </div>
            </h2>
          
        </div>  
        
        
        )
    }
}
