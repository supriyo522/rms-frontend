// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';

// function SailThrough() {
//   const [selectedDepartments, setSelectedDepartments] = useState([]);
//   const [searchText, setSearchText] = useState('');

//   const items = [
//     { id: 1, name: 'Jeans', vendor: 'Narayan', location: '---', received: 1000, sold: 700, stock: 300, sellThrough: 'Citimart' },
//     { id: 2, name: 'T-shirt', vendor: 'Anish', location: '---', received: 1200, sold: 700, stock: 500, sellThrough: 'Citimart' },
//     { id: 3, name: 'Kurta', vendor: 'Rediff', location: '---', received: 567, sold: 200, stock: 367, sellThrough: 'Citimart' },
//     { id: 4, name: 'Purse', vendor: 'Laxmi Traders', location: '---', received: 600, sold: 457, stock: 143, sellThrough: 'Citimart' },
//   ];

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setSelectedDepartments([...selectedDepartments, value]);
//     } else {
//       setSelectedDepartments(selectedDepartments.filter(dept => dept !== value));
//     }
//   };

//   const filteredItems = items.filter(item =>
//     (selectedDepartments.length === 0 || selectedDepartments.includes(item.name)) &&
//     (searchText === '' || item.name.toLowerCase().includes(searchText.toLowerCase()))
//   );

//   return (
//     <div>
//       <h4 className='my-3'>Sell Through</h4> &nbsp;
//       <div className="section">
//         <h4 className='text-info'>Select Division</h4>
//         <input className="form-check-input" type="checkbox" value="Men's" id="flexCheckDefault1" />&nbsp;Men's&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="Women's" id="flexCheckDefault2" />&nbsp;Women's&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="Kid's" id="flexCheckDefault3" />&nbsp;Kid's&nbsp;&nbsp;
//       </div>
//       <div className="mt-3 department">
//         <h4 className='text-info'>Select Sections</h4>
//         <input className="form-check-input" type="checkbox" value="cloths" id="flexCheckDefault4" />&nbsp;cloths&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="home Decor" id="flexCheckDefault5" />&nbsp;home Decor&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="Leather" id="flexCheckDefault6" />&nbsp;Leather&nbsp;&nbsp;
//       </div>
//       <div className="my-3 Items">
//         <h4 className='text-info'>Select Department</h4>
//         <input className="form-check-input" type="checkbox" value="Belt" id="flexCheckDefault7" onChange={handleCheckboxChange} />&nbsp;Belt&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="Purse" id="flexCheckDefault8" onChange={handleCheckboxChange} />&nbsp;Purse&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="Jeans" id="flexCheckDefault9" onChange={handleCheckboxChange} />&nbsp;Jeans&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="T-shirt" id="flexCheckDefault10" onChange={handleCheckboxChange} />&nbsp;T-shirt&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="Kurta" id="flexCheckDefault11" onChange={handleCheckboxChange} />&nbsp;Kurta&nbsp;&nbsp;
//       </div>
//       <div className="my-3 Items">
//         <h4 className='text-info'>Select Categories</h4>
//         <input className="form-check-input" type="checkbox" value="CatG-1" id="flexCheckDefault12" />&nbsp;CatG-1&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="CatG-2" id="flexCheckDefault13" />&nbsp;CatG-2&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="CatG-3" id="flexCheckDefault14" />&nbsp;CatG-3&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="CatG-4" id="flexCheckDefault15" />&nbsp;CatG-4&nbsp;&nbsp;
//         <input className="form-check-input" type="checkbox" value="CatG-5" id="flexCheckDefault16" />&nbsp;CatG-5&nbsp;&nbsp;
//       </div>
//       <div className="d-flex justify-content-between">
//         <Form.Group className="mb-3" controlId="formBasicDate">
//           Select Date
//           <Form.Control type="date" placeholder="Order Date" />
//         </Form.Group>
//         <Form inline>
//           <Row>
//             <Col xs="auto">
//               <Form.Control
//                 type="text"
//                 placeholder="Search"
//                 className="mr-sm-2"
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
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
//             <th scope="col">Item Name</th>
//             <th scope="col">Vendor Name</th>
//             <th scope="col">Location</th>
//             <th scope="col">Quantity Received</th>
//             <th scope="col">Quantity Sold</th>
//             <th scope="col">Quantity Stock</th>
//             <th scope="col">Sell Through</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredItems.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.vendor}</td>
//               <td className='text-center'>{item.location}</td>
//               <td>{item.received}</td>
//               <td>{item.sold}</td>
//               <td>{item.stock}</td>
//               <td>{item.sellThrough}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SailThrough;


// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

// function SellThrough() {
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
//       const response = await axios.get('http://localhost:5000/api/sellthrough');
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
//       await axios.post('http://localhost:5000/api/sellthrough', { data: filteredData });
//       alert('Data saved successfully!');
//     } catch (error) {
//       alert('Error saving data');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h4 className='mt-3'>Sell Through Inventory</h4>
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

// export default SellThrough;(old)

import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

function SellThrough() {
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
      const response = await axios.get('https://rms-backend-1218.onrender.com/api/sellthrough');
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
      await axios.post('http://localhost:5000/api/sellthrough', { data: filteredData });
      alert('Data saved successfully!');
    } catch (error) {
      alert('Error saving data');
      console.error(error);
    }
  };

  return (
    <div>
      <h4 className='mt-3'>Sell Through Inventory</h4>
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

export default SellThrough;



