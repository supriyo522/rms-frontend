
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';

// function StockVendor() {
//   const [searchInput, setSearchInput] = useState('');

//   // Sample data
//   const data = [
//     { id: 1, vendorName: 'Narayan', address: '---', orderDate: 'june 8, 2024', receivingDate: 'june 8, 2024', quantity: 120, stock: 1000, itemName: 'Jeans' },
//     { id: 2, vendorName: 'ABC LTD', address: '---', orderDate: 'may 18, 2024', receivingDate: 'may 28, 2024', quantity: 111, stock: 400, itemName: 'Belt' },
//     { id: 3, vendorName: 'Rediff', address: '---', orderDate: 'june 8, 2024', receivingDate: 'june 28, 2024', quantity: 567, stock: 200, itemName: 'T-shirt' },
//     { id: 4, vendorName: 'Laxmi Traders', address: '---', orderDate: 'june 8, 2024', receivingDate: 'june 18, 2024', quantity: 457, stock: 600, itemName: 'Purse' },
//   ];

//   // Filter data based on search input
//   const filteredData = data.filter(item =>
//     item.vendorName.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   return (
//     <div>
//       <h4 className='my-3'> Vendor-wise Stock</h4> &nbsp;
//       <div className="d-flex justify-content-between">
//         <Form.Group className="mb-3" controlId="formBasicbying">
//           Select Date
//           <Form.Control type="date" placeholder="Order Date" />
//         </Form.Group>
//         <Form inline>
//           <Row>
//             <Col xs="auto">
//               <Form.Control
//                 type="text"
//                 placeholder="Search Vendor Name"
//                 className="mr-sm-2"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//               />
//             </Col>
//             <Col xs="auto">
//               <Button type="submit">Submit</Button>
//             </Col>
//           </Row>
//         </Form>
//       </div>
//       <table className="table">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Vendor Name</th>
//             <th scope="col">Address</th>
//             <th scope="col">Order Date</th>
//             <th scope="col">Receiving Date</th>
//             <th scope="col">Quantity</th>
//             <th scope="col">Stock in Hand</th>
//             <th scope="col">Item Name</th>
//             <th scope="col">View</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.vendorName}</td>
//               <td>{item.address}</td>
//               <td>{item.orderDate}</td>
//               <td>{item.receivingDate}</td>
//               <td>{item.quantity}</td>
//               <td>{item.stock}</td>
//               <td>{item.itemName}</td>
//               <td>
//                 <button className='btn btn-info p-1 m-0'>
//                   <i className="fa fa-caret-square-o-down" aria-hidden="true"></i>&nbsp;View Details
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StockVendor;

// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

// function VendorStock() {
//   const [data, setData] = useState([]);
//   const [selectedColumns, setSelectedColumns] = useState({});
//   const [visibleData, setVisibleData] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   useEffect(() => {
//     if (data.length > 0) {
//       loadMoreData();
//     }
//   }, [data]);

//   const fetchInitialData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/vendor-stock');
//       setData(response.data);
      
//       if (response.data.length > 0) {
//         const columns = Object.keys(response.data[0]);
//         const initialSelectedColumns = columns.reduce((acc, col) => {
//           acc[col] = true;
//           return acc;
//         }, {});
//         setSelectedColumns(initialSelectedColumns);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleFileUpload = (e) => {
//     const reader = new FileReader();
//     reader.readAsBinaryString(e.target.files[0]);
//     reader.onload = (e) => {
//       const data = e.target.result;
//       const workbook = XLSX.read(data, { type: 'binary' });
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];
//       const parsedData = XLSX.utils.sheet_to_json(sheet, { defval: '' });

//       setData(parsedData);
      
//       const columns = Object.keys(parsedData[0]);
//       const initialSelectedColumns = columns.reduce((acc, col) => {
//         acc[col] = true;
//         return acc;
//       }, {});
//       setSelectedColumns(initialSelectedColumns);
//     };
//   };

//   const handleCheckboxChange = (column) => {
//     setSelectedColumns((prevSelectedColumns) => ({
//       ...prevSelectedColumns,
//       [column]: !prevSelectedColumns[column],
//     }));
//   };

//   const getFilteredData = () => {
//     return data.map((row) => {
//       const filteredRow = {};
//       Object.keys(row).forEach((key) => {
//         if (selectedColumns[key]) {
//           filteredRow[key] = row[key];
//         }
//       });
//       return filteredRow;
//     });
//   };

//   const loadMoreData = () => {
//     const filteredData = getFilteredData();
//     const startIndex = (page - 1) * ITEMS_PER_PAGE;
//     const endIndex = startIndex + ITEMS_PER_PAGE;
//     const newVisibleData = filteredData.slice(startIndex, endIndex);
//     setVisibleData((prevData) => [...prevData, ...newVisibleData]);
//     setPage((prevPage) => prevPage + 1);
//   };

