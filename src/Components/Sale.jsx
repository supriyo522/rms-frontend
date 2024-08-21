import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddCategory() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [qualification, setQualification] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('https://rms-backend-1218.onrender.com/sales')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);

  const handleSubmit = () => {
    const newCategory = {
      name,
      age,
      qualification,
      joiningDate,
      workExperience,
    };

    axios.post('https://rms-backend-1218.onrender.com/sales', newCategory)
      .then(response => {
        setCategories([...categories, response.data]);
        setName('');
        setAge('');
        setQualification('');
        setJoiningDate('');
        setWorkExperience('');
        handleClose();
      })
      .catch(error => {
        console.error('There was an error creating the category!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://rms-backend-1218.onrender.com/sales/${id}`)
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
    category.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.qualification.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.joiningDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.workExperience.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container-fluid sales-person-bg-color">
        <div className="container">
          <div className="row py-3 form-border">
            <h4 className="text-center text-warning pb-2">sale person perform Details</h4>
            <div className="row">
              <div className="d-flex justify-content-between">
                <Button variant="warning" onClick={handleShow}>+ADD Details</Button>
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>+Add Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group className="my-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formQualification">
                        <Form.Label>Qualification</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Qualification"
                          value={qualification}
                          onChange={(e) => setQualification(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formJoiningDate">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={joiningDate}
                          onChange={(e) => setJoiningDate(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formWorkExperience">
                        <Form.Label>Work Experience</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Work Experience"
                          value={workExperience}
                          onChange={(e) => setWorkExperience(e.target.value)}
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
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Qualification</th>
                  <th scope="col">Joining Date</th>
                  <th scope="col">Work Experience</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((category, index) => (
                  <tr key={category._id}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>{category.age}</td>
                    <td>{category.qualification}</td>
                    <td>{category.joiningDate}</td>
                    <td>{category.workExperience}</td>
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
