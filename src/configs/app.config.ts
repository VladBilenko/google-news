const appConfig = {
    news: {
        url: 'https://newsapi.org/v2/everything',
        sources: 'bbc-news',
        apiKey: 'fdce9bcf29c24967847221f0f58cd666',
        sortBy: 'publishedAt',
        pageStart: 1,
        startPageSize: 10,
        uploadingPageStart: 12 / 2,
        uploadingPageSize: 2
    }
};

export default appConfig;