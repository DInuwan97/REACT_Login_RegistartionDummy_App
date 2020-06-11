import React, { Component } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import{login} from './UserFunctions';
export default class Login extends Component {

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
      email:this.state.email,
      password:this.state.password
    }

    login(userData).then((res) => {
      if (res) {
        window.location.replace("/");
      }
    });

    setTimeout(( ()=>{
        this.setState({
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
                               User Login
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
                                <button className="btn btn-lg btn-primary btn-block">Sign In</button>
                              </div>

                              <hr/>

                                <center>
                                <p style={{fontSize:16}}>Don't you hav an account? <Link style={{marginLeft:10}}to='/register'>Sign Up</Link></p>
                               
                                </center>
                            </div>
                        </h1>
                    </form>
                </div>
            </div>
        </h2>
      
    </div> 
    );
  }
}
