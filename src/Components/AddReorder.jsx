import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function AddReorder() {
  const [itemName, setItemName] = useState('');
  const [itemNumber, setItemNumber] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [logisticTime, setLogisticTime] = useState('');
  const [receivingDate, setReceivingDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [stock, setStock] = useState('');
  const [reorderPoint, setReorderPoint] = useState('');
  const [reorders, setReorders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    resetForm();
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('https://rms-backend-1218.onrender.com/api/reorder')
      .then(response => {
        setReorders(response.data);
      })
      .catch(error => {
        console.error('Error fetching reorder data:', error);
      });
  }, []);

  const handleSubmit = () => {
    const newReorder = {
      itemName,
      itemNumber,
      vendorName,
      orderDate,
      logisticTime,
      receivingDate,
      quantity,
      stock,
      reorderPoint,
    };

    axios.post('https://rms-backend-1218.onrender.com/api/reorder', newReorder)
      .then(response => {
        console.log('Reorder data added:', response.data);
        setReorders([...reorders, response.data]);
        handleClose();
      })
      .catch(error => {
        console.error('Error adding reorder data:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://rms-backend-1218.onrender.com/api/reorder/${id}`)
      .then(() => {
        setReorders(reorders.filter(reorder => reorder._id !== id));
      })
      .catch(error => {
        console.error('Error deleting reorder data:', error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetForm = () => {
    setItemName('');
    setItemNumber('');
    setVendorName('');
    setOrderDate('');
    setLogisticTime('');
    setReceivingDate('');
    setQuantity('');
    setStock('');
    setReorderPoint('');
  };

  const filteredReorders = reorders.filter(reorder =>
    reorder.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reorder.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reorder.itemNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row py-3">
            <h4 className="text-center text-warning pb-2">Reorder List</h4>
            <div className="row">
              <div className="d-flex justify-content-between">
                <Button variant="warning" onClick={handleShow}>+ ADD REORDER</Button>{' '}
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
            <Table striped bordered hover className="my-5">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Item Number</th>
                  <th>Vendor Name</th>
                  <th>Order Date</th>
                  <th>Logistic Time</th>
                  <th>Receiving Date</th>
                  <th>Quantity</th>
                  <th>Stock</th>
                  <th>Reorder Point</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredReorders.map((reorder, index) => (
                  <tr key={reorder._id}>
                    <td>{index + 1}</td>
                    <td>{reorder.itemName}</td>
                    <td>{reorder.itemNumber}</td>
                    <td>{reorder.vendorName}</td>
                    <td>{reorder.orderDate}</td>
                    <td>{reorder.logisticTime}</td>
                    <td>{reorder.receivingDate}</td>
                    <td>{reorder.quantity}</td>
                    <td>{reorder.stock}</td>
                    <td>{reorder.reorderPoint}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleDelete(reorder._id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Reorder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formItemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formItemNumber">
            <Form.Label>Item Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item Number"
              value={itemNumber}
              onChange={(e) => setItemNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formVendorName">
            <Form.Label>Vendor Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Vendor Name"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formOrderDate">
            <Form.Label>Order Date</Form.Label>
            <Form.Control
              type="date"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formLogisticTime">
            <Form.Label>Logistic Time</Form.Label>
            <Form.Control
              type="text"
              placeholder="Logistic Time"
              value={logisticTime}
              onChange={(e) => setLogisticTime(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formReceivingDate">
            <Form.Label>Receiving Date</Form.Label>
            <Form.Control
              type="date"
              value={receivingDate}
              onChange={(e) => setReceivingDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formReorderPoint">
            <Form.Label>Reorder Point</Form.Label>
            <Form.Control
              type="text"
              placeholder="Reorder Point"
              value={reorderPoint}
              onChange={(e) => setReorderPoint(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddReorder;
