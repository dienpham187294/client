import React, { useEffect } from "react"

function SingUp({ logo, DataUsername, socket }) {

    useEffect(() => {
        console.log(DataUsername)
    }, [DataUsername])
    return (
        <div className="row">
            <div className="col-6">
                <img src={logo} alt="logo" />
            </div>
            <div className="col-6">
                <form className="mt-5 text-center">
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"
                        // onChange={() => setUsernameCheck(document.getElementById("exampleInputEmail1").value)}
                        />
                        <small id="emailHelp" className="form-text text-muted">Message</small>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        // onChange={() => setPassWordCheck(document.getElementById("exampleInputPassword1").value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password Repeat"
                        // onChange={() => setPassWordCheck(document.getElementById("exampleInputPassword1").value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Your Phone Number"
                        // onChange={() => setPassWordCheck(document.getElementById("exampleInputPassword1").value)}
                        />
                    </div>
                    <button disabled type="button" className="btn btn-primary" >SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default SingUp