//   const handleSubmit = async () => {
//     const filteredData = getFilteredData();
//     console.log("Data being sent to the backend:", filteredData);
//     try {
//       await axios.post('http://localhost:5000/api/vendor-stock', { data: filteredData });
//       alert('Data saved successfully!');
//     } catch (error) {
//       alert('Error saving data');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h4 className='mt-3'>Vendor Stock Inventory</h4>
//       <div className="">
//         <div className="my-3 Items">
//           <h4 className='text-info'>Select Categories</h4>
//           {Object.keys(selectedColumns).map((column) => (
//             <div key={column}>
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 id={`flexCheckDefault_${column}`}
//                 checked={selectedColumns[column]}
//                 onChange={() => handleCheckboxChange(column)}
//               />&nbsp;{column}&nbsp;&nbsp;
//             </div>
//           ))}
//         </div>
//         <div className="d-flex justify-content-between my-5">
//           <Form.Group className="mb-3" controlId="formBasicBuying">
//             Select Date
//             <Form.Control type="date" placeholder="Order Date" />
//           </Form.Group>
//           <Form inline>
//             <Row>
//               <Col xs="auto">
//                 <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
//               </Col>
//               <Col xs="auto">
//                 <Button type="submit">Submit</Button>
//               </Col>
//             </Row>
//           </Form>
//         </div>

//         <div className="my-3">
//           <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
//         </div>
//         <Button onClick={handleSubmit} variant="primary">Save to Database</Button>

//         {visibleData.length > 0 && (
//           <InfiniteScroll
//             dataLength={visibleData.length}
//             next={loadMoreData}
//             hasMore={visibleData.length < getFilteredData().length}
//             loader={<h4>Loading...</h4>}
//             endMessage={<p style={{ textAlign: 'center' }}><b>End of Data</b></p>}
//           >
//             <table className="table">
//               <thead>
//                 <tr>
//                   {Object.keys(visibleData[0]).filter(key => selectedColumns[key]).map((key) => (
//                     <th key={key}>{key}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {visibleData.map((row, index) => (
//                   <tr key={index}>
//                     {Object.entries(row).filter(([key]) => selectedColumns[key]).map(([key, value], valueIndex) => (
//                       <td key={valueIndex}>
//                         {Array.isArray(value)
//                           ? value.map((item, subIndex) => (
//                               <div key={subIndex}>
//                                 {Object.entries(item).map(([subKey, subValue]) => (
//                                   <div key={subKey}>
//                                     <strong>{subKey}:</strong> {subValue}
//                                   </div>
//                                 ))}
//                               </div>
//                             ))
//                           : value}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </InfiniteScroll>
//         )}
//       </div>
//     </div>
//   );
// }

// export default VendorStock;(old)


import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

function VendorStock() {
  const [data, setData] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [visibleData, setVisibleData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      loadMoreData();
    }
  }, [data, searchTerm]);

  const fetchInitialData = async () => {
    try {
      const response = await axios.get('https://rms-backend-1218.onrender.com/api/vendor-stock');
      setData(response.data);

      if (response.data.length > 0) {
        const columns = Object.keys(response.data[0]);
        const initialSelectedColumns = columns.reduce((acc, col) => {
          acc[col] = true;
          return acc;
        }, {});
        setSelectedColumns(initialSelectedColumns);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet, { defval: '' });

      setData(parsedData);

      const columns = Object.keys(parsedData[0]);
      const initialSelectedColumns = columns.reduce((acc, col) => {
        acc[col] = true;
        return acc;
      }, {});
      setSelectedColumns(initialSelectedColumns);
    };
  };

  const handleCheckboxChange = (column) => {
    setSelectedColumns((prevSelectedColumns) => ({
      ...prevSelectedColumns,
      [column]: !prevSelectedColumns[column],
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
    setVisibleData([]);
  };

  const getFilteredData = () => {
    const filteredData = data
      .filter((row) => {
        return Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
      .map((row) => {
        const filteredRow = {};
        Object.keys(row).forEach((key) => {
          if (selectedColumns[key]) {
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
    const filteredData = getFilteredData();
    console.log("Data being sent to the backend:", filteredData);
    try {
      await axios.post('https://rms-backend-1218.onrender.com/api/vendor-stock', { data: filteredData });
      alert('Data saved successfully!');
    } catch (error) {
      alert('Error saving data');
      console.error(error);
    }
  };

  return (
    <div>
      <h4 className='mt-3'>Vendor Stock Inventory</h4>
      <div className="">
        <div className="my-3 Items">
          <h4 className='text-info'>Select Categories</h4>
          {Object.keys(selectedColumns).map((column) => (
            <div key={column}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`flexCheckDefault_${column}`}
                checked={selectedColumns[column]}
                onChange={() => handleCheckboxChange(column)}
              />&nbsp;{column}&nbsp;&nbsp;
            </div>
          ))}
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

        {/* <div className="my-3">
          <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        </div>
        <Button onClick={handleSubmit} variant="primary">Save to Database</Button> */}

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
                  {Object.keys(visibleData[0]).filter(key => selectedColumns[key]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleData.map((row, index) => (
                  <tr key={index}>
                    {Object.entries(row).filter(([key]) => selectedColumns[key]).map(([key, value], valueIndex) => (
                      <td key={valueIndex}>
                        {Array.isArray(value)
                          ? value.map((item, subIndex) => (
                              <div key={subIndex}>
                                {Object.entries(item).map(([subKey, subValue]) => (
                                  <div key={subKey}>
                                    <strong>{subKey}:</strong> {subValue}
                                  </div>
                                ))}
                              </div>
                            ))
                          : value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}

export default VendorStock;


