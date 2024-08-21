// import React from 'react';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Dropdown from 'react-bootstrap/Dropdown';



// function AddCategory() {
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
//                 <Button variant="warning" onClick={handleShow}>+ADD Category</Button>{' '}
//                 <>
//                   <Modal show={show} onHide={handleClose}>
//                     <Modal.Header closeButton>
//                       <Modal.Title>+Add Category</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>

//                       <Dropdown>
//                         <Dropdown.Toggle variant="success" id="dropdown-basic" >
//                           Select Parent Department
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu>
//                           <Dropdown.Item href="#/action-1">Jeans </Dropdown.Item>
//                           <Dropdown.Item href="#/action-2">Kurta</Dropdown.Item>
//                           <Dropdown.Item href="#/action-3">Face Cream</Dropdown.Item>
//                         </Dropdown.Menu>
//                       </Dropdown>

//                       <Form.Group className="my-3" controlId="formDivisonName">
//                         <Form.Label>Category Name</Form.Label>
//                         <Form.Control type="text" placeholder="Category Name" />
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
//                   <th scope="col">Category Name</th>
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
//                   <td>Catg-1</td>
//                   <td>Jeans</td>
//                   <td>Shahil</td>
//                   <td>05/20/2024</td>
//                   <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>

//                   {/* <td></td> */}
//                 </tr>
//                 <tr>
//                   <td>2</td>
//                   <td>Catg-2</td>
//                   <td>Face Cream</td>
//                   <td>Shahil</td>
//                   <td>05/20/2024</td>
//                   <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>

//                 </tr>
//                 <tr>
//                   <td>3</td>
//                   <td>Catg-3</td>
//                   <td>Belt</td>
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

// export default AddCategory


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

function AddCategory() {
  const [date, setDate] = useState('');
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [addedBy, setAddedBy] = useState('');
  const [parentDepartment, setParentDepartment] = useState('');
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('https://rms-backend-1218.onrender.com/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);

  const handleSubmit = () => {
    const newCategory = {
      name: categoryName,
      parent: parentDepartment,
      addedBy: addedBy,
      date: date,
    };

    axios.post('https://rms-backend-1218.onrender.com/categories', newCategory)
      .then(response => {
        setCategories([...categories, response.data]);
        setCategoryName('');
        setParentDepartment('');
        setAddedBy('');
        setDate('');
        handleClose();
      })
      .catch(error => {
        console.error('There was an error creating the category!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://rms-backend-1218.onrender.com/categories/${id}`)
      .then(() => {
        setCategories(categories.filter(category => category._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the category!', error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.parent.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.addedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container-fluid sales-person-bg-color">
        <div className="container">
          <div className="row py-3 form-border">
            <h4 className="text-center text-warning pb-2">Category List</h4>
            <div className="row">
              <div className="d-flex justify-content-between">
                <Button variant="warning" onClick={handleShow}>+ADD CATEGORY</Button>{' '}
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>+Add Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {parentDepartment || 'Select Parent Department'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => setParentDepartment('Jeans')}>Jeans</Dropdown.Item>
                          <Dropdown.Item onClick={() => setParentDepartment('Kurta')}>Kurta</Dropdown.Item>
                          <Dropdown.Item onClick={() => setParentDepartment('Face Cream')}>Face Cream</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Form.Group className="my-3" controlId="formCategoryName">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Category Name"
                          value={categoryName}
                          onChange={(e) => setCategoryName(e.target.value)}
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
                <Form inline onSubmit={(e) => e.preventDefault()}>
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={searchTerm}
                        onChange={handleSearch}
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
                  <th scope="col">Category Name</th>
                  <th>Parent</th>
                  <th scope="col">Added By</th>
                  <th scope="col">Date</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((category, index) => (
                  <tr key={category._id}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>{category.parent}</td>
                    <td>{category.addedBy}</td>
                    <td>{category.date}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleDelete(category._id)}>
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

export default AddCategory;

