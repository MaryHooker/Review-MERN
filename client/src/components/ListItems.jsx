import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfItems:[],
        }
    }
    //Called when intially mounted. Call method to load data
    componentDidMount() {
        this.loadData();
    }

    //This method will fetch all the items
    loadData = async () => {
        //fetch documents from database
        let response = await fetch('/api');
        //sanity
        console.log(response);
        let json = await response.json();
        //sanity
        console.table(json);
        //place imported json in array
        this.setState({ listOfItems: json })

    }

    render() {
        return (
            <div>
                <h2>ListItems</h2>
                {
                    this.state.listOfItems.map((item)=>{
                        return(
                            <div key={item._id}>
                                <p><span>Item:</span> {item.itemName}</p>
                                <p><span>Price:</span> {item.itemPrice}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ListItems;