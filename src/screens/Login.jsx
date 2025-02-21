import { useState } from "react"
import login from "../components/login.png"
import { BASE_URL } from "../components/constants"

const Login = () => {
    const [mobile, setMobile] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${BASE_URL}/user/send-otp` , {
            method: 'POST',
            body: JSON.stringify({
                mobile : mobile,
            }),
        })
        const data = await response.json()
    }


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <div className="login-container">
                <img src={login} />
                <form onSubmit={handleSubmit} className="login-form">
                    <input type="text" placeholder="Enter Your Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required></input>
                    <button type="submit">Request OTP</button>
                </form>
            </div>
        </>
    )
}
export default Login