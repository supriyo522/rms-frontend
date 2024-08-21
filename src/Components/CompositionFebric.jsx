// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';

// function CompositionFabric() {
//   const [searchText, setSearchText] = useState('');
//   const [items] = useState([
//     { id: 1, vendorName: 'Narayan', location: '---', billNumber: '12345667', billDate: 'June 8, 2024', receivingDate: 'June 8, 2024', rate: 120, quantity: 1000, fabricType: 'Cotton', image: 'assets/images/d1.png' },
//     { id: 2, vendorName: 'ABC LTD', location: '---', billNumber: '32526378', billDate: 'May 18, 2024', receivingDate: 'May 28, 2024', rate: 111, quantity: 400, fabricType: 'Cotton', image: 'assets/images/d3.png' },
//     { id: 3, vendorName: 'Rediff', location: '---', billNumber: '52526637', billDate: 'June 8, 2024', receivingDate: 'June 28, 2024', rate: 567, quantity: 200, fabricType: 'Polyster', image: 'assets/images/d4.png' },
//     { id: 4, vendorName: 'Laxmi Traders', location: '---', billNumber: '92526378', billDate: 'June 8, 2024', receivingDate: 'June 18, 2024', rate: 457, quantity: 600, fabricType: 'Polyster', image: 'assets/images/d5.png' },
//   ]);

//   const handleSearchChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const filteredItems = items.filter(item => 
//     item.vendorName.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <div>
//       <h4 className='my-3'>Composition Fabric</h4> &nbsp;
//       <div className="d-flex justify-content-between">
//         <Form.Group className="mb-3" controlId="formBasicbying">
//           Select Date
//           <Form.Control type="date" placeholder="Order Date" />
//         </Form.Group>

//         <Form onSubmit={handleSubmit} inline>
//           <Row>
//             <Col xs="auto">
//               <Form.Control
//                 type="text"
//                 placeholder="Search"
//                 value={searchText}
//                 onChange={handleSearchChange}
//                 className="mr-sm-2"
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
//             <th scope="col">Location</th>
//             <th scope="col">Bill Number</th>
//             <th scope="col">Bill Date</th>
//             <th scope="col">Receiving Date</th>
//             <th scope="col">Rate 1M.</th>
//             <th scope="col">Quantity</th>
//             <th scope="col">Fabric Type</th>
//             <th scope="col">Fabric Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredItems.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.vendorName}</td>
//               <td className='text-center'>{item.location}</td>
//               <td>{item.billNumber}</td>
//               <td>{item.billDate}</td>
//               <td>{item.receivingDate}</td>
//               <td>{item.rate}</td>
//               <td>{item.quantity}</td>
//               <td>{item.fabricType}</td>
//               <td>
//                 <img src={item.image} className='fabric-img' alt="" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default CompositionFabric;

// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

// function Fabric() {
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
//       const response = await axios.get('http://localhost:5000/api/fabric');
//       setData(response.data);
      
//       // Initialize selectedColumns with all columns set to true
//       if(response.data.length > 0) {
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
//       const parsedData = XLSX.utils.sheet_to_json(sheet, { defval: '' }); // Use defval to fill empty cells

//       setData(parsedData);
      
//       // Initialize selectedColumns with all columns set to true
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
//     try {
//       await axios.post('http://localhost:5000/api/fabric', { data: filteredData });
//       alert('Data saved successfully!');
//     } catch (error) {
//       alert('Error saving data');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h4 className='mt-3'>Fabric Inventory</h4>
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
//                       <td key={valueIndex}>{value}</td>
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

// export default Fabric;        


import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

function Fabric() {
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
      const response = await axios.get('https://rms-backend-1218.onrender.com/api/fabric');
      setData(response.data);
      
      // Initialize selectedColumns with all columns set to true
      if(response.data.length > 0) {
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
      const parsedData = XLSX.utils.sheet_to_json(sheet, { defval: '' }); // Use defval to fill empty cells

      setData(parsedData);
      
      // Initialize selectedColumns with all columns set to true
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
    try {
      await axios.post('https://rms-backend-1218.onrender.com/api/fabric', { data: filteredData });
      alert('Data saved successfully!');
    } catch (error) {
      alert('Error saving data');
      console.error(error);
    }
  };

  return (
    <div>
      <h4 className='mt-3'>Fabric Inventory</h4>
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
          {/* <Form.Group className="mb-3" controlId="formBasicBuying">
            Select Date
            <Form.Control type="date" placeholder="Order Date" />
          </Form.Group> */}
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
              {/* <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col> */}
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
                      <td key={valueIndex}>{value}</td>
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

export default Fabric;


