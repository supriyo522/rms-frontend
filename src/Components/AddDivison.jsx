// import React from 'react';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';



// function AddDivison() {
//     const [date, setDate] = useState(new Date());
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div>


//     <div className="container-fluid  sales-person-bg-color">

      
// <div className="container">

//   <div className="row py-3 form-border">
 
//    <h4 className='text-center text-warning pb-2'>Division List</h4>
//    <div className="row ">
//     <div className="d-flex justify-content-between ">
//     <Button variant="warning" onClick={handleShow}>+ADD NEW DIVISON</Button>{' '}
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>+Add Division</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//         <Form.Group className="mb-3" controlId="formDivisonName">
//         <Form.Label>Division Name</Form.Label>
//         <Form.Control type="text" placeholder="Division Name" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Added By</Form.Label>
//         <Form.Control type="text" placeholder="Added By" />
//         </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Select Date</Form.Label>
//       <Form.Control type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)}/>
//     </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleClose}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
// {/* <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Select Month
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">January</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">February</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">March</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">April</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">May</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">June </Dropdown.Item>
//         <Dropdown.Item href="#/action-3">July</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">August</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">September</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">October</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">November</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">December</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown> */}
//     <Form inline>
//       <Row>
//         <Col xs="auto">
//           <Form.Control
//             type="text"
//             placeholder="Search"
//             className=" mr-sm-2"
//           />
//         </Col>
//         <Col xs="auto">
//           <Button type="submit" variant="warning">Submit</Button>
//         </Col>
//       </Row>
//     </Form>
//     </div>
//     </div>
//    <table class="table my-5 py-5 table-sale-performence">
//   <thead class="thead-dark py-5">
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Division Name</th>
//       <th scope="col">Added By</th>
//       <th scope="col">Date</th>
//       {/* <th scope="col">Edit</th> */}
//       <th scope="col">Delete</th>
     



//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Man's</td>
//       <td>Shahil</td>
//       <td>05/20/2024</td>
//       <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>

//           {/* <td></td> */}
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Women's </td>
//       <td>Shahil</td>
//       <td>05/20/2024</td>
//       <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>
     
//     </tr>
//     <tr>
//       <td>3</td>
//       <td>Kid's</td>
//       <td>Shahil</td>
//       <td>05/20/2024</td>
//       <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>
     
//     </tr>

//   </tbody>
// </table>
    

//   </div>

// </div>
// </div>
// </div>
//   )
// }

// export default AddDivison


import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

