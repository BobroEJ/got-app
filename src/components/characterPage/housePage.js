import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../Services/gotService';
import RowBlock from '../rowBlock';

export default class HousePage extends Component {

    gotService = new gotService();

    state = {
        selectedHouse: 1,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse : id
        })
    }

    render() {

        if (this.state.error) {
            return (<ErrorMessage/>)
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item) => `${item.name}`}/>
        )

        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedHouse}
                getItem={this.gotService.getHouse}>
                    <Field field='region' label='Region'/>
                    <Field field='words' label='Words'/>
                    <Field field='titles' label='Titles'/>
                    <Field field='overlord' label='Overlord'/>
                    <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}