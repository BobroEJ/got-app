import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
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

    onCharSelected = (id) => {
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
                    onCharSelected={this.onCharSelected}
                    getData={this.gotService.getAllCharacters}
                    renderItem={(item) => `${item.name} (${item.gender})`}/>
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}/>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}