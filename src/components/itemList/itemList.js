import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../Services/gotService';
import Spinner from '../spinner';
export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null,
        charPage: 5
    }

    componentDidMount() {
        this.gotService.getAllCharacters(this.state.charPage)
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return (arr.map((item, i) => {
            console.log(item)
            let p = this.state.charPage;
            return (
                <li 
                    key={i+p*10-9} 
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(i+p*10-9)}>
                    {item.name}
                </li>
            )
        }))
    }

    render() {
        
        const {charList} = this.state;
        if (!charList) {
            return (<Spinner/>)
        }

        return (
            <ul className="item-list list-group">
                {this.renderItems(charList)}
            </ul>
        );
    }
}