import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import SourceArticlesListComponent from './SourceArticlesListComponent';
import ArticleList from './ArticleList';
import {getArticlesFromServer, clearArticle} from "../store/actions";
class SourceDetailsComponent extends React.Component {
    componentDidMount() {
        this.props.getArticlesFromServer(this.props.navigation.state.params.sourceId);
    }
    render() {
        return (
            <FlatList numColumns={2} style={styles.listContainer} data={this.props.articles} keyExtractor={(article, index) => article.id} renderItem={(article) => (
                <ArticleList articleImage={article.item.urlToImage} articleHeadline={article.item.title} />
            )}/>
        );
    }
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

const mapToProps = state => {
    return {
        articles: state.news.articles
    };
};

const mapToDispatch = dispatch => {
    return {
        getArticlesFromServer: (sourceId) => dispatch(getArticlesFromServer(sourceId)),
    };
};

export default connect(mapToProps, mapToDispatch)(SourceDetailsComponent);