import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class CatgeoryList extends Component {

    state = {
        categories:[]
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        fetch(this.props.serverUrl + "/categories")
        .then(Response=>Response.json())
        .then(data => this.setState({categories:data}));
    }

    setActive = categoryName => {
        return categoryName === this.props.currentCategory;
    }

    render() {
        return(
            <div>
                <h3>{this.props.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem active={this.setActive(category.categoryName)} onClick={() => this.props.changeCategory(category)} key={category.id}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        );
    }
}