function AddDivision() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [divisions, setDivisions] = useState([]);
    const [divisionName, setDivisionName] = useState('');
    const [addedBy, setAddedBy] = useState('');

    useEffect(() => {
        // Fetch divisions from the backend
        axios.get('https://rms-backend-1218.onrender.com/divisions')
            .then(response => setDivisions(response.data))
            .catch(error => console.error('There was an error fetching the divisions!', error));
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        const newDivision = {
            name: divisionName,
            addedBy: addedBy,
            date: date.toLocaleDateString()
        };

        axios.post('https://rms-backend-1218.onrender.com/divisions', newDivision)
            .then(response => {
                setDivisions([...divisions, response.data]);
                handleClose();
                // Reset form fields
                setDivisionName('');
                setAddedBy('');
                setDate(new Date());
            })
            .catch(error => console.error('There was an error adding the division!', error));
    };

    const handleDelete = (id) => {
        axios.delete(`https://rms-backend-1218.onrender.com/divisions/`+ id)
            .then(() => {
                setDivisions(divisions.filter(division => division._id !== id));
            })
            .catch(error => console.error('There was an error deleting the division!', error));
    };

    return (
        <div className="container-fluid sales-person-bg-color">
            <div className="container">
                <div className="row py-3 form-border">
                    <h4 className="text-center text-warning pb-2">Division List</h4>
                    <div className="row">
                        <div className="d-flex justify-content-between">
                            <Button variant="warning" onClick={handleShow}>+ADD NEW DIVISION</Button>
                            <Form inline>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search"
                                            className="mr-sm-2"
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit" variant="warning">Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                    <table className="table my-5 py-5 table-sale-performance">
                        <thead className="thead-dark py-5">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Division Name</th>
                                <th scope="col">Added By</th>
                                <th scope="col">Date</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {divisions.map((division, index) => (
                                <tr key={division._id}>
                                    <td>{index+1}</td>
                                    <td>{division.name}</td>
                                    <td>{division.addedBy}</td>
                                    <td>{new Date(division.date).toLocaleDateString()}</td>
                                    <td>
                                        <i className="fa fa-trash-o" aria-hidden="true" onClick={() => handleDelete(division._id)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>+Add Division</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formDivisionName">
                        <Form.Label>Division Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Division Name"
                            value={divisionName}
                            onChange={(e) => setDivisionName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddedBy">
                        <Form.Label>Added By</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Added By"
                            value={addedBy}
                            onChange={(e) => setAddedBy(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="datepic"
                            placeholder="DateRange"
                            value={date.toISOString().split('T')[0]}
                            onChange={(e) => setDate(new Date(e.target.value))}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddDivision;


// import React, { useState } from 'react';
// import { Button, Row, Col, Form, Modal } from 'react-bootstrap';

// function AddDivision() {
//     const [date, setDate] = useState(new Date());
//     const [show, setShow] = useState(false);
//     const [divisions, setDivisions] = useState([]);
//     const [divisionName, setDivisionName] = useState('');
//     const [addedBy, setAddedBy] = useState('');

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const handleSubmit = () => {
//         const newDivision = {
//             id: divisions.length + 1,
//             name: divisionName,
//             addedBy: addedBy,
//             date: date.toLocaleDateString()
//         };
//         setDivisions([...divisions, newDivision]);
//         handleClose();
//         // Reset form fields
//         setDivisionName('');
//         setAddedBy('');
//         setDate(new Date());
//     };

//     return (
//         <div className="container-fluid sales-person-bg-color">
//             <div className="container">
//                 <div className="row py-3 form-border">
//                     <h4 className="text-center text-warning pb-2">Division List</h4>
//                     <div className="row">
//                         <div className="d-flex justify-content-between">
//                             <Button variant="warning" onClick={handleShow}>+ADD NEW DIVISION</Button>
//                             <Form inline>
//                                 <Row>
//                                     <Col xs="auto">
//                                         <Form.Control
//                                             type="text"
//                                             placeholder="Search"
//                                             className="mr-sm-2"
//                                         />
//                                     </Col>
//                                     <Col xs="auto">
//                                         <Button type="submit" variant="warning">Submit</Button>
//                                     </Col>
//                                 </Row>
//                             </Form>
//                         </div>
//                     </div>
//                     <table className="table my-5 py-5 table-sale-performance">
//                         <thead className="thead-dark py-5">
//                             <tr>
//                                 <th scope="col">#</th>
//                                 <th scope="col">Division Name</th>
//                                 <th scope="col">Added By</th>
//                                 <th scope="col">Date</th>
//                                 <th scope="col">Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {divisions.map((division,index) => (
//                                 <tr key={division.id}>
//                                     <td>{index+1}</td>
//                                     <td>{division.name}</td>
//                                     <td>{division.addedBy}</td>
//                                     <td>{division.date}</td>
//                                     <td>
//                                         <i className="fa fa-trash-o" aria-hidden="true" onClick={() => {
//                                             setDivisions(divisions.filter(d => d.id !== division.id));
//                                         }}></i>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>+Add Division</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Group className="mb-3" controlId="formDivisionName">
//                         <Form.Label>Division Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Division Name"
//                             value={divisionName}
//                             onChange={(e) => setDivisionName(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formAddedBy">
//                         <Form.Label>Added By</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Added By"
//                             value={addedBy}
//                             onChange={(e) => setAddedBy(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formDate">
//                         <Form.Label>Select Date</Form.Label>
//                         <Form.Control
//                             type="date"
//                             name="datepic"
//                             placeholder="DateRange"
//                             value={date.toISOString().split('T')[0]}
//                             onChange={(e) => setDate(new Date(e.target.value))}
//                         />
//                     </Form.Group>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="primary" onClick={handleSubmit}>
//                         Submit
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// }

// export default AddDivision;



