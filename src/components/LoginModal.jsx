import { useState } from "react";
import { BASE_URL } from "./constants";

const LoginModal = ({ onClose }) => {

    const [mobile, setMobile] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${BASE_URL}/user/send-otp`, {
            method: 'POST',
            body: JSON.stringify({
                mobile: mobile,
            }),
        })

        const data = await response.json()
        console.log(data)

        const phonePattern = /^[0-9]{10}$/
        if (!phonePattern.test(mobile)) {
            alert("Pls Enter Valid Number")
        }

    }

    return (
        <div className="modal-overlay">

            <div className="modal-content">
                <button className="modal-close" onClick={onClose} >X</button>
                <h2>Login</h2>
                <form className="login-form">
                    <input type="text" placeholder="Enter your Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Get OTP</button>
                </form>

            </div>

        </div>
    )
}

export default LoginModal;