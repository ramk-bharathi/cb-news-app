import {GET_ARTICLES, GET_SOURCES, CLEAR_ARTICLES} from './actions-types';

const initialState = {
    articles: [],
    article: null,
    sources: [],
};

const newsReducers = (state = initialState, actions) => {
    switch(actions.type) {
        case GET_ARTICLES: {
            return {
                ...state,
                articles: state.articles.concat(actions.articles.map(article => {
                    return {
                        ...article,
                        key: article.url.toString()
                    };
                }))
            };
        };
        case GET_SOURCES: {
            return {
                ...state,
                sources: state.sources.concat(actions.sources.map(source => {
                    return {
                        ...source,
                        key: source.id.toString()
                    };
                }))
            };
        };
        case CLEAR_ARTICLES: {
            return {
                ...state,
                articles: []
            };
        };
        default: {
            return state;
        }
    }
};

export default newsReducers;