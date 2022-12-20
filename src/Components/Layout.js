
import React, {Component} from 'react'
import Footer from './Footer';
import Home from './Home';

class Layout extends Component {
    render() {
        return (
            <div>
               <Home></Home>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}
export default Layout;