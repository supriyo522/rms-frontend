import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ITEMS_PER_PAGE = 50;

function UploadPurchase() {
  const [data, setData] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  useEffect(() => {
    if (data.length > 0) {
      setPage(1); // Reset page to 1 whenever data or filters change
      setVisibleData([]);
      loadMoreData();
    }
  }, [data, searchTerm, fromDate, toDate]);

  const excelDateToJSDate = (serial) => {
    const excelEpoch = new Date(1900, 0, 1);
    const days = serial - 2; // Excel's leap year bug
    return new Date(excelEpoch.getTime() + days * 24 * 60 * 60 * 1000);
  };

  const formatExcelDate = (date) => {
    const jsDate = excelDateToJSDate(date);
    return jsDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet, { defval: '' }); // Use defval to fill empty cells

      // Check and convert date fields
      parsedData.forEach((row) => {
        Object.keys(row).forEach((key) => {
          if (typeof row[key] === 'number' && row[key] > 40000 && row[key] < 50000) {
            row[key] = formatExcelDate(row[key]);
          }
        });
      });

      setData(parsedData);

      // Initialize selectedColumns with all columns
      if (parsedData.length > 0) {
        const columns = Object.keys(parsedData[0]);
        setSelectedColumns(columns);
      }
    };
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
    setVisibleData([]);
  };

  const getFilteredData = () => {
    const filteredData = data
      .filter((row) => {
        // Ensure date column exists and convert it to a Date object
        const dateColumn = 'Date'; // Adjust this if your date column has a different name
        const rowDate = new Date(row[dateColumn]);

        // Check if rowDate is within the specified date range
        const matchesDateRange = (!fromDate || rowDate >= new Date(fromDate)) &&
          (!toDate || rowDate <= new Date(toDate));

        // Check if row matches the search term
        const matchesSearchTerm = Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );

        return matchesSearchTerm && matchesDateRange;
      })
      .map((row) => {
        const filteredRow = {};
        Object.keys(row).forEach((key) => {
          if (selectedColumns.includes(key)) {
            filteredRow[key] = row[key];
          }
        });
        return filteredRow;
      });
    return filteredData;
  };

  const loadMoreData = () => {
    const filteredData = getFilteredData();
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newVisibleData = filteredData.slice(startIndex, endIndex);
    setVisibleData((prevData) => [...prevData, ...newVisibleData]);
    setPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('https://rms-backend-1218.onrender.com/api/savePurchase', { data });
      alert('Data saved successfully!');
    } catch (error) {
      alert('Error saving data');
      console.error(error);
    }
  };

  return (
    <div>
      <h4 className='mt-3'>Upload Purchase Data</h4>
      <div className="my-3">
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      </div>
      <Button onClick={handleSubmit} variant="primary">Save to Database</Button>

      <div className="my-3 Items">
        <h4 className='text-info'>Select Categories</h4>
        <Form>
          {Object.keys(data[0] || {}).map((column) => (
            <Form.Check 
              key={column} 
              type="checkbox" 
              label={column} 
              value={column} 
              checked={selectedColumns.includes(column)} 
              onChange={(e) => {
                const column = e.target.value;
                setSelectedColumns((prevSelectedColumns) =>
                  prevSelectedColumns.includes(column)
                    ? prevSelectedColumns.filter((col) => col !== column)
                    : [...prevSelectedColumns, column]
                );
              }} 
            />
          ))}
        </Form>
      </div>

      <div className="my-3">
        <h4 className='text-info'>Select Date Range</h4>
        <Form>
          <Row>
            <Col xs="auto"> 
              <Form.Control
                type="date"
                placeholder="From"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Form.Control
                type="date"
                placeholder="To"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </Col>
          </Row>
        </Form>
      </div>

      <div className="d-flex justify-content-between my-5">
        <Form inline>
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
          </Row>
        </Form>
      </div>

      {visibleData.length > 0 && (
        <InfiniteScroll
          dataLength={visibleData.length}
          next={loadMoreData}
          hasMore={visibleData.length < getFilteredData().length}
          loader={<h4>Loading...</h4>}
          endMessage={<p style={{ textAlign: 'center' }}><b>End of Data</b></p>}
        >
          <table className="table">
            <thead>
              <tr>
                {selectedColumns.map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleData.map((row, index) => (
                <tr key={index}>
                  {selectedColumns.map((key) => (
                    <td key={key}>{row[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default UploadPurchase;


