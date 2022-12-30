import  React from "react"
import login from "../../img/login.png"
import logincss from "../../styles/login.css"

export const Login = () => {


    return (
        <div className="fluid-container">

            <div className="row bg-success justify-content-center">
                <div className="col show-div bg-primary"  >
                <img src={login} className="img-fluid"  alt="..."/>
                </div>

                <div className="col bg-color">
                    <h1 className="text-center title">Login</h1>
                    <form>
                        
                        <div className="p-2">
                            <h3>Email</h3>
                            <label ></label>
                            <input className="input" type="text"  placeholder="Email"/>
                        </div>
                        <div className="p-2">
                            <h3>Password</h3>
                            <label></label>
                            <input className="input" placeholder="Password"/>
                        </div>
                        
                        <div className="text-end" style={{width:"510px"}}>
                            <input type="submit" className="button"/>
                        </div>
                        
                    </form>

                    <div className="text-end mt-4" style={{width:"510px"}}>
                            <p>Forgot your Password?</p>
                    </div>

                    <div className="text-center mt-5">
                        <h3 className="register">Not user yet? Sign Up</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

