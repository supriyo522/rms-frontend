// // import React, { createContext, useState, useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate();

// //   const login = async (email, password) => {
// //     try {
// //       const response = await fetch('http://localhost:5000/api/auth/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ email, password }),
// //       });
// //       const data = await response.json();
// //       if (response.ok) {
// //         setUser(data.user); // Assuming the response contains the user data
// //         navigate('/input');
// //       } else {
// //         throw new Error(data.message);
// //       }
// //     } catch (error) {
// //       throw new Error(error.message);
// //     }
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     navigate('/login');
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);
// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = async (email, password) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setUser(data.user); // Assuming the response contains the user data
//         return true; // Indicate successful login
//       } else {
//         throw new Error(data.message);
//       }
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
