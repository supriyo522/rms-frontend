// import React from 'react';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Dropdown from 'react-bootstrap/Dropdown';



// function AddDepartMent() {
//   const [date, setDate] = useState(new Date());
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div>


//       <div className="container-fluid  sales-person-bg-color">
//         <div className="container">
//           <div className="row py-3 form-border">
//             <h4 className='text-center text-warning pb-2'>Department List</h4>
//             <div className="row">
//               <div className="d-flex justify-content-between ">
//                 <Button variant="warning" onClick={handleShow}>+ADD DEPARTMENT</Button>{' '}
//                 <>
//                   <Modal show={show} onHide={handleClose}>
//                     <Modal.Header closeButton>
//                       <Modal.Title>+Add Department</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>

//                       <Dropdown>
//                         <Dropdown.Toggle variant="success" id="dropdown-basic" >
//                           Select Parent Section
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu>
//                           <Dropdown.Item href="#/action-1">Cloths</Dropdown.Item>
//                           <Dropdown.Item href="#/action-2">Cosmatic</Dropdown.Item>
//                           <Dropdown.Item href="#/action-3">Leather</Dropdown.Item>
//                         </Dropdown.Menu>
//                       </Dropdown>

//                       <Form.Group className="my-3" controlId="formDivisonName">
//                         <Form.Label>Department Name</Form.Label>
//                         <Form.Control type="text" placeholder="Division Name" />
//                       </Form.Group>

//                       <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Added By</Form.Label>
//                         <Form.Control type="text" placeholder="Added By" />
//                       </Form.Group>
//                       <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Select Date</Form.Label>
//                         <Form.Control type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
//                       </Form.Group>
//                     </Modal.Body>
//                     <Modal.Footer>
//                       <Button variant="primary" onClick={handleClose}>
//                         Submit
//                       </Button>
//                     </Modal.Footer>
//                   </Modal>
//                 </>
//                 {/* */}
//                 <Form inline>
//                   <Row>
//                     <Col xs="auto">
//                       <Form.Control
//                         type="text"
//                         placeholder="Search"
//                         className=" mr-sm-2"
//                       />
//                     </Col>
//                     <Col xs="auto">
//                       <Button type="submit" variant="warning">Submit</Button>
//                     </Col>
//                   </Row>
//                 </Form>
//               </div>
//             </div>
//             <table class="table my-5 py-5 table-sale-performence">
//               <thead class="thead-dark py-5">
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Department Name</th>
//                   <th> Parent</th>
//                   <th scope="col">Added By</th>
//                   <th scope="col">Date</th>
//                   {/* <th scope="col">Edit</th> */}
//                   <th scope="col">Delete</th>

//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>1</td>
//                   <td>Jeans</td>
//                   <td>Cloths</td>
//                   <td>Shahil</td>
//                   <td>05/20/2024</td>
//                   <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>

//                   {/* <td></td> */}
//                 </tr>
//                 <tr>
//                   <td>2</td>
//                   <td>Face Cream</td>
//                   <td>Cosmatic</td>
//                   <td>Shahil</td>
//                   <td>05/20/2024</td>
//                   <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>

//                 </tr>
//                 <tr>
//                   <td>3</td>
//                   <td>Belt</td>
//                   <td>Leather</td>
//                   <td>Shahil</td>
//                   <td>05/20/2024</td>
//                   <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>

//                 </tr>

//               </tbody>
//             </table>


//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddDepartMent


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

function AddDepartMent() {
  const [date, setDate] = useState('');
  const [show, setShow] = useState(false);
  const [departmentName, setDepartmentName] = useState('');
  const [addedBy, setAddedBy] = useState('');
  const [parentSection, setParentSection] = useState('');
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get('https://rms-backend-1218.onrender.com/api/departments')
      .then(response => setDepartments(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const newDepartment = {
      name: departmentName,
      parent: parentSection,
      addedBy: addedBy,
      date: date,
    };

    axios.post('https://rms-backend-1218.onrender.com/api/departments', newDepartment)
      .then(response => {
        setDepartments([...departments, response.data]);
        setDepartmentName('');
        setParentSection('');
        setAddedBy('');
        setDate('');
        handleClose();
      })
      .catch(error => console.error(error));
  };

  const handleDelete = (id) => {
    axios.delete(`https://rms-backend-1218.onrender.com/api/departments/${id}`)
      .then(() => {
        setDepartments(departments.filter(dept => dept._id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div className="container-fluid sales-person-bg-color">
        <div className="container">
          <div className="row py-3 form-border">
            <h4 className='text-center text-warning pb-2'>Department List</h4>
            <div className="row">
              <div className="d-flex justify-content-between ">
                <Button variant="warning" onClick={handleShow}>+ADD DEPARTMENT</Button>{' '}
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>+Add Department</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {parentSection || 'Select Parent Section'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => setParentSection('Cloths')}>Cloths</Dropdown.Item>
                          <Dropdown.Item onClick={() => setParentSection('Cosmetic')}>Cosmetic</Dropdown.Item>
                          <Dropdown.Item onClick={() => setParentSection('Leather')}>Leather</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Form.Group className="my-3" controlId="formDivisionName">
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Department Name"
                          value={departmentName}
                          onChange={(e) => setDepartmentName(e.target.value)}
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
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
                <Form inline>
                  <Row>
                    <Col xs="auto">
                      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
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
                  <th scope="col">Department Name</th>
                  <th>Parent</th>
                  <th scope="col">Added By</th>
                  <th scope="col">Date</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept, index) => (
                  <tr key={dept._id}>
                    <td>{index + 1}</td>
                    <td>{dept.name}</td>
                    <td>{dept.parent}</td>
                    <td>{dept.addedBy}</td>
                    <td>{new Date(dept.date).toLocaleDateString()}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleDelete(dept._id)}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDepartMent;

