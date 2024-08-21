// import React, { useState, useEffect } from 'react';
// // import React from 'react';
// // import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
// // import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const ITEMS_PER_PAGE = 50;

// function Stockatglance() {
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
//       const response = await axios.get('http://localhost:5000/api/getStockAtGlance');
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

//   return (
//     <div>
//       <h4>Stock At Glance</h4>
//       {/* <div>
//       <div className="section mt-4">
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
//   </div>
//       </div> */}
//       <div className='d-flex justify-content-between'>
//       <Form.Group className="mb-3" controlId="formBasicbying">
//                     Select Date
//                     <Form.Control type="date" placeholder="Order Date" />
//          </Form.Group>

// {/*   
// <Dropdown>
//     <Dropdown.Toggle variant="success" id="dropdown-basic">
//       Select Month
//     </Dropdown.Toggle>

//     <Dropdown.Menu>
//       <Dropdown.Item href="#/action-1">January</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">February</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">March</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">April</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">May</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">June </Dropdown.Item>
//       <Dropdown.Item href="#/action-3">July</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">August</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">September</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">October</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">November</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">December</Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown> */}
//   <Form inline>
//     <Row>
//       <Col xs="auto">
//         <Form.Control
//           type="text"
//           placeholder="Search"
//           className=" mr-sm-2"
//         />
//       </Col>
//       <Col xs="auto">
//         <Button type="submit">Submit</Button>
//       </Col>
//     </Row>
//   </Form>
//   </div>
//     {/* <table class="table">
//   <thead class="thead-dark">
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Source Site</th>
//       <th scope="col">Division</th>
//       <th scope="col">Section</th>
//       <th scope="col">Department</th>
//       <th scope="col">Vendor</th>
//       <th scope="col">Bar Code</th>
//       <th scope="col">Ageing</th>
//       <th scope="col">Category1</th>
//       <th scope="col">Std Rate</th>
//       <th scope="col">RSP</th>
//       <th scope="col">Closing QTY</th>
//       <th scope="col">Closing AMT</th>
//       <th scope="col">stock As On </th> */}
   
//       {/* <th scope="col">Item Number</th> */}
//       {/* <th scope="col">Re-order Point </th> */}
//       {/* <th scope="col">Fare </th>
//       <th scope="col">type</th> */}
    


//     {/* </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Citimart</td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>Leather</td>
//       <td>Narayan</td>
//       <td>64665q  </td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>Cloths</td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>12000</td>
//       <td>10000</td>
//       <td>Jan</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Citimart</td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>Leather</td>
//       <td>Narayan</td>
//       <td>64665q  </td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>Cloths</td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>12000</td>
//       <td>10000</td>
//       <td>Jan</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td>Citimart</td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>Leather</td>
//       <td>Narayan</td>
//       <td>64665q  </td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>Cloths</td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>12000</td>
//       <td>10000</td>
//       <td>Jan</td>

//     </tr>
//     <tr>
//       <td>4</td>
//       <td>Citimart</td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>Leather</td>
//       <td>Narayan</td>
//       <td>64665q  </td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>Cloths</td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>12000</td>
//       <td>10000</td>
//       <td>Jan</td>

//     </tr>
//   </tbody>
// </table> */}
//     {visibleData.length > 0 && (
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
//     </div>
//   )
// }

// export default Stockatglance(old)


import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const ITEMS_PER_PAGE = 50;

