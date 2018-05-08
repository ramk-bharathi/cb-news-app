import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = (width) / 2;

const ArticleList = (props) => (
    <TouchableOpacity>
        <View style={styles.itemContainer}>
            <Image source={{uri: props.articleImage}} style={styles.articleImage} resizeMode='cover'/>
            <Text style={styles.headlineText}>{props.articleHeadline}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    itemContainer: {
        width: itemWidth,
        margin: 5
    },
    articleImage: {
        width: '100%',
        height: 200
    },
    headlineText: {
        fontSize: 12,
        padding: 5
    }
});

export default ArticleList;