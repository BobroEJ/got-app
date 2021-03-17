import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BookPage, HousePage, BooksItem} from '../characterPage';
import gotService from '../../Services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';


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
            <Router>
                <div className='App'> 
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
                        <Route path='/characters' component={CharacterPage}/>                        
                        <Route path='/houses' component={HousePage}/>
                        <Route path='/books' exact component={BookPage}/>
                        <Route path='/books/:id' render={
                            (match) => {
                                const {id} = match.match.params;
                                return <BooksItem id={id}/>
                            }
                        }/>
                    </Container>
                </div>
            </Router>
        );
    }
};

export default App;