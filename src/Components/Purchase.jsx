// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

// function Purchase() {
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
//       const response = await axios.get('http://localhost:5000/api/getPurchases');
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

//   const excelDateToJSDate = (serial) => {
//     const excelEpoch = new Date(1900, 0, 1);
//     const days = serial - 2; // Excel's leap year bug
//     return new Date(excelEpoch.getTime() + days * 24 * 60 * 60 * 1000);
//   };

//   const formatExcelDate = (date) => {
//     const jsDate = excelDateToJSDate(date);
//     return jsDate // Format as YYYY-MM-DD
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

//       // Check and convert date fields
//       parsedData.forEach((row) => {
//         Object.keys(row).forEach((key) => {
//           if (typeof row[key] === 'number' && row[key] > 40000 && row[key] < 50000) {
//             row[key] = formatExcelDate(row[key]);
//           }
//         });
//       });

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
//       await axios.post('http://localhost:5000/api/savePurchase', { data: filteredData });
//       alert('Data saved successfully!');
//     } catch (error) {
//       alert('Error saving data');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h4 className='mt-3'>Purchase Forecast</h4>
//       <div className="">
//         {/* <div className="section mt-4">
//           <h4 className='text-info'>Select Division</h4>
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />&nbsp;Men's&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault2" />&nbsp;Women's&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault3" />&nbsp;Kid's&nbsp;&nbsp;
//         </div>
//         <div className="mt-3 department">
//           <h4 className='text-info'>Select Sections</h4>
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault4" />&nbsp;Clothes&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault5" />&nbsp;Home Decor&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault6" />&nbsp;Leather&nbsp;&nbsp;
//         </div>
//         <div className="my-3 Items">
//           <h4 className='text-info'>Select Department</h4>
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault7" />&nbsp;Belt&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault8" />&nbsp;Purse&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault9" />&nbsp;Jeans&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault10" />&nbsp;T-shirt&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault11" />&nbsp;Kurta&nbsp;&nbsp;
//         </div> */}
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

// export default Purchase;(old)

// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

// function Purchase() {
//   const [data, setData] = useState([]);
//   const [selectedColumns, setSelectedColumns] = useState([]);
//   const [visibleData, setVisibleData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   useEffect(() => {
//     if (data.length > 0) {
//       loadMoreData();
//     }
//   }, [data, searchTerm]);

//   const fetchInitialData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/getPurchases');
//       setData(response.data);

//       // Initialize selectedColumns with all columns
//       if(response.data.length > 0) {
//         const columns = Object.keys(response.data[0]);
//         setSelectedColumns(columns);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const excelDateToJSDate = (serial) => {
//     const excelEpoch = new Date(1900, 0, 1);
//     const days = serial - 2; // Excel's leap year bug
//     return new Date(excelEpoch.getTime() + days * 24 * 60 * 60 * 1000);
//   };

//   const formatExcelDate = (date) => {
//     const jsDate = excelDateToJSDate(date);
//     return jsDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
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

//       // Check and convert date fields
//       parsedData.forEach((row) => {
//         Object.keys(row).forEach((key) => {
//           if (typeof row[key] === 'number' && row[key] > 40000 && row[key] < 50000) {
//             row[key] = formatExcelDate(row[key]);
//           }
//         });
//       });

//       setData(parsedData);

//       // Initialize selectedColumns with all columns
//       const columns = Object.keys(parsedData[0]);
//       setSelectedColumns(columns);
//     };
//   };

//   const handleColumnSelect = (e) => {
//     const column = e.target.value;
//     setSelectedColumns((prevSelectedColumns) =>
//       prevSelectedColumns.includes(column)
//         ? prevSelectedColumns.filter((col) => col !== column)
//         : [...prevSelectedColumns, column]
//     );
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setPage(1);
//     setVisibleData([]);
//   };

