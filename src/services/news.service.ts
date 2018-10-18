import axios from 'axios';
import appConfig from '../configs/app.config';
import stores from '../stores';
import {XhrStatusEnum} from '../enums/xhrStatus.enum';

class NewsService {
    newsConfig = appConfig.news;
    commonParams = {
        sources: this.newsConfig.sources,
        apiKey: this.newsConfig.apiKey,
        sortBy: this.newsConfig.sortBy
    };
    uploadingStartPage = this.newsConfig.uploadingPageStart;

    getFirstArticles() {
        this.startLoading();
        axios.get(this.newsConfig.url, {
            params: {
                ...this.commonParams,
                pageSize: this.newsConfig.startPageSize,
                page: this.newsConfig.pageStart
            }
        })
            .then(res => {
                stores.NewsStore.update(res.data.articles);
                this.endLoading();
            });
    }

    getNextArticles() {
        this.startLoading();
        axios.get(this.newsConfig.url, {
            params: {
                ...this.commonParams,
                pageSize: this.newsConfig.uploadingPageSize,
                page: this.uploadingStartPage
            }
        })
            .then(res => {
                stores.NewsStore.update(res.data.articles);
                this.endLoading();
                this.uploadingStartPage++;
            });
    }

    private startLoading() {
        stores.NewsStore.updateStatus(XhrStatusEnum.Loading);
    }

    private endLoading() {
        stores.NewsStore.updateStatus(XhrStatusEnum.Executed);
    }

}

const newsService = new NewsService();
export default newsService;