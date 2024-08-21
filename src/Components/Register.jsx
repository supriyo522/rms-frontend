// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         // handle successful registration (e.g., redirect to login)
//         navigate('/login');
//       } else {
//         // handle registration error (e.g., show error message)
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error registering:', error);
//     }
//   };

//   return (
//     <div className="container my-5">
//       <div className="row">
//         <div className="col-md-3 col-sm-12"></div>
//         <div className="col-md-6 col-sm-12">
//           <form className="shadow p-4 bg-dark" onSubmit={handleRegister}>
//             <div className="form-outline mb-4">
//               <label className="form-label text-white" htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 className="form-control"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-outline mb-4">
//               <label className="form-label text-white" htmlFor="email">Email address</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="form-control"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-outline mb-4">
//               <label className="form-label text-white" htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="form-control"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary btn-large mb-4">Register</button>
//             <button 
//             type="button" 
//             className="btn btn-secondary btn-large mb-4" 
//             onClick={() => navigate('/login')}
//           >
//             Go to Login
//           </button>
//           </form>
         
//         </div>
//         <div className="col-md-3 col-sm-12"></div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://rms-backend-1218.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // handle successful registration
        setMessage('Registration successful!');
        setTimeout(() => {
          navigate('/login');
        }, 2000); // redirect to login after 2 seconds
      } else {
        // handle registration error
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error registering: ' + error.message);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3 col-sm-12"></div>
        <div className="col-md-6 col-sm-12">
          <form className="shadow p-4 bg-dark" onSubmit={handleRegister}>
            <div className="form-outline mb-4">
              <label className="form-label text-white" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
            <button type="submit" className="btn btn-primary btn-large mb-4">Register</button>
            <button 
              type="button" 
              className="btn btn-secondary btn-large mb-4" 
              onClick={() => navigate('/login')}
            >
              Go to Login
            </button>
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
        <div className="col-md-3 col-sm-12"></div>
      </div>
    </div>
  );
};

export default Register;