//   const getFilteredData = () => {
//     const filteredData = data
//       .filter((row) => {
//         return Object.values(row).some((value) =>
//           String(value).toLowerCase().includes(searchTerm.toLowerCase())
//         );
//       })
//       .map((row) => {
//         const filteredRow = {};
//         Object.keys(row).forEach((key) => {
//           if (selectedColumns.includes(key)) {
//             filteredRow[key] = row[key];
//           }
//         });
//         return filteredRow;
//       });
//     return filteredData;
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
//       await axios.post('http://localhost:5000/api/savePurchase', { data: filteredData });
//       alert('Data saved successfully!');
//     } catch (error) {
//       alert('Error saving data');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h4 className='mt-3'>Purchase Forecast</h4>
//       <div className="">
//         <div className="my-3 Items">
//           <h4 className='text-info'>Select Categories</h4>
//           <Form>
//             {Object.keys(data[0] || {}).map((column) => (
//               <Form.Check 
//                 key={column} 
//                 type="checkbox" 
//                 label={column} 
//                 value={column} 
//                 checked={selectedColumns.includes(column)} 
//                 onChange={handleColumnSelect} 
//               />
//             ))}
//           </Form>
//         </div>
//         <div className="d-flex justify-content-between my-5">
//           <Form inline>
//             <Row>
//               <Col xs="auto">
//                 <Form.Control
//                   type="text"
//                   placeholder="Search"
//                   className="mr-sm-2"
//                   value={searchTerm}
//                   onChange={handleSearch}
//                 />
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
//                   {selectedColumns.map((key) => (
//                     <th key={key}>{key}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {visibleData.map((row, index) => (
//                   <tr key={index}>
//                     {selectedColumns.map((key) => (
//                       <td key={key}>{row[key]}</td>
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

// export default Purchase;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ITEMS_PER_PAGE = 50;

