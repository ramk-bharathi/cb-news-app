import {CLEAR_ARTICLES, GET_ARTICLES, GET_SOURCES} from './actions-types';

export const getSourcesFromServer = () => {
    return dispatch => fetch('https://newsapi.org/v1/sources?apiKey=91a53883772d44bf8ee89d81249d4ac7').then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            dispatch(getSources(responseJson.sources));
        }).catch(err => {
            console.log(err);
        });
}

export const getSources = (sourcesList) => {
    console.log(sourcesList);
    return {
        type: GET_SOURCES,
        sources: sourcesList
    };
};

export const getArticlesFromServer = (sourceId) => {
    return dispatch => fetch('https://newsapi.org/v1/articles?apiKey=91a53883772d44bf8ee89d81249d4ac7&source='+sourceId)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            dispatch(getArticles(responseJson.articles));
        }).catch(err => {
            console.log(err);
        });
};

export const getArticles = (articles) => {
    return {
        type: GET_ARTICLES,
        articles: articles
    };
};

export const clearArticle = () => {
    return {
        type: CLEAR_ARTICLES
    };
};