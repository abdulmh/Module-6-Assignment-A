import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Group from '../../components/Group';
import styles from './styles';
// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

// use hook to create database
const myContactsDB = openDatabase({name: 'MyContacts.db'});
const groupsTableName = 'groups';

const GroupsScreen = props => {

  const navigation = useNavigation();

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      // declare an empty array that will store the results of the
      // SELECT
      let results = [];
      // declare a transation that will execute the SELECT
      myContactsDB.transaction(txn => {
        // execute SELECT
        txn.executeSql(
          `SELECT * FROM ${groupsTableName}`,
          [],
          // callback function to handle the results from the
          // SELECT s
          (_, res) => {
            // get number of rows of data selected
            let len = res.rows.length;
            console.log('Length of groups ' + len);
            // if more than one row was returned
            if (len > 0){
              // loop through the rows
              for (let i = 0; i < len; i++){
                // push a row of data at a time onto the
                // results array
                let item = res.rows.item(i);
                results.push({
                  id: item.id,
                  name: item.name,
                  description: item.description,
                });
              }
              // assign results array to lists state variable
              setGroups(results);
            } else {
              // if no rows of data were returned,
              // set lists state variable to an empty array
              setGroups([]);
            }
          },
          error => {
            console.log('Error getting groups ' + error.message);
          },
        )
      });
    });
    return listener;
  });

  return (
    <View style={styles.container}>
      <View>
        <FlatList 
          data={groups}
          renderItem={({item}) => <Group post={item} />}
          keyExtractor={item => item.id}
        />
      </View>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Add Group')}
                >
                <Text style={styles.buttonText}>Add Group</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default GroupsScreen;