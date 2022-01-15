import React from 'react';
import { Provider  } from 'react-redux';
import renderer from 'react-test-renderer';
import CardList from '../components/CardList';
import store from '../redux/store';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

describe('Describe',() => {
    test('shoudl match snapShot',() => {
        const tree= renderer.create(
            <Provider store={store}>
                <Router>                                           
                    <CardList />                                                  
                </Router>
            </Provider>            
        ).toJSON;        
        expect(tree).toMatchSnapshot();
    });
});
