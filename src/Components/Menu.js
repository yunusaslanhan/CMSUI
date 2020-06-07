
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Menu extends React.Component {
    state = {
        menu: ""
    }

    componentDidMount() {
        axios.get(`http://localhost:52599/api/mainpages/GetGenerateMenuUi`)
            .then(res => {
                const menu = res.data;
                this.setState({ menu });
            })
    }

    render() {
        return (
    
       
            <div className="page-header navbar">

                <div className="page-header-inner">

                    <div className="page-logo">

                        <Link to="/" style={{ width: 235 }}>
                            <img src="./assets/SITE1.jpg" style={{ height: 50, width: 200, marginTop: 0, marginLeft: -20 }} alt="logo" className="logo-default" />
                        </Link>

                    </div>

                    <div className="hor-menu hidden-sm hidden-xs" style={{ marginLeft: 20 }}>

                        <ul className="nav navbar-nav" dangerouslySetInnerHTML={{ __html: this.state.menu }} />
                    </div>

                </div>
            </div>

          

        )
    }
}