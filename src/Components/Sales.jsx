// import React from 'react';
// // import { Chart } from 'react-charts';
// import { PieChart } from 'react-minimal-pie-chart';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// // import Dropdown from 'react-bootstrap/Dropdown';


//   const data = [
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
//   function Sales() {
//   return (
//     <div>
//     <h4 className='my-2'>Sales person Report</h4>
      

// <div>

 
//      {/* const lineChart = (
//      A react-chart hyper-responsively and continuously fills the available
//     space of its parent element automatically */}
//     <div className='my-5'
//       style={{
//         width: '100%',
//         height: '100%'
//       }}
//     >
//       {/* <div className="container my-5">
//     <div className="row">
//       <div className="col-md-4">
//         <div className="card shadow">
//           <div className="card-body">
//            <div className="d-flex justify-content-between">
//            <h5>$ 100</h5>
//            <h5 className='text-success'>+3.23%</h5>
//            </div>
//             <h2>Ordered</h2>
//             <a href="">See details</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="card shadow">
//           <div className="card-body">
//           <div className="d-flex justify-content-between">
//            <h5>$ 100</h5>
//            <h5 className='text-danger'>-2.23%</h5>
//            </div>
            
//             <h2>Sales</h2>
//             <a href="">See details</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="card shadow">
//           <div className="card-body">
//           <div className="d-flex justify-content-between">
//            <h5>$ 100</h5>
//            <h5 className='text-warning'>-0.23%</h5>
//            </div>
//             <h2>Stock</h2>
//             <a href="">See details</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div> */}
//   <div className="row ">
//   <div className="col-md-6">
//   <ResponsiveContainer width="100%" aspect={2}>
//     <BarChart
//       width={500}
//       height={500}
//       data={data}
//       // margin={{
//       //   top: 5,
//       //   right: 30,
//       //   left: 20,
//       //   bottom: 5,
//       // }}
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
//   {/* <Chart data={data} axes={axes} /> */}
// </div>
// <div className="col-md-6 piechart pb-5">
// <PieChart
//   data={[
//     { title: 'One', value: 10, color: '#E38627' },
//     { title: 'Two', value: 15, color: '#C13C37' },
//     { title: 'Three', value: 20, color: '#0000FF' },
//     { title: 'Four', value: 20, color: '#008000' },
//   ]}
// />;
// </div>

//   </div> 
//     </div>
//     <div className="row ">
//     <div className="d-flex justify-content-between ">
//     <Form.Group className="mb-3" controlId="formBasicbying">
//                     Select Date
//                     <Form.Control type="date" placeholder="Order Date" />
//     </Form.Group>

// {/* <Dropdown>
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
//     </div>
//     <div className="row "> 
//   <table class="table my-5 py-5 table-sale-performence">
//   <thead class="thead-dark py-5">
//     <tr>
//       <th scope="col">#</th>
//       {/* <th scope="col">Serial Number</th> */}
//       <th scope="col">Sales Man Name</th>
//       <th scope="col">Code</th>
//       <th scope="col">Lines</th>
//       <th scope="col">Sell Quantity </th>
//       <th scope="col">Net Amount</th>
//       <th scope="col">Final Score</th>



//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       {/* <td className='text-center'>---</td> */}
//       <td>Narayan</td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>120</td>
//       <td>10000</td>
//       <td>133</td>
    
//     </tr>
//     <tr>
//       <td>2</td>
//       {/* <td className='text-center'>---</td> */}
//       <td>ABC </td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>111</td>
//       <td>40000</td>
//       <td>377</td>
     
//     </tr>
//     <tr>
//       <td>3</td>
//       {/* <td className='text-center'>---</td> */}
//       <td>Rediff</td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>567</td>
//       <td>20000</td>
//       <td>270</td>
     
//     </tr>
//     <tr>
//       <td>4</td>
//       {/* <td className='text-center'>---</td> */}
//       <td>Laxmi </td>
//       <td className='text-center'>---</td>
//       <td className='text-center'>---</td>
//       <td>457</td>
//       <td>6000</td>
//       <td>246</td>

