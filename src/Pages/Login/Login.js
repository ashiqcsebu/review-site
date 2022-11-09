import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const Login = () => {
      
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const {login,googleSignin,setuser} = useContext(AuthContext)

        const handleGoogle = () =>{
        googleSignin()
        .then(result => {
            const user = result.user;
            setuser(user)
        
            navigate(from, {replace : true})
        })
        .catch(error =>{
            console.error(error)
        
        })
        }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true });
                    });
                
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                     <img className='w-96' src={img} alt="" /> 
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="flex justify-center">
                     <p  className="text-2xl font-semibold ">Log in With  </p>
                     <p className="text-3xl text-center"> <FcGoogle onClick={handleGoogle} />  </p>   
                    </div>
                 
                    <p className='text-center  text-2xl'>New to Book Worm? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
















// import React, { useContext } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import img from '../../assets/images/login/login.svg';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

// const Login = () => {

//     const { login } = useContext(AuthContext);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const from = location.state?.from?.pathname || '/';

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         login(email, password)
//             .then(result => {
//                 const user = result.user;


//                 const currentUser = {
//                     email: user.email
//                 }

//                 console.log(currentUser);

//                 // get jwt token
//                 fetch('http://localhost:5000/jwt', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify(currentUser)
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                         // local storage is the easiest but not the best place to store jwt token
//                         localStorage.setItem('genius-token', data.token);
//                         navigate(from, { replace: true });
//                     });
                
//             })
//             .catch(error => console.log(error));
//     }

//     return (
//         <div className="hero w-full my-20">
//             <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
//                 <div className="text-center lg:text-left">
//                     <img className='w-96' src={img} alt="" />
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
//                     <h1 className="text-5xl text-center font-bold">Login</h1>
//                     <form onSubmit={handleLogin} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" name='password' placeholder="password" className="input input-bordered" />
                           
//                         </div>
//                         <div className="form-control mt-6">
//                             <input className="btn btn-primary" type="submit" value="Login" />
//                         </div>
//                     </form>
//                     <p className='text-center font-semibold'>New to Book Worm? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;