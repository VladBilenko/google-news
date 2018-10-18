import * as React from 'react';
import ArticleLinkComponent from '../article-link/article-link.component';
import './article-item.scss';
import {IArticleItemModel} from '../../models/article-item.model';

export interface IArticleItemConfig {
    config: IArticleItemModel
}

class ArticleItemComponent extends React.Component<IArticleItemConfig> {
    render() {
        const {config} = this.props;
        const {url} = config;
        const linkText = config.author ? config.author : config.url;
        const content = (config.content && config.content.length > 100)
            ? `${config.content.substr(0, 99)}...` : config.content;
        const publishedDate = config.publishedAt.replace(/T/i, ' ').replace(/Z/i, ' ');

        return (
            <div className='article-item__container'>
                <span className='article-item__date'>{publishedDate}</span>
                <ArticleLinkComponent url={url}>
                    <img className='article-item__image' srcSet={config.urlToImage} alt={config.title}/>
                </ArticleLinkComponent>
                <ArticleLinkComponent url={url}>
                    <h2 className='article-item__title'>{config.title}</h2>
                </ArticleLinkComponent>
                <ArticleLinkComponent url={url}>
                    <p className='article-item__text'>{content}</p>
                </ArticleLinkComponent>
                <ArticleLinkComponent url={url}>
                    <span className='article-item__link'>{linkText}</span>
                </ArticleLinkComponent>
            </div>
        );
    }
}

export default ArticleItemComponent;