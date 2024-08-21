// import React from 'react';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Dropdown from 'react-bootstrap/Dropdown';



// function AddSection() {
//     const [date, setDate] = useState(new Date());
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div>


//     <div className="container-fluid  sales-person-bg-color">

      
// <div className="container">

//   <div className="row py-3 form-border">
 
//    <h4 className='text-center text-warning pb-2'>Section List</h4>
//    <div className="row">
//     <div className="d-flex justify-content-between ">
//     <Button variant="warning" onClick={handleShow}>+ADD NEW SECTION</Button>{' '}
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>+Add Section</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic" >
//         Select Parent Division
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Man's</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Women's</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Kid's</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>  

//       <Form.Group className="my-3" controlId="formDivisonName">
//         <Form.Label>Section Name</Form.Label>
//         <Form.Control type="text" placeholder="Section Name" />
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
// {/* */}
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
//       <th scope="col">Section Name</th>
//       <th> Parent</th>
//       <th scope="col">Added By</th>
//       <th scope="col">Date</th>
//       {/* <th scope="col">Edit</th> */}
//       <th scope="col">Delete</th>
     



//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Cloths</td>
//       <td>Man's</td>
//       <td>Shahil</td>
//       <td>05/20/2024</td>
//       <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>

//           {/* <td></td> */}
//     </tr>
//     <tr>
//       <td>2</td>
      
//       <td>Cosmatic</td>
//       <td>Women's </td>
//       <td>Shahil</td>
//       <td>05/20/2024</td>
//       <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>
     
//     </tr>
//     <tr>
//       <td>3</td>
//       <td>Leather</td>
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

// export default AddSection


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

function AddSection() {
  const [date, setDate] = useState('');
  const [show, setShow] = useState(false);
  const [sectionName, setSectionName] = useState('');
  const [addedBy, setAddedBy] = useState('');
  const [parentDivision, setParentDivision] = useState('');
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios.get('https://rms-backend-1218.onrender.com/api/sections')
      .then(response => setSections(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const newSection = { sectionName, parentDivision, addedBy, date };
    axios.post('https://rms-backend-1218.onrender.com/api/sections', newSection)
      .then(response => {
        setSections([...sections, response.data]);
        handleClose();
      })
      .catch(error => console.error(error));
  };

  const handleDelete = (id) => {
    axios.delete(`https://rms-backend-1218.onrender.com/api/sections/${id}`)
      .then(() => {
        setSections(sections.filter(section => section._id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container-fluid sales-person-bg-color">
      <div className="container">
        <div className="row py-3 form-border">
          <h4 className="text-center text-warning pb-2">Section List</h4>
          <div className="row">
            <div className="d-flex justify-content-between">
              <Button variant="warning" onClick={handleShow}>
                +ADD NEW SECTION
              </Button>
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
                <th scope="col">Section Name</th>
                <th>Parent</th>
                <th scope="col">Added By</th>
                <th scope="col">Date</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, index) => (
                <tr key={section._id}>
                  <td>{index + 1}</td>
                  <td>{section.sectionName}</td>
                  <td>{section.parentDivision}</td>
                  <td>{section.addedBy}</td>
                  <td>{section.date}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleDelete(section._id)}>
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>+Add Section</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Parent Division
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setParentDivision("Man's")}>Man's</Dropdown.Item>
              <Dropdown.Item onClick={() => setParentDivision("Women's")}>Women's</Dropdown.Item>
              <Dropdown.Item onClick={() => setParentDivision("Kid's")}>Kid's</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group className="my-3" controlId="formSectionName">
            <Form.Label>Section Name</Form.Label>
            <Form.Control type="text" placeholder="Section Name" value={sectionName} onChange={(e) => setSectionName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddedBy">
            <Form.Label>Added By</Form.Label>
            <Form.Control type="text" placeholder="Added By" value={addedBy} onChange={(e) => setAddedBy(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
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

export default AddSection;


