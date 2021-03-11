import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';


class App extends Component {

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
                </Container>
            </>
        );
    }
};

export default App;