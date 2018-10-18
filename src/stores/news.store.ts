import {action, computed, observable} from 'mobx';
import {IArticleItemModel} from '../models/article-item.model';
import {XhrStatusEnum} from '../enums/xhrStatus.enum';

class NewsStore {
    @observable
    private _items: Array<IArticleItemModel> = [];

    @observable
    private _xhrStatus: XhrStatusEnum = XhrStatusEnum.Executed;

    @action
    update = (items: Array<IArticleItemModel>) => {
        this._items = [...this._items, ...items];
    };

    @action
    updateStatus = (status: XhrStatusEnum) => {
        this._xhrStatus = status;
    };

    @computed
    get items() {
        return this._items.slice();
    };

    @computed
    get xhrStatus() {
        return this._xhrStatus;
    };
}

export default new NewsStore();