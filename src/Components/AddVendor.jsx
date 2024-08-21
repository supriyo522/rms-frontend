import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ManagerReport() {
  const [store, setStore] = useState('');
  const [division, setDivision] = useState('');
  const [section, setSection] = useState('');
  const [department, setDepartment] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [targetAchieved, setTargetAchieved] = useState('');
  const [footfall, setFootfall] = useState('');
  const [show, setShow] = useState(false);
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('https://rms-backend-1218.onrender.com/api/manager-reports')
      .then(response => {
        setReports(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reports!', error);
      });
  }, []);

  const handleSubmit = () => {
    const newReport = {
      store,
      division,
      section,
      department,
      targetAmount,
      targetAchieved,
      footfall,
    };

    axios.post('https://rms-backend-1218.onrender.com/api/manager-reports', newReport)
      .then(response => {
        setReports([...reports, response.data]);
        resetForm();
        handleClose();
      })
      .catch(error => {
        console.error('There was an error creating the report!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://rms-backend-1218.onrender.com/api/manager-reports/${id}`)
      .then(() => {
        setReports(reports.filter(report => report._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the report!', error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetForm = () => {
    setStore('');
    setDivision('');
    setSection('');
    setDepartment('');
    setTargetAmount('');
    setTargetAchieved('');
    setFootfall('');
  };

  const filteredReports = reports.filter(report =>
    report.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.division.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row py-3">
            <h4 className="text-center text-warning pb-2">Manager Reports</h4>
            <div className="row">
              <div className="d-flex justify-content-between">
                <Button variant="warning" onClick={handleShow}>+ ADD REPORT</Button>{' '}
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>+ Add Report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group className="my-3" controlId="formStore">
                        <Form.Label>Store</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Store"
                          value={store}
                          onChange={(e) => setStore(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formDivision">
                        <Form.Label>Division</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Division"
                          value={division}
                          onChange={(e) => setDivision(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formSection">
                        <Form.Label>Section</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Section"
                          value={section}
                          onChange={(e) => setSection(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formDepartment">
                        <Form.Label>Department</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Department"
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formTargetAmount">
                        <Form.Label>Target Amount</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Target Amount"
                          value={targetAmount}
                          onChange={(e) => setTargetAmount(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formTargetAchieved">
                        <Form.Label>Target Achieved</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Target Achieved"
                          value={targetAchieved}
                          onChange={(e) => setTargetAchieved(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="my-3" controlId="formFootfall">
                        <Form.Label>Footfall</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Footfall"
                          value={footfall}
                          onChange={(e) => setFootfall(e.target.value)}
                        />
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handleSubmit}>
                        Submit
                      </Button>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </div>
              <Form.Control
                type="text"
                placeholder="Search by store, division, section, or department"
                value={searchTerm}
                onChange={handleSearch}
                className="my-3"
              />
              <div className="col-md-12">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Store</th>
                      <th>Division</th>
                      <th>Section</th>
                      <th>Department</th>
                      <th>Target Amount</th>
                      <th>Target Achieved</th>
                      <th>Footfall</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReports.map((report) => (
                      <tr key={report._id}>
                        <td>{report.store}</td>
                        <td>{report.division}</td>
                        <td>{report.section}</td>
                        <td>{report.department}</td>
                        <td>{report.targetAmount}</td>
                        <td>{report.targetAchieved}</td>
                        <td>{report.footfall}</td>
                        <td>
                          <Button variant="danger" onClick={() => handleDelete(report._id)}>Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerReport;