function FetchPurchase() {
  const [data, setData] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
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
      const response = await axios.get('https://rms-backend-1218.onrender.com/api/getPurchases');
      setData(response.data);

      // Initialize selectedColumns with all columns
      if (response.data.length > 0) {
        const columns = Object.keys(response.data[0]);
        setSelectedColumns(columns);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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

  return (
    <div>
      <h4 className='mt-3'>Purchase Data</h4>
      <div className="my-3 Items">
        <h4 className='text-info'>Select Categories</h4>
    
          {/* <div className="row">

<div className="col-md-6 col-sm-12">


          <div className="d-flex justify-content-around">
            <div className="from-date">
          <h5>start Date</h5>
          <input type="date" />
          </div>
          <div className="to-date">
          <h5>End Date</h5>
          <input type="date" />
          </div>
          </div>
          </div>
          </div> */}
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

export default FetchPurchase;





// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

// function Purchase() {
//   const [data, setData] = useState([]);
//   const [selectedColumns, setSelectedColumns] = useState([]);
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
//       const response = await axios.get('http://localhost:5000/api/getPurchases');
//       setData(response.data);
      
//       // Initialize selectedColumns with all columns
//       if(response.data.length > 0) {
//         const columns = Object.keys(response.data[0]);
//         setSelectedColumns(columns);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const excelDateToJSDate = (serial) => {
//     const excelEpoch = new Date(1900, 0, 1);
//     const days = serial - 2; // Excel's leap year bug
//     return new Date(excelEpoch.getTime() + days * 24 * 60 * 60 * 1000);
//   };

//   const formatExcelDate = (date) => {
//     const jsDate = excelDateToJSDate(date);
//     return jsDate // Format as YYYY-MM-DD
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

//       // Check and convert date fields
//       parsedData.forEach((row) => {
//         Object.keys(row).forEach((key) => {
//           if (typeof row[key] === 'number' && row[key] > 40000 && row[key] < 50000) {
//             row[key] = formatExcelDate(row[key]);
//           }
//         });
//       });

//       setData(parsedData);
      
//       // Initialize selectedColumns with all columns
//       const columns = Object.keys(parsedData[0]);
//       setSelectedColumns(columns);
//     };
//   };

//   const handleColumnSelect = (e) => {
//     const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
//     setSelectedColumns(selectedOptions);
//   };

//   const getFilteredData = () => {
//     return data.map((row) => {
//       const filteredRow = {};
//       Object.keys(row).forEach((key) => {
//         if (selectedColumns.includes(key)) {
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
//       await axios.post('http://localhost:5000/api/savePurchase', { data: filteredData });
//       alert('Data saved successfully!');
//     } catch (error) {
//       alert('Error saving data');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h4 className='mt-3'>Purchase Forecast</h4>
//       <div className="">
//         {/* <div className="section mt-4">
//           <h4 className='text-info'>Select Division</h4>
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />&nbsp;Men's&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault2" />&nbsp;Women's&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault3" />&nbsp;Kid's&nbsp;&nbsp;
//         </div>
//         <div className="mt-3 department">
//           <h4 className='text-info'>Select Sections</h4>
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault4" />&nbsp;Clothes&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault5" />&nbsp;Home Decor&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault6" />&nbsp;Leather&nbsp;&nbsp;
//         </div>
//         <div className="my-3 Items">
//           <h4 className='text-info'>Select Department</h4>
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault7" />&nbsp;Belt&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault8" />&nbsp;Purse&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault9" />&nbsp;Jeans&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault10" />&nbsp;T-shirt&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" id="flexCheckDefault11" />&nbsp;Kurta&nbsp;&nbsp;
//         </div> */}
//         <div className="my-3 Items">
//           <h4 className='text-info'>Select Categories</h4>
//           <Form.Select multiple aria-label="Select columns" onChange={handleColumnSelect}>
//             {Object.keys(data[0] || {}).map((column) => (
//               <option key={column} value={column}>
//                 {column}
//               </option>
//             ))}
//           </Form.Select>
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
//                   {selectedColumns.map((key) => (
//                     <th key={key}>{key}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {visibleData.map((row, index) => (
//                   <tr key={index}>
//                     {selectedColumns.map((key) => (
//                       <td key={key}>{row[key]}</td>
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

// export default Purchase;


// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

// function Purchase() {
//   const [data, setData] = useState([]);
//   const [selectedColumns, setSelectedColumns] = useState([]);
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
//       const response = await axios.get('http://localhost:5000/api/getPurchases');
//       setData(response.data);
      
//       // Initialize selectedColumns with all columns
//       if(response.data.length > 0) {
//         const columns = Object.keys(response.data[0]);
//         setSelectedColumns(columns);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const excelDateToJSDate = (serial) => {
//     const excelEpoch = new Date(1900, 0, 1);
//     const days = serial - 2; // Excel's leap year bug
//     return new Date(excelEpoch.getTime() + days * 24 * 60 * 60 * 1000);
//   };

//   const formatExcelDate = (date) => {
//     const jsDate = excelDateToJSDate(date);
//     return jsDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
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

//       // Check and convert date fields
//       parsedData.forEach((row) => {
//         Object.keys(row).forEach((key) => {
//           if (typeof row[key] === 'number' && row[key] > 40000 && row[key] < 50000) {
//             row[key] = formatExcelDate(row[key]);
//           }
//         });
//       });

//       setData(parsedData);
      
//       // Initialize selectedColumns with all columns
//       const columns = Object.keys(parsedData[0]);
//       setSelectedColumns(columns);
//     };
//   };

//   const handleColumnSelect = (e) => {
//     const column = e.target.value;
//     setSelectedColumns((prevSelectedColumns) =>
//       prevSelectedColumns.includes(column)
//         ? prevSelectedColumns.filter((col) => col !== column)
//         : [...prevSelectedColumns, column]
//     );
//   };

//   const getFilteredData = () => {
//     return data.map((row) => {
//       const filteredRow = {};
//       Object.keys(row).forEach((key) => {
//         if (selectedColumns.includes(key)) {
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
//       await axios.post('http://localhost:5000/api/savePurchase', { data: filteredData });
//       alert('Data saved successfully!');
//     } catch (error) {
//       alert('Error saving data');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h4 className='mt-3'>Purchase Forecast</h4>
//       <div className="">
//         <div className="my-3 Items">
//           <h4 className='text-info'>Select Categories</h4>
//           <Form>
//             {Object.keys(data[0] || {}).map((column) => (
//               <Form.Check 
//                 key={column} 
//                 type="checkbox" 
//                 label={column} 
//                 value={column} 
//                 checked={selectedColumns.includes(column)} 
//                 onChange={handleColumnSelect} 
//               />
//             ))}
//           </Form>
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
//                   {selectedColumns.map((key) => (
//                     <th key={key}>{key}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {visibleData.map((row, index) => (
//                   <tr key={index}>
//                     {selectedColumns.map((key) => (
//                       <td key={key}>{row[key]}</td>
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

// export default Purchase;













