// import React from 'react';
import React, { useState } from 'react';
import AddFabric from './AddFabric';
import AddSalesCast from './AddSalesCast';
// import AddSalesPerson from './AddSalesPerson';
import AddVendor from './AddVendor';
import AddDivison from './AddDivison';
import AddSection from './AddSection';
import AddCategory from './AddCategory';
import AddDepartMent from './AddDepartMent'
import AddSaleThrough from './AddSaleThrough'
import AddReorder from './AddReorder';

const InputData = () => {
    const [activeButton, setActiveButton] = useState('AddSalesPerson');

    const renderComponent = () => {
        switch (activeButton) {
            // case 'AddSalesPerson':
            //     return <AddSalesPerson />

            case 'AddSalesCast':
                return <AddSalesCast />
            case 'AddSaleThrough':
                return <AddSaleThrough/>
            case 'AddReorder':
                return <AddReorder/>

            case 'AddFabric':
                return < AddFabric />

            case 'AddVendor':
                return <AddVendor />
            case 'AddDivison':
                return <AddDivison />
            case 'AddSection':
                return <AddSection />
            case 'AddDepartMent':
                return <AddDepartMent />
            case 'AddCategory':
                return <AddCategory />

            default:
                return null;
        }
    };


    return (

        <div>
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block  sidebar">
                        <div className="position-sticky">
                            <ul className="nav flex-column">
                               <li className="nav-item pt-3 nav-dashboard-ul">
                                     <button className='btn-dashboard' onClick={() => setActiveButton('AddDivison')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i> +Add Divison</button>
                               </li>
                               <li className="nav-item pt-3 nav-dashboard-ul">
                                     <button className='btn-dashboard' onClick={() => setActiveButton('AddSection')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i> +Add Section</button>
                               </li>
                               <li className="nav-item pt-3 nav-dashboard-ul">
                                     <button className='btn-dashboard' onClick={() => setActiveButton('AddDepartMent')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i> +Add Department </button>
                               </li>
                               <li className="nav-item pt-3 nav-dashboard-ul">
                                     <button className='btn-dashboard' onClick={() => setActiveButton('AddCategory')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i> +Add Category</button>
                               </li>
                               <li className="nav-item pt-3 nav-dashboard-ul">
                                     {/* <button className='btn-dashboard' onClick={() => setActiveButton('AddSalesPerson')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i> +Add Sales Person</button> */}
                               </li>
                                <li className="nav-item pt-3 nav-dashboard-ul">
                                    <button className='btn-dashboard' onClick={() => setActiveButton('AddSalesCast')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i>+Add Vendor stock</button>
                                </li>

                                <li className="nav-item pt-3 nav-dashboard-ul">
                                    <button className='btn-dashboard' onClick={() => setActiveButton('AddSaleThrough')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i>+Add Sale Through</button>
                                </li>

                                <li className="nav-item pt-3 nav-dashboard-ul">
                                    <button className='btn-dashboard' onClick={() => setActiveButton('AddReorder')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i>+Add Re-order</button>
                                </li>

                                <li className="nav-item pt-3 nav-dashboard-ul">
                                    <button className='btn-dashboard' onClick={() => setActiveButton('AddFabric')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i>+Add Fabric</button>
                                </li>

                                <li className="nav-item pt-3 nav-dashboard-ul">
                                    <button className='btn-dashboard' onClick={() => setActiveButton('AddVendor')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i>+Add Manager</button>
                                </li>


                            </ul>
                        </div>
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div>
                            {renderComponent()}
                        </div>
                    </main>
                </div>
            </div>
        </div>

    );
};

export default InputData





