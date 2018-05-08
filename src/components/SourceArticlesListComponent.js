import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import ArticleList from './ArticleList';

class SourceArticlesListComponent extends React.Component {
    render() {
        return (
            <FlatList numColumns={2} style={styles.listContainer} data={this.props.articles} renderItem={(article) => (
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

export default SourceArticlesListComponent;
