import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import SourceArticlesListComponent from './SourceArticlesListComponent';
import {getArticlesFromServer, clearArticle} from "../store/actions";
class SourceDetailsComponent extends React.Component {
    componentDidMount() {
        this.props.getArticlesFromServer(this.props.navigation.state.params.sourceId);
    }
    render() {
        return (
            <SourceArticlesListComponent articles={this.props.articles}/>
        );
    }
};

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