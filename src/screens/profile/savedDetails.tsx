/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import {Text, View} from 'react-native';
import {
  faContactBook,
  faDroplet,
  faMarsAndVenus,
  faRing,
  faSortNumericUp,
  faUser,
  faWeight,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './ProfileStyles/profileStyles';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedDetails = () => {
  const [bio, biostate] = useState('');
  const [contact, contactstate] = useState('');
  const [age, agestate] = useState('');
  const [weight, weightstate] = useState('');
  const [gender, genderstate] = useState('');
  const [ms, msstate] = useState('');
  const [blood, bloodstate] = useState('');

  useFocusEffect(() => {
    async function getuserdetail() {
      let sbio = await AsyncStorage.getItem('bio');
      let scontact = await AsyncStorage.getItem('contact');
      let sage = await AsyncStorage.getItem('age');
      let sweight = await AsyncStorage.getItem('weight');
      let sgender = await AsyncStorage.getItem('gender');
      let maritalstatus = await AsyncStorage.getItem('maritalstatus');
      let sblood = await AsyncStorage.getItem('bloodgroup');

      biostate(sbio);
      contactstate(scontact);
      agestate(sage);
      weightstate(sweight);
      genderstate(sgender);
      msstate(maritalstatus);
      bloodstate(sblood);
    }

    getuserdetail();
  });

  return (
    <View style={styles.sd}>
      <View style={styles.sdContainer}>
        <View
          style={styles.sdSubContainer}>
          <FontAwesomeIcon
            size={18}
            icon={faUser as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{bio}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={styles.sdSubContainer}>
          <FontAwesomeIcon
            size={18}
            icon={faContactBook as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{contact}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={styles.sdSubContainer}>
          <FontAwesomeIcon
            size={18}
            icon={faSortNumericUp as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{age + ' yrs'}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={styles.sdSubContainer}>
          <FontAwesomeIcon
            size={18}
            icon={faWeight as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{weight + ' kg'}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={styles.sdSubContainer}>
          <FontAwesomeIcon
            size={18}
            icon={faMarsAndVenus as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{gender}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={styles.sdSubContainer}>
          <FontAwesomeIcon
            size={18}
            icon={faRing as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{ms}</Text>
        </View>
      </View>
      <View style={styles.sdContainer}>
        <View
          style={styles.sdSubContainer}>
          <FontAwesomeIcon
            size={18}
            icon={faDroplet as IconProp}
            color="#3743ab"></FontAwesomeIcon>
        </View>
        <View style={styles.sdText}>
          <Text style={styles.sdText1}>{blood}</Text>
        </View>
      </View>
    </View>
  );
};

export default SavedDetails;
