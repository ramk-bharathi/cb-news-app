import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import NewsSourcesListComponent from './NewsSourcesListComponent';
import {connect} from 'react-redux';
import {getSourcesFromServer, getArticlesFromServer, clearArticle} from '../store/actions';

class HomeComponent extends React.Component {
    componentDidMount() {
        this.props.getSourcesFromServer();
    }

    getArticlesForSource = (sourceId) => {
        this.props.clearArticles();
        this.props.navigation.navigate('SourceArticlesScreen', {sourceId: sourceId});
    };

    render() {
        return (
            <View style={styles.container}>
                <NewsSourcesListComponent sources={this.props.sources} sourceSelected={this.getArticlesForSource}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    }
});

const mapToProps = (state) => {
    return {
        sources: state.news.sources,
        articles: state.news.articles
    }
};

const mapToDispatch = (dispatch) => {
    return {
        getSourcesFromServer: () => dispatch(getSourcesFromServer()),
        getArticlesFromServer: (sourceId) => dispatch(getArticlesFromServer(sourceId)),
        clearArticles: () => dispatch(clearArticle())
    };
};

export default connect(mapToProps, mapToDispatch)(HomeComponent);