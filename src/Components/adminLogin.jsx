import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/adminLogin.css'
const AdminLogin = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault()
        let data = { email, password }
        console.log(data);
        // if(email=="admin1@gmail.com" && password=="0000"){
        navigate('/admin/')
        // }
        // else{
        //     alert(`invalid details`)
        // }

    }

    return (
        <div className='row m-3'>

            <div className="adminLogin col-3 mt-5" styles={{ height: "200px", width: "200px" }}>
               
                <div classname="boxadjust bg-danger">
                    <h5>Admin..</h5>
                    <form action="" onSubmit={handleSubmit}  styles={{bgcolor:"red",border:"1px solid red"}}>
                        <div className='email'>
                            <label htmlFor="">Gmail</label>
                            <br />
                            <input type="email" required placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className='password'>
                            <label htmlFor="">Password</label>
                            <br />
                            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type='submit'>login</button>
                    </form>
                </div>

            </div>
            <div className="col-7"><img src="/images/bd8.webp" alt="" height="600px" width="800px" /></div>
        </div>
    );
}
export default AdminLogin