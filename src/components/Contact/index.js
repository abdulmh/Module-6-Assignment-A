import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Contact = props => {

    const post = props.post;

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Existing Contact', {post: post});
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 2}}>
                <Text style={styles.fullname} numberOfLines={1}>{post.fullname}</Text>
                <Text style={styles.email} numberOfLines={1}>{post.email}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.phone}>{post.phone}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Contact;