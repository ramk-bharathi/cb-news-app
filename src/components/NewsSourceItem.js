import React from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';

const NewsSourceItem = (props) => (
    <TouchableOpacity onPress={props.sourcePressed}>
        <View style={styles.container}>
            <Text style={styles.sourceName}>{props.newsHeadline}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 5
    },
    sourceName: {
        fontSize: 24
    }
});

export default NewsSourceItem;