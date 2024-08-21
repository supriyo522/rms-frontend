// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';

// function Reorder() {
//   const [searchInput, setSearchInput] = useState('');
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   const data = [
//     { id: 1, itemName: 'Jeans', itemNumber: '700086', venderName: 'Narayan', orderDate: 'june 8, 2024', logisticTime: '---', receivingDate: 'june 8, 2024', quantity: 120, stock: 1000, reorderPoint: '---' },
//     { id: 2, itemName: 'Belt', itemNumber: '700087', venderName: 'ABC LTD', orderDate: 'may 18, 2024', logisticTime: '---', receivingDate: 'may 28, 2024', quantity: 111, stock: 400, reorderPoint: '---' },
//     { id: 3, itemName: 'T-shirt', itemNumber: '700088', venderName: 'Rediff', orderDate: 'june 8, 2024', logisticTime: '---', receivingDate: 'june 28, 2024', quantity: 567, stock: 200, reorderPoint: '---' },
//     { id: 4, itemName: 'Purse', itemNumber: '700089', venderName: 'Laxmi Traders', orderDate: 'june 8, 2024', logisticTime: '---', receivingDate: 'june 18, 2024', quantity: 457, stock: 600, reorderPoint: '---' },
//     { id: 5, itemName: 'Kurta', itemNumber: '700090', venderName: 'Rajesh Exports', orderDate: 'june 10, 2024', logisticTime: '---', receivingDate: 'june 20, 2024', quantity: 300, stock: 500, reorderPoint: '---' },
//   ];

//   useEffect(() => {
//     let filtered = data;

//     if (searchInput) {
//       filtered = filtered.filter(item => item.itemName.toLowerCase().includes(searchInput.toLowerCase()));
//     }

//     if (selectedItems.length > 0) {
//       filtered = filtered.filter(item => selectedItems.includes(item.itemName));
//     }

//     setFilteredData(filtered);
//   }, [searchInput, selectedItems]);

//   const handleCheckboxChange = (itemName) => {
//     setSelectedItems(prevSelectedItems =>
//       prevSelectedItems.includes(itemName)
//         ? prevSelectedItems.filter(item => item !== itemName)
//         : [...prevSelectedItems, itemName]
//     );
//   };

//   return (
//     <div>
//       <h4 className='my-3'> Re-order Point</h4> &nbsp;

//       <div className="">
//         <div className="section">
//           <h4 className='text-info'>Select Division</h4>
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />&nbsp;Men's&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />&nbsp;Women's&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />&nbsp;Kid's&nbsp;&nbsp;
//         </div>
//         <div className="mt-3 department">
//           <h4 className='text-info'>Select Sections</h4>
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />&nbsp;cloths&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />&nbsp;home Decor&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />&nbsp;Leather&nbsp;&nbsp;
//         </div>
//         <div className="my-3 Items">
//           <h4 className='text-info'>Select Department</h4>
//           <input className="form-check-input" type="checkbox" value="Belt" id="flexCheckDefault7" onChange={() => handleCheckboxChange('Belt')} />&nbsp;Belt&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="Purse" id="flexCheckDefault8" onChange={() => handleCheckboxChange('Purse')} />&nbsp;Purse&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="Jeans" id="flexCheckDefault9" onChange={() => handleCheckboxChange('Jeans')} />&nbsp;Jeans&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="T-shirt" id="flexCheckDefault10" onChange={() => handleCheckboxChange('T-shirt')} />&nbsp;T-shirt&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="Kurta" id="flexCheckDefault11" onChange={() => handleCheckboxChange('Kurta')} />&nbsp;Kurta&nbsp;&nbsp;
//         </div>
//         <div className="my-3 Items">
//           <h4 className='text-info'>Select Categories</h4>
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12" />&nbsp;CatG-1&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault13" />&nbsp;CatG-2&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />&nbsp;CatG-3&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault15" />&nbsp;CatG-4&nbsp;&nbsp;
//           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault16" />&nbsp;CatG-5&nbsp;&nbsp;
//         </div>
//         <div className="d-flex justify-content-between">
//           <Form.Group className="mb-3" controlId="formBasicbying">
//             Select Date
//             <Form.Control type="date" placeholder="Order Date" />
//           </Form.Group>

//           <Form inline>
//             <Row>
//               <Col xs="auto">
//                 <Form.Control
//                   type="text"
//                   placeholder="Search"
//                   className="mr-sm-2"
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                 />
//               </Col>
//               <Col xs="auto">
//                 <Button type="submit">Submit</Button>
//               </Col>
//             </Row>
//           </Form>
//         </div>
//       </div>
//       <table className="table">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Item Name</th>
//             <th scope="col">Item Number</th>
//             <th scope="col">Vender Name</th>
//             <th scope="col">Order Date</th>
//             <th scope="col">Logistic Time</th>
//             <th scope="col">Receiving Date</th>
//             <th scope="col">Quantity</th>
//             <th scope="col">Stock</th>
//             <th scope="col">Re-order Point</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.itemName}</td>
//               <td>{item.itemNumber}</td>
//               <td>{item.venderName}</td>
//               <td>{item.orderDate}</td>
//               <td className='text-center'>{item.logisticTime}</td>
//               <td>{item.receivingDate}</td>
//               <td>{item.quantity}</td>
//               <td>{item.stock}</td>
//               <td className='text-center'>{item.reorderPoint}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Reorder;

// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

// function Reorder() {
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
//       const response = await axios.get('http://localhost:5000/api/reorder'); // Fetch reorder data
//       setData(response.data);

//       // Initialize selectedColumns with all columns set to true
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
//       await axios.post('http://localhost:5000/api/reorder', { data: filteredData }); // Save reorder data
//       alert('Data saved successfully!');
//     } catch (error) {
//       alert('Error saving data');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h4 className='mt-3'>Reorder Inventory</h4>
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

// export default Reorder;


import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

function Reorder() {
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
      const response = await axios.get('https://rms-backend-1218.onrender.com/api/reorder'); // Fetch reorder data
      setData(response.data);

      // Initialize selectedColumns with all columns set to true
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
      await axios.post('https://rms-backend-1218.onrender.com/api/reorder', { data: filteredData }); // Save reorder data
      alert('Data saved successfully!');
    } catch (error) {
      alert('Error saving data');
      console.error(error);
    }
  };

  return (
    <div>
      <h4 className='mt-3'>Reorder Inventory</h4>
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

export default Reorder;