//     </tr>
//   </tbody>
// </table>
// </div>
// </div>
//     </div>
//   )
// }
// export default Sales




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
//       const response = await axios.get('http://localhost:5000/api/getSalePersonPerform');
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
//     const labels = data.map((item) => item.salesManName);
//     const values = data.map((item) => item.sellQuantity);

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
//           {/* <Form.Group className="mb-3" controlId="formBasicDate">
//             <Form.Label>Select Date</Form.Label>
//             <Form.Control
//               type="date"
//               value={selectedDate}
//               onChange={(e) => setSelectedDate(e.target.value)}
//             />
//           </Form.Group> */}
//           <Form inline onSubmit={handleSearch} >
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
//               {/* <Col xs="auto">
//                 <Button type="submit">Submit</Button>
//               </Col> */}
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


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ITEMS_PER_PAGE = 50;

function Sales() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [barChartData, setBarChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filteredData.length > 0) {
      loadMoreData();
      processData(filteredData);
    }
  }, [filteredData]);

  useEffect(() => {
    filterData();
  }, [data, searchTerm, selectedDate]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://rms-backend-1218.onrender.com/api/getSalePersonPerform');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
      setLoading(false);
    }
  };

  const filterData = () => {
    let filtered = data;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedDate) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.billDate); // Assuming there's a 'date' field in the data
        const selected = new Date(selectedDate);
        return (
          itemDate.getDate() === selected.getDate() &&
          itemDate.getMonth() === selected.getMonth() &&
          itemDate.getFullYear() === selected.getFullYear()
        );
      });
    }

    setFilteredData(filtered);
    setVisibleData([]);
    setPage(1);
  };

  const loadMoreData = () => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newVisibleData = filteredData.slice(startIndex, endIndex);
    setVisibleData((prevData) => [...prevData, ...newVisibleData]);
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterData();
  };

  const processData = (data) => {
    const labels = data.map((item) => item.salesManName);
    const values = data.map((item) => item.sellQuantity);

    setBarChartData({
      labels,
      datasets: [
        {
          label: 'Sales Quantity',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    });

    setPieChartData({
      labels,
      datasets: [
        {
          label: 'Sales Quantity',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
        },
      ],
    });
  };

  return (
    <div>
      <h4 className="my-2">Sales Report</h4>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h2>Sales Report Chart</h2>
          {barChartData && barChartData.labels && barChartData.labels.length > 0 ? (
            <Bar data={barChartData} />
          ) : (
            <p>Loading Bar Chart...</p>
          )}
        </div>
        <div className="col-md-4 col-sm-12">
          <h2>Sales Person Chart</h2>
          {pieChartData && pieChartData.labels && pieChartData.labels.length > 0 ? (
            <Pie data={pieChartData} />
          ) : (
            <p>Loading Pie Chart...</p>
          )}
        </div>
      </div>

      <div className="row mt-3">
        <Form inline onSubmit={handleSearch} className="d-flex justify-content-end">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mr-sm-2"
              />
            </Col>
            {/* <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col> */}
          </Row>
        </Form>
      </div>

      {loading && <h4>Please wait...</h4>}
      {error && <h4>{error}</h4>}

      {visibleData.length > 0 && (
        <InfiniteScroll
          dataLength={visibleData.length}
          next={loadMoreData}
          hasMore={visibleData.length < filteredData.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>End of Data</b>
            </p>
          }
        >
          <table className="table">
            <thead>
              <tr>
                {Object.keys(visibleData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, valueIndex) => (
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

export default Sales;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Sales() {
//   const [salesData, setSalesData] = useState([]);

//   useEffect(() => {
//     fetchSalesData();
//   }, []);

//   const fetchSalesData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/getSales');
//       setSalesData(response.data);
//     } catch (error) {
//       console.error('Error fetching sales data:', error);
//     }
//   };

//   return (
//     <div>
//       <h4 className='my-2'>Sales Person Report</h4>
//       <div>
//         <table className="table my-5 py-5 table-sale-performance">
//           <thead className="thead-dark py-5">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Sales Man Name</th>
//               <th scope="col">Code</th>
//               <th scope="col">Lines</th>
//               <th scope="col">Sell Quantity</th>
//               <th scope="col">Net Amount</th>
//               <th scope="col">Final Score</th>
//             </tr>
//           </thead>
//           <tbody>
//             {salesData.map((item, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{item.salesManName}</td>
//                 <td>---</td>
//                 <td>---</td>
//                 <td>{item.sellQuantity}</td>
//                 <td>{item.netAmt}</td>
//                 <td>{item.finalScore}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Sales;
