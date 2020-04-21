import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class ViewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                itemName:'',
                itemDescr:'',
                ItemPrice:0,
            },
        }
    }

    //When component mounts fetch the details
    componentDidMount() {
        this.loadData();
    }

    //This method will fetch all items
    loadData = async () => {
        //fetch documents from database
        let response = await fetch(`/api/${this.props.match.params.item_name}`);
        //sanity
        console.log(response);
        let json = await response.json();
        //sanity
        console.table(json);
        //place imported json in array
        this.setState({ item: json })//should be one item

    }

    deleteItem = (event) => {
        const item_name = this.state.item.itemName;
        if (window.confirm(`Are you sure you want to delete ${item_name}?`)) {
            //Send your delete request through fetch/specify method
            fetch(`/api/${item_name}`,
            {
                method: 'delete'
            });
            console.log(`Deleted it!`);
            //redirect to root site
            window.location = '/';
        } else{
            console.log(`Did not delete!`);
        }

    }
    render() {
        return (
            <div>
                <h2>Item Details for {this.props.match.params.item_name}</h2>
                <p><span>Name:</span> {this.state.item.itemName}</p>
                <p><span>Description:</span> {this.state.item.itemDesc}</p>
                <p><span>Price:</span> ${this.state.item.itemPrice}</p>
                <button>Edit</button>  <button onClick={this.deleteItem}>Delete</button>
            </div>
        );
    }
}

export default ViewItem;