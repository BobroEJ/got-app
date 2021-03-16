import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../../Services/gotService';


class App extends Component {

    gotService = new gotService();

    state = {
        showRandomChar: true
    }

    toggleRandomChar = () => {
            this.setState({
                showRandomChar: !this.state.showRandomChar
            })
        }

    render() {
        
        if (this.state.error) {
            return (<ErrorMessage/>)
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {this.state.showRandomChar ? <RandomChar/> : null}
                            <button type='button' 
                                onClick={this.toggleRandomChar} 
                                style={{margin:'0px auto 30px', padding:'10px', backgroundColor:'#037', color: 'white',
                                        borderRadius:'5px'}}
                                >Toggle Random Character</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllBooks}
                            renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails itemId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllHouses}
                            renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails itemId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

export default App;