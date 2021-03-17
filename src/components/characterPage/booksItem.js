import React, {Component} from 'react';
import gotService from '../../Services/gotService';
import ItemDetails, {Field} from '../itemDetails';

export default class BooksItem extends Component {

    gotService = new gotService();

    render() {
        return (
            <ItemDetails 
                itemId={this.props.id}
                getItem={this.gotService.getBook}>
                    <Field field='numberOfPages' label='Pages'/>
                    <Field field='publiser' label='Publiser'/>
                    <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}