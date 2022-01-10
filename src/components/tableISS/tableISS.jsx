import React, { Component } from 'react';
import ReactTable from "react-table-6";
import { Container, Row, Col } from "react-bootstrap";
import "react-table-6/react-table.css"
import { style } from "glamor";
import "./tableISS.css"
import "bootstrap/dist/css/bootstrap.min.css";

function TableISS(props) {
   
    const data = [{
        code: 'I5SSEN11',
        title: 'Smart Devices',
        supervisor: 'Jérémie Grisolia',
        totalhours: '52,75'
    }, {
        code: '',
        title: 'Microcontrollers and Open-Source Hardware, Embedded IA (M&OSH)',
        supervisor: 'Jérémie Grisolia, Sylvaine Lohez',
        totalhours: '25'
    }, {
        code: '',
        title: 'CAD, manufacturing and integration of nano-technology sensors (AIME)',
        supervisor: 'Jérémie Grisolia',
        totalhours: '14'
    }, {
        code: '',
        title: 'Sensors introduction',
        supervisor: 'Jérémie Grisolia',
        totalhours: '11,25'
    }, {
        code: '',
        title: 'Analog electronic labs',
        supervisor: 'Jérémie Grisolia',
        totalhours: '2,5'
    }, {
        code: 'I5SSCM11',
        title: 'Communication',
        supervisor: 'Daniela Dragomirescu',
        totalhours: '64,25'
    }, {
        code: '',
        title: 'Protocols for connected objects',
        supervisor: 'Daniela Dragomirescu, Slim Abdellatif, Etienne Sicard',
        totalhours: '33,25'
    }, {
        code: '',
        title: 'Energy for connected objects  (recovery, transfert)',
        supervisor: 'Jean-Marie Dilhac',
        totalhours: '10,25'
    }, {
        code: '',
        title: 'Security for network of connected objects',
        supervisor: 'Eric Alata',
        totalhours: '10,25'
    }, {
        code: '',
        title: 'Emerging network (SDN, NGN)',
        supervisor: 'Slim Abdellatif',
        totalhours: '10,25'
    }, {
        code: 'I5SSIL11',
        title: 'Middleware & Service',
        supervisor: 'Thierry Monteil',
        totalhours: '62'
    }, {
        code: '',
        title: 'Service Oriented Architecture',
        supervisor: 'Nawal Guermouche',
        totalhours: '31'
    }, {
        code: '',
        title: 'Middleware for IoT',
        supervisor: 'Thierry Monteil',
        totalhours: '14,75'
    }, {
        code: '',
        title: 'Adaptability : cloud and  autonomic management',
        supervisor: 'Sami Yangui',
        totalhours: '16,25'
    }, {
        code: 'I5SSIF11',
        title: 'Analysis and data processing, business applications',
        supervisor: 'Nawal Guermouche',
        totalhours: '37,5'
    }, {
        code: '',
        title: 'Software Engineering',
        supervisor: 'Nawal Guermouche',
        totalhours: '6,25'
    }, {
        code: '',
        title: 'Semantic data',
        supervisor: 'Nicolas Seydoux, Nathalie Hernandez',
        totalhours: '8'
    }, {
        code: '',
        title: 'Big data',
        supervisor: 'Gilles Tredan',
        totalhours: '15'
    }, {
        code: '',
        title: 'Hackaton',
        supervisor: 'Thierry Monteil',
        totalhours: '8,25'
    }, {
        code: 'I5SSRS11',
        title: 'Project & Portfolio',
        supervisor: 'Vincent Migliore',
        totalhours: '75,75'
    }, {
        code: '',
        title: 'Innovative project',
        supervisor: 'Thierry Monteil',
        totalhours: '37,5'
    }, {
        code: '',
        title: 'Portfolio',
        supervisor: 'Vincent Migliore',
        totalhours: '8,25'
    }, {
        code: '',
        title: 'English',
        supervisor: 'Joseph Shea',
        totalhours: '10,25'
    }, {
        code: 'I5SSGE11',
        title: 'Innovation and humanity',
        supervisor: 'Hélène Hereng',
        totalhours: '77,5'
    }, {
        code: '',
        title: 'Innovation',
        supervisor: 'Eric Jolivet',
        totalhours: '17,5'
    }, {
        code: '',
        title: 'Creativity methods / TRIZ method',
        supervisor: 'Stéphane Negny',
        totalhours: '10'
    }, {
        code: '',
        title: 'Team Management / Social Acceptability',
        supervisor: 'N. Lacune, MJ Tragin',
        totalhours: '20'
    }, {
        code: '',
        title: 'Sport',
        supervisor: 'Véronique Gros, Sylvie Rossard',
        totalhours: '21,5'
    }, {
        code: '',
        title: 'Individualized Professional Development',
        supervisor: 'Thierry Dupont',
        totalhours: '8,5'
    }
    ]
    const columns = [{
        Header: 'Code',
        accessor: 'code',
        width: 150
    }, {
        Header: 'Title',
        accessor: 'title'
    }, {
        Header: 'Supervisor',
        accessor: 'supervisor'
    }, {
        Header: 'Total hours',
        accessor: 'totalhours',
        width : 150
    }]
    return (
        <div className="test">
            <ReactTable 
                style={{
                    // borderBottom: 'solid 1px white',
                    // borderTop: 'solid 1px white', 
                    // borderLeft: 'solid 1px white', 
                    // borderRight: 'solid 1px white'
                    border: 'solid 1px white'
                }}
                data={data}
                columns={columns}
                showPagination={false}
                defaultPageSize={29}
            // pageSizeOptions={[2, 4, 6]}
            />
        </div>
    )
}
export default TableISS;  