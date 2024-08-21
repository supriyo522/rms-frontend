// import React from 'react';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// // import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
// // import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';

// const data = [
//     {
//       name: 'April',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'May',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'June',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'July',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'August',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Sept',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Oct',
//       uv: 3490,
//       pv: 4300,
//       amt: 2200,
//     },
//     {
//       name: 'Nov',
//       uv: 3490,
//       pv: 4100,
//       amt: 2100,
//     },
//     {
//       name: 'Dec',
//       uv: 3490,
//       pv: 4500,
//       amt: 2300,
//     },
//   ];
// function ManagerReport() {
//   return (
//     <div>
//     <h4 className='my-2'>Manager Report</h4>
//       <ResponsiveContainer width="100%" aspect={3}>
//     <BarChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{
//         top: 5,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
//       <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
//     </BarChart>
//   </ResponsiveContainer>
  
//   <div className="section mt-4">
// <h4 className='text-info'>Select  Division</h4>
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />&nbsp;Men's&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />&nbsp;Women's&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />&nbsp;Kid's&nbsp;&nbsp;
// </div>
// <div className="mt-3 department">
// <h4 className='text-info'>Select Sections</h4>
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />&nbsp;cloths&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />&nbsp;home Decor&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />&nbsp;Leather&nbsp;&nbsp;
// </div>
// <div className="my-3 Items">
// <h4 className='text-info'>Select Department</h4>
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />&nbsp;Belt&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />&nbsp;Purse&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />&nbsp;Jeans&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />&nbsp;T-shirt&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />&nbsp;Kurta&nbsp;&nbsp;
// </div>
// <div className="my-3 Items">
// <h4 className='text-info'>Select Categories</h4>
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />&nbsp;CatG-1&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />&nbsp;CatG-2&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />&nbsp;CatG-3&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />&nbsp;CatG-4&nbsp;&nbsp;
// <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />&nbsp;CatG-5&nbsp;&nbsp;
// </div>
// <div className='d-flex justify-content-between'>

//         <Form.Group className="mb-3" controlId="formBasicbying">
//                     Select Date
//                     <Form.Control type="date" placeholder="Order Date" />
//          </Form.Group>


// {/* <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Select Month
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">January</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">February</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">March</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">April</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">May</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">June </Dropdown.Item>
//     <Dropdown.Item href="#/action-3">July</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">August</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">September</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">October</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">November</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">December</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown> */}
// <Form inline>
//           <Row>
//             <Col xs="auto">
//               <Form.Control
//                 type="text"
//                 placeholder="Search"
//                 className=" mr-sm-2"
//               />
//             </Col>
//             <Col xs="auto">
//               <Button type="submit">Submit</Button>
//             </Col>
//           </Row>
//         </Form>
// </div>
// <table class="table">
// <thead class="thead-dark">
// <tr>
//   <th scope="col">#</th>
//   <th scope="col">Store</th>
//   <th scope="col">Division</th>
//   <th scope="col">Section</th>
//   <th scope="col">Department</th>
//   <th scope="col">Target Amount</th>
//   {/* <th scope="col">Sale Quantity</th> */}
//   <th scope="col">Target Achieve</th>
  
//   <th scope="col">  Foot Fall</th>
  

//   {/* <th scope="col">Item Number</th> */}
//   {/* <th scope="col">Re-order Point </th> */}
//   {/* <th scope="col">Fare </th>
//   <th scope="col">type</th> */}



// </tr>
// </thead>
// <tbody>
// <tr>
//   <td>1</td>
//   <td>Citimart</td>
//   <td className='text-center'>---</td>
//   <td className='text-center'>---</td>
//   <td>Leather</td>
//   <td>12000</td>
//   {/* <td>234</td> */}
//   <td>10000</td>
//   <td>466</td>
//   {/* <td>Jeans</td> */}
//   {/* <td>700086</td> */}
//   {/* <td>240</td> */}
//   {/* <td>Manager</td> */}
// {/* 
//   <td>
//     <button className='btn btn-info p-1 m-0'><i class="fa fa-caret-square-o-down" aria-hidden="true"></i>&nbsp;vender Details  </button>
//   </td> */}

// </tr>
// <tr>
//   <td>2</td>
//   <td>Citimart</td>
//   <td className='text-center'>---</td>
//   <td className='text-center'>---</td>
  
//   <td>Jeans</td>
//   <td>4110</td>
//   {/* <td>234</td> */}
//   <td>4000</td>
//   <td>643</td>
//   {/* <td>Belt</td> */}
//   {/* <td>700087</td> */}
//   {/* <td>John</td>
//   <td>390</td> */}
  

//   {/* <td>
//     <button className='btn btn-info p-1 m-0'><i class="fa fa-caret-square-o-down" aria-hidden="true"></i>&nbsp;vendor Details </button>
//     </td> */}

// </tr>
// <tr>
//   <td>3</td>
//   <td>Citimart</td>
//   <td className='text-center'>---</td>
//   <td className='text-center'>---</td>
  
//   <td>Kurta</td>
//   <td>56700</td>
//   {/* <td>234</td> */}
//   <td>20000</td>
//   <td>456</td>
 
//   {/* <td>700088</td> */}
  

//   {/* <td>John</td>
//   <td>870</td> */}
 

//   {/* <td>
//     <button className='btn btn-info p-1 m-0'><i class="fa fa-caret-square-o-down" aria-hidden="true"></i>&nbsp;vender Details </button>
//   </td> */}

// </tr>
// <tr>
//   <td>4</td>
//   <td>Citimart</td>
//   <td className='text-center'>---</td>
//   <td className='text-center'>---</td>

 
  
//   <td>T-shirt</td>
//   <td>45700</td>
//   {/* <td>234</td> */}
//   <td>6000</td>
//   <td>123</td>
  
//   {/* <td>700089</td> */}
  
  
//   {/* <td>akash</td>
//   <td>740</td> */}
  

//   {/* <td>
//     <button className='btn btn-info p-1 m-0 col'><i class="fa fa-caret-square-o-down" aria-hidden="true"></i>&nbsp;vendor Details </button>
//   </td> */}

// </tr>
// </tbody>
// </table>

//   </div>
//   )
// }

// export default ManagerReport



import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const ITEMS_PER_PAGE = 50; // Adjust this value based on your requirements

function Manager() {
  const [data, setData] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [visibleData, setVisibleData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      loadMoreData();
    }
  }, [data]);

  const fetchInitialData = async () => {
    try {
      const response = await axios.get('https://rms-backend-1218.onrender.com/api/manager-reports');
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

  const getFilteredData = () => {
    return data.map((row) => {
      const filteredRow = {};
      Object.keys(row).forEach((key) => {
        if (selectedColumns[key]) {
          filteredRow[key] = row[key];
        }
      });
      return filteredRow;
    });
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
      await axios.post('https://rms-backend-1218.onrender.com/api/manager-reports', { data: filteredData });
      alert('Data saved successfully!');
    } catch (error) {
      alert('Error saving data');
      console.error(error);
    }
  };

  return (
    <div>
      <h4 className='mt-3'>Manager report</h4>
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
          <Form.Group className="mb-3" controlId="formBasicBuying">
            Select Date
            <Form.Control type="date" placeholder="Order Date" />
          </Form.Group>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
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

export default Manager;


