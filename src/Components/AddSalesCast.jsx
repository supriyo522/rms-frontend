import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function VendorStock() {
  const [vendorName, setVendorName] = useState('');
  const [address, setAddress] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [receivingDate, setReceivingDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [stockInHand, setStockInHand] = useState('');
  const [itemName, setItemName] = useState('');
  const [show, setShow] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('https://rms-backend-1218.onrender.com/api/vendor-stock')
      .then(response => {
        setStocks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the stocks!', error);
      });
  }, []);

  const handleSubmit = () => {
    const newStock = {
      vendorName,
      address,
      orderDate,
      receivingDate,
      quantity,
      stockInHand,
      itemName,
    };

    axios.post('https://rms-backend-1218.onrender.com/api/vendor-stock', newStock)
      .then(response => {
        setStocks([...stocks, response.data]);
        resetForm();
        handleClose();
      })
      .catch(error => {
        console.error('There was an error creating the stock!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://rms-backend-1218.onrender.com/api/vendor-stock/${id}`)
      .then(() => {
        setStocks(stocks.filter(stock => stock._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the stock!', error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetForm = () => {
    setVendorName('');
    setAddress('');
    setOrderDate('');
    setReceivingDate('');
    setQuantity('');
    setStockInHand('');
    setItemName('');
  };

  const filteredStocks = stocks.filter(stock =>
    stock.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row py-3">
            <h4 className="text-center text-warning pb-2">Vendor Stock List</h4>
            <div className="row">
              <div className="d-flex justify-content-between">
                <Button variant="warning" onClick={handleShow}>+ ADD STOCK</Button>{' '}
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>+ Add Stock</Modal.Title>
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
                      <Form.Group className="my-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formOrderDate">
                        <Form.Label>Order Date</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Order Date"
                          value={orderDate}
                          onChange={(e) => setOrderDate(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formReceivingDate">
                        <Form.Label>Receiving Date</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Receiving Date"
                          value={receivingDate}
                          onChange={(e) => setReceivingDate(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Quantity"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formStockInHand">
                        <Form.Label>Stock In Hand</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Stock In Hand"
                          value={stockInHand}
                          onChange={(e) => setStockInHand(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formItemName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Item Name"
                          value={itemName}
                          onChange={(e) => setItemName(e.target.value)}
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
                  <th scope="col">Address</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Receiving Date</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Stock In Hand</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredStocks.map((stock, index) => (
                  <tr key={stock._id}>
                    <td>{index + 1}</td>
                    <td>{stock.vendorName}</td>
                    <td>{stock.address}</td>
                    <td>{stock.orderDate}</td>
                    <td>{stock.receivingDate}</td>
                    <td>{stock.quantity}</td>
                    <td>{stock.stockInHand}</td>
                    <td>{stock.itemName}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleDelete(stock._id)}>
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

export default VendorStock;

