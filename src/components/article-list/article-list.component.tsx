import * as React from 'react';
import {inject, observer} from 'mobx-react';
import newsService from '../../services/news.service';
import ArticleItemComponent from '../article-item/article-item.component';
import {XhrStatusEnum} from '../../enums/xhrStatus.enum';
import LoaderComponent from '../loader/loader.component';

// tslint:disable:no-console

@inject('NewsStore')
@observer
class ArticleListComponent extends React.Component<any> {

    componentDidMount() {
        newsService.getFirstArticles();
    }

    getMoreNews = () => {
        newsService.getNextArticles();
    };

    render() {
        const xhrStatusTypes = XhrStatusEnum;

        const {items, xhrStatus} = this.props.NewsStore;

        return (
            <>
                {items.map(
                    (item: any, index: number) => <ArticleItemComponent key={index.toString()} config={item}/>)}
                {xhrStatus === xhrStatusTypes.Loading ? <LoaderComponent/> : null}
                {xhrStatus === xhrStatusTypes.Executed ?
                    <button className='main-btn' onClick={this.getMoreNews}>Get more</button> : null}
            </>
        );
    }
}

export default ArticleListComponent;