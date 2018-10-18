import * as React from 'react';
import {Component} from 'react';
import {Provider} from 'mobx-react';
import stores from '../../stores';
import ArticlesContainer from '../articles/articles.container';

export class AppContainer extends Component<{}, {}> {
    render() {
        return (
            <Provider {...stores}>
                <ArticlesContainer />
            </Provider>
        );
    }
}
