import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {List} from 'react-native-paper';
import {API_URL} from '../../repositories/var';
import * as Progress from 'react-native-progress';
import {Button} from 'react-native-elements';
import styles from './patientStyles/PatientProfileStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPatients} from '../../redux/actions/patient/PatientActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logger from '../../components/logger';

LogBox.ignoreLogs(['Require cycle:']);

const ViewProfile = ({navigation}) => {
  const [userdetails, _userdetailsstate] = React.useState();
  const [progress, _progress_status] = React.useState(true);
  const sendnotificationtouser = async (fcm_token, medname) => {
    let url = new URL(`${API_URL}/api/v1/notifyuser`);
    url.searchParams.append('fcmToken', fcm_token);
    url.searchParams.append('medname', medname);

    await fetch(url).then(resp => Logger.loggerInfo(resp));
  };

  const patients = useSelector(
    state => state.PatientProfileReducer.patientList,
  );
  const [_refresh, refeereshstate] = React.useState(false);

  const dispatch = useDispatch();
  const fetchpatients = async () => {
    let user_id = await AsyncStorage.getItem('user_id');
    dispatch(fetchPatients(user_id));
    refeereshstate(false);
  };

  return (
    <View style={styles.container}>
      {progress ? (
       

        <View style={styles.container2}>
          <ScrollView>
            <View style={styles.top}>
              <View style={styles.nameView}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.nameText}>
                  {userdetails?.userEntityList[0]?.userName}
                </Text>
              </View>
              <View style={styles.iconView}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: userdetails?.userEntityList[0]?.userdetails?.picPath,
                  }}
                />
              </View>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Bio</Text>

              <Text style={styles.itemright}>
                {userdetails?.userEntityList[0]?.userdetails?.bio}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Contact Number</Text>

              <Text style={styles.itemright}>
                {userdetails?.userEntityList[0]?.userDetails?.userContact}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Email Id</Text>
              <Text style={styles.itemright}>
                {userdetails?.userEntityList[0]?.email}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Gender</Text>

              <Text style={styles.itemright}>
                {userdetails?.userEntityList[0]?.userdetails?.gender}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Blood Group</Text>

              <Text style={styles.itemright}>
                {userdetails?.userEntityList[0]?.userdetails?.bloodGroup}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Marital Status</Text>
              <Text style={styles.itemright}>
                {userdetails?.userEntityList[0]?.userdetails?.martialStatus}
              </Text>
            </View>
            <View style={styles.itemView} />
            <View style={styles.items}>
              <Text style={styles.itemleft}>Age(in yrs)</Text>
              <Text style={styles.itemright}>
                {userdetails?.userEntityList[0]?.userdetails?.age}
              </Text>
            </View>
            <View>
              <List.Section style={styles.list}>
                <List.Accordion
                  title="Medicines"
                  titleStyle={styles.medTitle}
                  left={() => (
                    <Icon
                      size={16}
                      name="medkit"
                      color="black"
                      style={styles.medIcon}
                    />
                  )}
                  right={() => <Icon name="caret-down"></Icon>}>
                  {userdetails?.medicinesList.map(mlistitem => {
                    Logger.loggerInfo(mlistitem.medicineId);
                    return (
                      <List.Item
                        description={`${mlistitem.days}\n${mlistitem.time}`}
                        style={styles.listItem}
                        titleStyle={styles.listTitle}
                        right={() => {
                          return (
                            <>
                              <View style={styles.medContainerRight}>
                                <Button
                                  id='image'
                                  title="Images"
                                  onPress={() =>
                                    navigation.navigate('Images', {
                                      medId: mlistitem.medicineId,
                                    })
                                  }></Button>
                                <TouchableOpacity
                                  id='medLog'
                                  style={styles.touch}
                                  onPress={() => {
                                    Logger.loggerInfo(mlistitem.medicineName);
                                    sendnotificationtouser(
                                      userdetails?.userEntityList[0]?.userDetails
                                        .fcmToken,
                                      mlistitem.medicineName,
                                    );
                                  }}>
                                  <Icon
                                    name="bell"
                                    size={25}
                                    color="#00bcd4"></Icon>
                                </TouchableOpacity>
                              </View>
                            </>
                          );
                        }}
                        id='navReport'
                        onPress={() => {
                          let id = mlistitem.medicineId;
                          navigation.navigate('Patient report', {
                            medId: id,
                            adherenceRate: Math.round(
                              (mlistitem.currentCount /
                                mlistitem.totalMedReminders) *
                                100,
                            ),
                            medName: mlistitem.medicineName,
                            medDays: mlistitem.days,
                            mTimes: mlistitem.time,
                            mstartDate: mlistitem.startDate,
                            mendDate: mlistitem.endDate,
                            mcc: mlistitem.currentCount,
                          });
                        }}
                        title={mlistitem.medicineName}></List.Item>
                    );
                  })}
                </List.Accordion>
              </List.Section>
            </View>
          </ScrollView>
        </View>

      ) : (
         <View style={styles.conatiner1}>
          <Progress.Circle size={80} indeterminate={true} />
          <Text>Fetching User Details</Text>
        </View>
      )}
    </View>
  );
};

export default ViewProfile;
