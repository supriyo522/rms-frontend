import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddSellThrough() {
  const [itemName, setItemName] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [location, setLocation] = useState('');
  const [quantityReceived, setQuantityReceived] = useState('');
  const [quantitySold, setQuantitySold] = useState('');
  const [quantityStock, setQuantityStock] = useState('');
  const [show, setShow] = useState(false);
  const [sellThroughData, setSellThroughData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('https://rms-backend-1218.onrender.com/api/sellthrough')
      .then(response => {
        setSellThroughData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleSubmit = () => {
    const newSellThrough = {
      itemName,
      vendorName,
      location,
      quantityReceived,
      quantitySold,
      quantityStock
    };

    axios.post('https://rms-backend-1218.onrender.com/api/sellthrough', newSellThrough)
      .then(response => {
        setSellThroughData([...sellThroughData, response.data]);
        resetForm();
        handleClose();
      })
      .catch(error => {
        console.error('There was an error creating the record!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://rms-backend-1218.onrender.com/api/sellthrough/${id}`)
      .then(() => {
        setSellThroughData(sellThroughData.filter(data => data._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the record!', error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetForm = () => {
    setItemName('');
    setVendorName('');
    setLocation('');
    setQuantityReceived('');
    setQuantitySold('');
    setQuantityStock('');
  };

  const filteredData = sellThroughData.filter(data =>
    data.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row py-3">
            <h4 className="text-center text-warning pb-2">Sell Through List</h4>
            <div className="row">
              <div className="d-flex justify-content-between">
                <Button variant="warning" onClick={handleShow}>+ ADD SELL THROUGH</Button>{' '}
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>+ Add Sell Through</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group className="my-3" controlId="formItemName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Item Name"
                          value={itemName}
                          onChange={(e) => setItemName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formVendorName">
                        <Form.Label>Vendor Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Vendor Name"
                          value={vendorName}
                          onChange={(e) => setVendorName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formQuantityReceived">
                        <Form.Label>Quantity Received</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Quantity Received"
                          value={quantityReceived}
                          onChange={(e) => setQuantityReceived(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formQuantitySold">
                        <Form.Label>Quantity Sold</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Quantity Sold"
                          value={quantitySold}
                          onChange={(e) => setQuantitySold(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formQuantityStock">
                        <Form.Label>Quantity Stock</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Quantity Stock"
                          value={quantityStock}
                          onChange={(e) => setQuantityStock(e.target.value)}
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
                  <th scope="col">Item Name</th>
                  <th scope="col">Vendor Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Quantity Received</th>
                  <th scope="col">Quantity Sold</th>
                  <th scope="col">Quantity Stock</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((data, index) => (
                  <tr key={data._id}>
                    <td>{index + 1}</td>
                    <td>{data.itemName}</td>
                    <td>{data.vendorName}</td>
                    <td>{data.location}</td>
                    <td>{data.quantityReceived}</td>
                    <td>{data.quantitySold}</td>
                    <td>{data.quantityStock}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleDelete(data._id)}>
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

export default AddSellThrough;
