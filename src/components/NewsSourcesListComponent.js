import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import NewsSourceItem from './NewsSourceItem';

class NewsSourcesListComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.props.sources} renderItem={(source) => (
                    <NewsSourceItem newsHeadline={source.item.name} sourcePressed={() => this.props.sourceSelected(source.item.id)}/>
                )}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});

export default NewsSourcesListComponent;