function Stockatglance() {
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
      const response = await axios.get('https://rms-backend-1218.onrender.com/api/getStockAtGlance');
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
      <h4 className="mt-3">Stock At Glance</h4>
      <div className="my-3">
        <h4 className="text-info">Select Columns</h4>
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

export default Stockatglance;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Pie, Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// } from 'chart.js';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// const ITEMS_PER_PAGE = 50;

// function Sales() {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [visibleData, setVisibleData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [barChartData, setBarChartData] = useState({});
//   const [pieChartData, setPieChartData] = useState({});

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (filteredData.length > 0) {
//       loadMoreData();
//       processData(filteredData);
//     }
//   }, [filteredData]);

//   useEffect(() => {
//     filterData();
//   }, [data, searchTerm, selectedDate]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/getStockAtGlance');
//       setData(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Error fetching data');
//       setLoading(false);
//     }
//   };

//   const filterData = () => {
//     let filtered = data;

//     if (searchTerm) {
//       filtered = filtered.filter((item) =>
//         Object.values(item).some((value) =>
//           String(value).toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     }

//     if (selectedDate) {
//       filtered = filtered.filter((item) => {
//         const itemDate = new Date(item.billDate); // Assuming there's a 'date' field in the data
//         const selected = new Date(selectedDate);
//         return (
//           itemDate.getDate() === selected.getDate() &&
//           itemDate.getMonth() === selected.getMonth() &&
//           itemDate.getFullYear() === selected.getFullYear()
//         );
//       });
//     }

//     setFilteredData(filtered);
//     setVisibleData([]);
//     setPage(1);
//   };

//   const loadMoreData = () => {
//     const startIndex = (page - 1) * ITEMS_PER_PAGE;
//     const endIndex = startIndex + ITEMS_PER_PAGE;
//     const newVisibleData = filteredData.slice(startIndex, endIndex);
//     setVisibleData((prevData) => [...prevData, ...newVisibleData]);
//     setPage((prevPage) => prevPage + 1);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     filterData();
//   };

//   const processData = (data) => {
//     const labels = data.map((item) => item.rsp);
//     const values = data.map((item) => item.grAmt);

//     setBarChartData({
//       labels,
//       datasets: [
//         {
//           label: 'Sales Quantity',
//           data: values,
//           backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         },
//       ],
//     });

//     setPieChartData({
//       labels,
//       datasets: [
//         {
//           label: 'Sales Quantity',
//           data: values,
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.6)',
//             'rgba(54, 162, 235, 0.6)',
//             'rgba(255, 206, 86, 0.6)',
//             'rgba(75, 192, 192, 0.6)',
//             'rgba(153, 102, 255, 0.6)',
//             'rgba(255, 159, 64, 0.6)',
//           ],
//         },
//       ],
//     });
//   };

//   return (
//     <div>
//       <h4 className="my-2">Sales Report</h4>

//       <div className="row">
//         <div className="col-md-6">
//           <h2>Bar Chart</h2>
//           {barChartData && barChartData.labels && barChartData.labels.length > 0 ? (
//             <Bar data={barChartData} />
//           ) : (
//             <p>Loading Bar Chart...</p>
//           )}
//         </div>
//         <div className="col-md-6">
//           <h2>Pie Chart</h2>
//           {pieChartData && pieChartData.labels && pieChartData.labels.length > 0 ? (
//             <Pie data={pieChartData} />
//           ) : (
//             <p>Loading Pie Chart...</p>
//           )}
//         </div>
//       </div>

//       <div className="row">
//         <div className="d-flex justify-content-between">
//           <Form.Group className="mb-3" controlId="formBasicDate">
//             <Form.Label>Select Date</Form.Label>
//             <Form.Control
//               type="date"
//               value={selectedDate}
//               onChange={(e) => setSelectedDate(e.target.value)}
//             />
//           </Form.Group>
//           <Form inline onSubmit={handleSearch}>
//             <Row>
//               <Col xs="auto">
//                 <Form.Control
//                   type="text"
//                   placeholder="Search"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="mr-sm-2"
//                 />
//               </Col>
//               <Col xs="auto">
//                 <Button type="submit">Submit</Button>
//               </Col>
//             </Row>
//           </Form>
//         </div>
//       </div>

//       {loading && <h4>Please wait...</h4>}
//       {error && <h4>{error}</h4>}

//       {visibleData.length > 0 && (
//         <InfiniteScroll
//           dataLength={visibleData.length}
//           next={loadMoreData}
//           hasMore={visibleData.length < filteredData.length}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//             <p style={{ textAlign: 'center' }}>
//               <b>End of Data</b>
//             </p>
//           }
//         >
//           <table className="table">
//             <thead>
//               <tr>
//                 {Object.keys(visibleData[0]).map((key) => (
//                   <th key={key}>{key}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {visibleData.map((row, index) => (
//                 <tr key={index}>
//                   {Object.values(row).map((value, valueIndex) => (
//                     <td key={valueIndex}>{value}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </InfiniteScroll>
//       )}
//     </div>
//   );
// }

// export default Sales;