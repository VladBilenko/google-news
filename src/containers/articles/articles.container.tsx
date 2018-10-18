import * as React from 'react';
import ArticleListComponent from '../../components/article-list/article-list.component';

class ArticlesContainer extends React.Component {
    render() {
        return (
            <div className='content-wrapper'>
                <h1>Google news</h1>
                <ArticleListComponent />
            </div>
        );
    }
}

export default ArticlesContainer;