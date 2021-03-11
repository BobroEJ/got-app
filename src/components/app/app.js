import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


class App extends Component {

    state = {
        randomChar: true
    }

    toggleRandomChar = () => {
            this.setState({
                randomChar: !this.state.randomChar
            })
        }

    render() {
        

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {this.state.randomChar ? <RandomChar/> : null}
                            <button type='button' 
                                onClick={this.toggleRandomChar} 
                                style={{margin:'0px auto 30px', padding:'10px', 'background-color':'#037', color: 'white',
                                        'border-radius':'5px'}}
                                >Toggle Random Char</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

export default App;