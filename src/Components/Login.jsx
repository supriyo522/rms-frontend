// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// // import Dropdown from 'react-bootstrap/Dropdown';
// const Login = () => {
//   const Navigate = useNavigate();
//   const SignIn = () => {
//     Navigate('/input')
//   }
//   return (
//     <div>
//       <div className="container my-5">
//         <div className="row">
//           <div className="col-md-3 col-sm-12"></div>

//           <div className="col-md-6 col-sm-12">
//             <form className='shadow p-4 bg-dark'>
//               <div className='pb-4'></div>
//                 {/* <div className='text-white'>Select Section</div>
//               <Dropdown className='' >
//                 <Dropdown.Toggle variant="light" id="dropdown-basic" className='dropdown-btn-login'>
//                 +Add Recipient
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#/action-1">+Add Sales Person Details</Dropdown.Item>
//                   <Dropdown.Item href="#/action-2">+Add Vendor Details</Dropdown.Item>
//                   <Dropdown.Item href="#/action-3">+Add Fabric Details</Dropdown.Item>
//                   <Dropdown.Item href="#/action-4">+Add Sale Casts</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//               </div> */}
//               <div data-mdb-input-init class="form-outline mb-4">
//                 <label class="form-label text-white" for="form2Example1">Username</label>
//                 <input type="email" id="form2Example1" class="form-control" />

//               </div>

//               <div data-mdb-input-init class="form-outline mb-4">
//                 <label class="form-label text-white" for="form2Example1">Email address</label>
//                 <input type="email" id="form2Example1" class="form-control" />

//               </div>


//               <div data-mdb-input-init class="form-outline mb-4">
//                 <label class="form-label text-white" for="form2Example2">Password</label>
//                 <input type="password" id="form2Example2" class="form-control" />

//               </div>


//               <div class="row mb-4">
//                 <div class="col d-flex justify-content-center">


//                 </div>

//                 <div class="col">

//                   {/* <a href="#!">Forgot password?</a> */}
//                 </div>
//               </div>


//               <div className="d-flex justify-content-between">
//                 <button type="button" className="btn btn-primary btn-large mb-4" onClick={() => SignIn()}>Sign in</button>
//                 <button type="button" className="btn btn-primary btn-large mb-4" onClick={() => SignIn()}>log in</button>
//               </div>

//               {/* <div class="text-center">
//                 <p>Not a member? <a href="#!">Register Here</a></p>
//                 <p>or sign up with:</p>
//                 <button type="button" className="btn btn-link  btn-floating mx-1">
//                   <i class="fa fa-google custom-icon "></i>
//                 </button>

//                 <button type="button" className="btn btn-link btn-floating mx-1">
//                   <i class="fa fa-linkedin custom-icon"></i>
//                 </button>

//                 <button type="button" className="btn btn-link btn-floating mx-1">
//                   <i class="fa fa-facebook-square custom-icon"></i>
//                 </button>

//                 <button type="button" className="btn btn-link btn-floating mx-1">
//                   <i class="fa fa-instagram custom-icon"></i>
//                 </button>
//               </div> */}
//             </form>
//           </div>
//           <div className="col-3"></div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://rms-backend-1218.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // handle successful login
        setMessage('Login successful!');
        setTimeout(() => {
          navigate('/input');
        }, 2000); // redirect to input page after 2 seconds
      } else {
        // handle login error
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error logging in: ' + error.message);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3 col-sm-12"></div>
        <div className="col-md-6 col-sm-12">
          <form className="shadow p-4 bg-dark" onSubmit={handleLogin}>
            <div className="form-outline mb-4">
              <label className="form-label text-white" htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label text-white" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-large mb-4">Log in</button>
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
        <div className="col-md-3 col-sm-12"></div>
      </div>
    </div>
  );
};

export default Login;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistering, setIsRegistering] = useState(true); // State to toggle between registration and login
//   const [popupMessage, setPopupMessage] = useState('');

