import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddFabric() {
  const [vendorName, setVendorName] = useState('');
  const [totalFabric, setTotalFabric] = useState('');
  const [fabricType, setFabricType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quantityUsed, setQuantityUsed] = useState('');
  const [designs, setDesigns] = useState('');
  const [show, setShow] = useState(false);
  const [fabrics, setFabrics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('https://rms-backend-1218.onrender.com/api/fabric')
      .then(response => {
        setFabrics(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the fabrics!', error);
      });
  }, []);

  const handleSubmit = () => {
    const newFabric = {
      vendorName,
      totalFabric,
      fabricType,
      quantity,
      quantityUsed,
      designs,
    };

    axios.post('https://rms-backend-1218.onrender.com/api/fabric', newFabric)
      .then(response => {
        setFabrics([...fabrics, response.data]);
        resetForm();
        handleClose();
      })
      .catch(error => {
        console.error('There was an error creating the fabric!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://rms-backend-1218.onrender.com/api/fabric/${id}`)
      .then(() => {
        setFabrics(fabrics.filter(fabric => fabric._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the fabric!', error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetForm = () => {
    setVendorName('');
    setTotalFabric('');
    setFabricType('');
    setQuantity('');
    setQuantityUsed('');
    setDesigns('');
  };

  const filteredFabrics = fabrics.filter(fabric =>
    fabric.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fabric.fabricType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fabric.designs.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row py-3">
            <h4 className="text-center text-warning pb-2">Fabric List</h4>
            <div className="row">
              <div className="d-flex justify-content-between">
                <Button variant="warning" onClick={handleShow}>+ ADD FABRIC</Button>{' '}
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>+ Add Fabric</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group className="my-3" controlId="formVendorName">
                        <Form.Label>Vendor Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Vendor Name"
                          value={vendorName}
                          onChange={(e) => setVendorName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formTotalFabric">
                        <Form.Label>Total Fabric</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Total Fabric"
                          value={totalFabric}
                          onChange={(e) => setTotalFabric(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formFabricType">
                        <Form.Label>Fabric Type</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Fabric Type"
                          value={fabricType}
                          onChange={(e) => setFabricType(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Quantity"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formQuantityUsed">
                        <Form.Label>Quantity Used</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Quantity Used"
                          value={quantityUsed}
                          onChange={(e) => setQuantityUsed(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formDesigns">
                        <Form.Label>Designs</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Designs"
                          value={designs}
                          onChange={(e) => setDesigns(e.target.value)}
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
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2 my-3"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </Form>
              </div>
            </div>
            <table className="table my-5">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Vendor Name</th>
                  <th scope="col">Fabric Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Quantity Used</th>
                  <th scope="col">Leftover</th>
                  <th scope="col">Designs</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredFabrics.map((fabric, index) => (
                  <tr key={fabric._id}>
                    <td>{index + 1}</td>
                    <td>{fabric.vendorName}</td>
                    <td>{fabric.fabricType}</td>
                    <td>{fabric.quantity}</td>
                    <td>{fabric.quantityUsed}</td>
                    <td>{fabric.leftover}</td>
                    <td>{fabric.designs}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleDelete(fabric._id)}>
                        Delete
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

export default AddFabric;



