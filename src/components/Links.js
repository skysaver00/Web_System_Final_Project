import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './links.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

class Links extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Link to="/home" id ="toolbar">
                        사용법
                    </Link>
                    <Link to="/seats/list" id ="toolbar">
                        자리 현황
                    </Link>
                    <Link to="/seats/create"id ="toolbar">
                        자리 예약하기
                    </Link>
                </React.Fragment>
            </div>
        )
    }
}

export default Links