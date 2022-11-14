import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Group = props => {

    const post = props.post;

    const onPress = () => {
        console.log(post.name); 
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 2}}>
                <Text style={styles.name} numberOfLines={1}>{post.name}</Text>
                <Text style={styles.description} numberOfLines={1}>{post.description}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Group;