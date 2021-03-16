import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';
export default class ItemList extends Component {

    state = {
        itemList: null,
        itemPage: 5
    }

    componentDidMount() {
        const {getData} = this.props;

        getData(this.state.itemPage)
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return (arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li 
                    key={id} 
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}>
                    {label}
                </li>
            )
        }))
    }

    render() {
        
        const {itemList} = this.state;
        if (!itemList) {
            return (<Spinner/>)
        }

        return (
            <ul className="item-list list-group">
                {this.renderItems(itemList)}
            </ul>
        );
    }
}