/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  RefreshControl,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Avatar, Button, ListItem, SpeedDial} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'react-native-paper';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useFocusEffect} from '@react-navigation/native';
import NetworkCalls from '../connectivity/Network';
import UserAvatar from 'react-native-user-avatar';
interface Props {
  navigation: any;
}

const Addcaretaker: React.FC<{navigation}> = Props => {
  const {navigation} = Props;
  const [caretakers, caretakerstate] = React.useState<any[]>([]);
  const [refresh, refeereshstate] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const fetchcaretakers = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    const res: any = await NetworkCalls.fetchCaretakers(user_id);
    if (res.status === 'failed') {
      caretakerstate([]);
      return;
    }
    caretakerstate(res.userCaretakerList);
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      fetchcaretakers();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const renderitem = ({item}) => {
    console.log(item.patientId, 'b');

    return (
      <Card
        onPress={() => {}}
        style={{
          borderRadius: 20,
          margin: 6,
          borderColor: 'lightgrey',
          elevation: 3,
          shadowColor: '#3743ab',
        }}>
        <View style={{flexDirection: 'row', padding: 0}}>
          <ListItem
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 5,
            }}
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}>
            <UserAvatar size={60} name={item.caretakerUsername}></UserAvatar>
            <ListItem.Content>
              <ListItem.Title
                style={{fontSize: 16, marginLeft: 3, fontWeight: 'bold'}}>
                {item.caretakerUsername}
              </ListItem.Title>
              <ListItem.Subtitle>
                {' Accepted on : ' + item.createdAt}
              </ListItem.Subtitle>
            </ListItem.Content>

            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
              <View style={{alignItems: 'center'}}>
                <FontAwesomeIcon
                  icon={faAngleRight as IconProp}
                  color={'black'}
                  size={17}
                />
              </View>
            </TouchableOpacity>
          </ListItem>
        </View>
      </Card>
    );
  };

  return (
    <React.Fragment>
      <View style={{flex: 1, backgroundColor: 'white', height: '100%'}}>
        {caretakers.length === 0 && (
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assests/nocaretakers.jpg')}
              style={{width: 400}}
              resizeMode="contain"></Image>
          </View>
        )}
        <FlatList
          data={caretakers}
          renderItem={renderitem}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={fetchcaretakers}></RefreshControl>
          }></FlatList>
        <View style={{bottom: 0, alignItems: 'center'}}>
          <SpeedDial
            isOpen={open}
            style={{backgroundColor: 'white'}}
            overlayColor="white"
            buttonStyle={{backgroundColor: '#3743ab'}}
            icon={{name: 'add', color: 'white'}}
            openIcon={{name: 'close', color: 'white'}}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}>
            <SpeedDial.Action
              icon={{name: 'add', color: 'white'}}
              title="Add Caretaker"
              style={{height: 50}}
              buttonStyle={{backgroundColor: '#3743ab'}}
              onPress={() => navigation.navigate('Search Caretaker')}
            />
            <SpeedDial.Action
              icon={{name: 'delete', color: 'white'}}
              title="Delete"
              buttonStyle={{backgroundColor: '#3743ab'}}
              style={{height: 50}}
              onPress={() => console.log('Delete Something')}
            />
          </SpeedDial>
          <Button buttonStyle={{backgroundColor: 'white'}} title="A"></Button>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Addcaretaker;
