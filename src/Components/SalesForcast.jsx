// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import Button from 'react-bootstrap/Button';
// // import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const ITEMS_PER_PAGE = 50;

// export default function SalesForcast() {
//   // static demoUrl = '   ';
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
//       const response = await axios.get('http://localhost:5000/api/getSaleForcast');
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

//     return (
//       <div>
//         <h4 className='my-2'>Sell Forcast</h4>
//           {/* <ResponsiveContainer width="100%" aspect={3}>
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
//           <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
//         </BarChart>
//       </ResponsiveContainer> */}
      
//       {/* <div className="section mt-4">
//     <h4 className='text-info'>Select  Division</h4>
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />&nbsp;Men's&nbsp;&nbsp;
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />&nbsp;Women's&nbsp;&nbsp;
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />&nbsp;Kid's&nbsp;&nbsp;
//   </div>
//   <div className="mt-3 department">
//     <h4 className='text-info'>Select Sections</h4>
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />&nbsp;cloths&nbsp;&nbsp;
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />&nbsp;home Decor&nbsp;&nbsp;
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />&nbsp;Leather&nbsp;&nbsp;
//   </div>
//   <div className="my-3 Items">
//     <h4 className='text-info'>Select Department</h4>
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />&nbsp;Belt&nbsp;&nbsp;
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />&nbsp;Purse&nbsp;&nbsp;
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />&nbsp;Jeans&nbsp;&nbsp;
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />&nbsp;T-shirt&nbsp;&nbsp;
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />&nbsp;Kurta&nbsp;&nbsp;
//   </div>
//   <div className="my-3 Items">
//     <h4 className='text-info'>Select Categories</h4>
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />&nbsp;CatG-1&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />&nbsp;CatG-2&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />&nbsp;CatG-3&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />&nbsp;CatG-4&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />&nbsp;CatG-5&nbsp;&nbsp;
//   </div> */}
//   <div className='d-flex justify-content-between'>
//   <Form.Group className="mb-3" controlId="formBasicbying">
//                     Select Date
//                     <Form.Control type="date" placeholder="Order Date" />
//          </Form.Group>
  
//   {/* <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Select Month
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">January</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">February</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">March</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">April</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">May</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">June </Dropdown.Item>
//         <Dropdown.Item href="#/action-3">July</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">August</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">September</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">October</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">November</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">December</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown> */}
//     <Form inline>
//       <Row>
//         <Col xs="auto">
//           <Form.Control
//             type="text"
//             placeholder="Search"
//             className=" mr-sm-2"
//           />
//         </Col>
//         <Col xs="auto">
//           <Button type="submit">Submit</Button>
//         </Col>
//       </Row>
//     </Form>
//     </div>
  

// {visibleData.length > 0 && (
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
//                   {Object.keys(visibleData[0]).map((key) => (
//                     <th key={key}>{key}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {visibleData.map((row, index) => (
//                   <tr key={index}>
//                     {Object.values(row).map((value, valueIndex) => (
//                       <td key={valueIndex}>{value}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </InfiniteScroll>
//           )}
//       </div>
//     );
//   }

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const ITEMS_PER_PAGE = 50;

export default function SalesForcast() {
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
      const response = await axios.get('https://rms-backend-1218.onrender.com/api/getSaleForcast');
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

  return (
    <div>
      <h4 className='my-2'>Sales Details</h4>
      <div className="my-3 Items">
        <h4 className='text-info'>Select Columns</h4>
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
  );
}

