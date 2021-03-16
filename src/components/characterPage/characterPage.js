import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../Services/gotService';
import RowBlock from '../rowBlock';

export default class CharacterPage extends Component {

    gotService = new gotService();

    state = {
        selectedChar: 130,
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
            selectedChar : id
        })
    }

    render() {

        if (this.state.error) {
            return (<ErrorMessage/>)
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => `${item.name} (${item.gender})`}/>
        )

        const charDetails = (
            <CharDetails 
                itemId={this.state.selectedChar}
                getItem={this.gotService.getCharacter}>
                    <Field field='gender' label='Gender'/>
                    <Field field='born' label='Born'/>
                    <Field field='died' label='Died'/>
                    <Field field='culture' label='Culture'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}