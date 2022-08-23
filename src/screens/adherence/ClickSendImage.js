import React from 'react';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './adherenceStyles/ClickSendImageStyles';

const CameraScreen = ({ navigation }) => {
  const [{ cameraRef }, { takePicture }] = useCamera(null);
  async function picture() {
    const data = await takePicture();
    navigation.navigate('Sentocaretaker', {
      image_uri: data.uri,
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={styles.camera}></RNCamera>

        <TouchableOpacity
          id='picture'
          onPress={picture}
          style={styles.image}>
          <LottieView
            style={styles.lottieAnimation}
            source={require('../../../assests/animate/camera1.json')}
            autoPlay
            loop></LottieView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