//   const register = async () => {
//     const user = {
//       username,
//       email,
//       password,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/register', user, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         setPopupMessage('Registration successful!');
//         setTimeout(() => {
//           setPopupMessage('');
//           setIsRegistering(false);
//         }, 2000);
//       } else {
//         console.error('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const login = async () => {
//     const user = {
//       email,
//       password,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', user, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         console.log('Login successful:', response.data);
//         navigate('/input');
//       } else {
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="container my-5">
//         <div className="row">
//           <div className="col-md-3 col-sm-12"></div>
//           <div className="col-md-6 col-sm-12">
//             <form className="shadow p-4 bg-dark" onSubmit={(e) => e.preventDefault()}>
//               {popupMessage && <div className="alert alert-success">{popupMessage}</div>}
//               {isRegistering ? (
//                 <>
//                   <div className="form-outline mb-4">
//                     <label className="form-label text-white" htmlFor="form2Example1">Username</label>
//                     <input
//                       type="text"
//                       id="form2Example1"
//                       className="form-control"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-outline mb-4">
//                     <label className="form-label text-white" htmlFor="form2Example2">Email address</label>
//                     <input
//                       type="email"
//                       id="form2Example2"
//                       className="form-control"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-outline mb-4">
//                     <label className="form-label text-white" htmlFor="form2Example3">Password</label>
//                     <input
//                       type="password"
//                       id="form2Example3"
//                       className="form-control"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <button type="button" className="btn btn-primary btn-large mb-4" onClick={register}>Sign in</button>
//                 </>
//               ) : (
//                 <>
//                   <div className="form-outline mb-4">
//                     <label className="form-label text-white" htmlFor="form2Example2">Email address</label>
//                     <input
//                       type="email"
//                       id="form2Example2"
//                       className="form-control"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-outline mb-4">
//                     <label className="form-label text-white" htmlFor="form2Example3">Password</label>
//                     <input
//                       type="password"
//                       id="form2Example3"
//                       className="form-control"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <button type="button" className="btn btn-primary btn-large mb-4" onClick={login}>Log in</button>
//                 </>
//               )}
//             </form>
//           </div>
//           <div className="col-3"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistering, setIsRegistering] = useState(true); // State to toggle between registration and login
//   const [popupMessage, setPopupMessage] = useState('');

//   const register = async () => {
//     const user = {
//       username,
//       email,
//       password,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/register', user, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         setPopupMessage('Registration successful!');
//         setTimeout(() => {
//           setPopupMessage('');
//           setIsRegistering(false);
//         }, 2000);
//       } else {
//         console.error('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const login = async () => {
//     const user = {
//       email,
//       password,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', user, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         console.log('Login successful:', response.data);
//         navigate('/input');
//       } else {
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="container my-5">
//         <div className="row">
//           <div className="col-md-3 col-sm-12"></div>
//           <div className="col-md-6 col-sm-12">
//             <form className="shadow p-4 bg-dark" onSubmit={(e) => e.preventDefault()}>
//               {popupMessage && <div className="alert alert-success">{popupMessage}</div>}
//               {isRegistering ? (
//                 <>
//                   <div className="form-outline mb-4">
//                     <label className="form-label text-white" htmlFor="form2Example1">Username</label>
//                     <input
//                       type="text"
//                       id="form2Example1"
//                       className="form-control"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-outline mb-4">
//                     <label className="form-label text-white" htmlFor="form2Example2">Email address</label>
//                     <input
//                       type="email"
//                       id="form2Example2"
//                       className="form-control"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-outline mb-4">
//                     <label className="form-label text-white" htmlFor="form2Example3">Password</label>
//                     <input
//                       type="password"
//                       id="form2Example3"
//                       className="form-control"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <button type="button" className="btn btn-primary btn-large mb-4" onClick={register}>Sign in</button>
//                 </>
//               ) : (
//                 <>
//                   <div className="form-outline mb-4">
//                     <label className="form-label text-white" htmlFor="form2Example2">Email address</label>
//                     <input
//                       type="email"
//                       id="form2Example2"
//                       className="form-control"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-outline mb-4">
//                     <label className="form-label text-white" htmlFor="form2Example3">Password</label>
//                     <input
//                       type="password"
//                       id="form2Example3"
//                       className="form-control"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <button type="button" className="btn btn-primary btn-large mb-4" onClick={login}>Log in</button>
//                 </>
//               )}
//             </form>
//           </div>
//           <div className="col-3"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
