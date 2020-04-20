import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import ListItems from './ListItems';
import AddItem from './AddItem';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';
import ViewItem from './ViewItem';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <Router>
                <h1>AppContainer</h1>
                <Link to='/'>Home Page</Link>
                <Route exact path="/" component={ListItems}/>
                <Route exact path="/:item_name" component={ViewItem}/>

                {/* 
                <AddItem/>
                <EditItem/>
                <DeleteItem/>
                */}
                </Router>
            </div>
         );
    }
}
 
export default AppContainer;