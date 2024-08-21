import React, { useState } from 'react';
import Sale from './Sale';
import Sales from './Sales';

import Reorder from './Reorder';
import Purchase from './Purchase';
import Purchase1 from './purchase1';
import SalesForcast from './SalesForcast';
import Stockatglance from './Stockatglance';
import StockVendor from './StockVendor';
import SailThrough from './SailThrough';
import CompositionFebric from './CompositionFebric';
import ManagerReport from './ManagerReport';

import Register from './Register';

const Dashboard = () => {
    const [activeButton, setActiveButton] = useState('Sales');

    const renderComponent = () => {
        switch (activeButton) {
            case 'Sales':
                return <Sales />;
            case 'Sale':
                return <Sale />;
            case 'Reorder':
                return <Reorder />;
            case 'Purchase':
                    return <Purchase />;
            case 'Purchase1':
                        return <Purchase1 />;
            case 'SalesForcast':
                return <SalesForcast />;     
            case 'Stockatglance':
                return <Stockatglance />;
            case 'StockVendor':
                return <StockVendor/>;
            case 'SailThrough':
                return <SailThrough  />;
            case 'CompositionFebric':
                return <CompositionFebric />;
            case 'ManagerReport':
                return <ManagerReport />;
            case 'Register':
                return <Register />;
   
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
                                   
                                    <button className='btn-dashboard' onClick={() => setActiveButton('Sales')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i>Sales Person Perform</button>
                                </li>

                                <li className="nav-item pt-3 nav-dashboard-ul">
                                   
                                   <button className='btn-dashboard' onClick={() => setActiveButton('Sale')}>  <i class="fa fa-home icon-dashboard" aria-hidden="true"></i>Sales Person Perform Details</button>
                               </li>

                                <li className="nav-item pt-3 nav-dashboard-ul">
                                   
                                    <button className='btn-dashboard' onClick={() => setActiveButton('Reorder')}>  <i class="fa fa-first-order icon-dashboard" aria-hidden="true"></i>&nbsp;Re-order Point</button>
                                </li>

                                <li className="nav-item pt-3 nav-dashboard-ul">
                                    
                                    <button className='btn-dashboard ' onClick={() => setActiveButton('Purchase')}> <i class="fa fa-money icon-dashboard" aria-hidden="true"></i>&nbsp;All details</button>
                                </li>
                                <li className="nav-item pt-3 nav-dashboard-ul">
                                    
                                    <button className='btn-dashboard ' onClick={() => setActiveButton('Purchase1')}> <i class="fa fa-money icon-dashboard" aria-hidden="true"></i>&nbsp;Detail from sheet</button>
                                </li>
                                <li className="nav-item pt-3 nav-dashboard-ul">
                                    
                                    <button className='btn-dashboard' onClick={() => setActiveButton('SalesForcast')}><i class="fa fa-building-o icon-dashboard" aria-hidden="true"></i>&nbsp;Sale details</button>
                                </li>
                                <li className="nav-item pt-3 nav-dashboard-ul">
                                 
                                    <button className='btn-dashboard' onClick={() => setActiveButton('Stockatglance')}>    <i class="fa fa-hand-spock-o icon-dashboard" aria-hidden="true"></i>&nbsp;Stock At Glance</button>
                                </li>
                                <li className="nav-item pt-3 nav-dashboard-ul">
                                   
                                    <button className='btn-dashboard' onClick={() => setActiveButton('StockVendor')}> <i class="fa fa-id-card-o icon-dashboard" aria-hidden="true"></i>&nbsp;Vendor-Wise Stock</button>
                                </li>
                                <li className="nav-item pt-3 nav-dashboard-ul">
                                    
                                    <button className='btn-dashboard' onClick={() => setActiveButton('SailThrough')}><i class="fa fa-line-chart icon-dashboard" aria-hidden="true"></i>&nbsp;Sell Through</button>
                                </li>
                                <li className="nav-item pt-3  nav-dashboard-ul">
                                    
                                    <button className='btn-dashboard' onClick={() => setActiveButton('CompositionFebric')}><i class="fa fa-delicious icon-dashboard" aria-hidden="true"></i>&nbsp;Composition Fabric</button>
                                </li>
                                <li className="nav-item py-3 pb-5 nav-dashboard-ul">
                                    
                                    <button className='btn-dashboard' onClick={() => setActiveButton('ManagerReport')}><i class="fa fa-pencil-square-o icon-dashboard" aria-hidden="true"></i>&nbsp;Manager Report</button>
                                </li>
                            
                                <li className="nav-item py-3 pb-5 nav-dashboard-ul">
                                    
                                    <button className='btn-dashboard' onClick={() => setActiveButton('Register')}><i class="fa fa-pencil-square-o icon-dashboard" aria-hidden="true"></i>&nbsp;+ADD Details</button>
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

export default Dashboard;