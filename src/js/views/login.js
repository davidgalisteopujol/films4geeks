import  React from "react"
import login from "../../img/login.png"
import logincss from "../../styles/login.css"

export const Login = () => {


    return (
        <div className="fluid-container">

            <div className="row bg-success justify-content-center">
                <div className={`col bg-primary show-div`}  >
                <img src={login} className="img-fluid " alt="..."/>
                </div>

                <div className="col bg-color">
                    <h1 className="text-center title">Login</h1>
                    <form>
                        
                        <div>
                            <h2>Email</h2>
                            <label></label>
                            <input  placeholder="Email"/>
                        </div>
                        <div>
                            <h2>Password</h2>
                            <label></label>
                            <input placeholder="Password"/>
                        </div>

                        <input type="submit"/>
                    </form>
                </div>
            </div>

        </div>
    )
}

