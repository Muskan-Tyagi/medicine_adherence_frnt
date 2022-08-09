import { Linking, Share, View} from 'react-native';
import React from 'react';
import SettingsList from 'react-native-settings-list';
import styles from "./screenStyles/settingStyles";

interface Props {
  navigation: any;
}

const Settings: React.FC<Props> = ({navigation}: Props) => {


  const handle = () => {
    try {
      Share.share({
        title: 'Medstick',
        message:
          'Hello you are invited to use Medstick ' +
          'https://play.google.com/store/apps/details?id=com.animesafar.dinterviewkit',
        url: 'https://cdn.discordapp.com/attachments/941592669933682699/955175698568462437/vinaylogo.png',
      });
    } catch (error) {}
  }

  const handle1 = () => {
    navigation.navigate('About')
  }
  const openSet = () => {
    Linking.openSettings()
  }


  return (
    <View style={styles.container}>
      <SettingsList borderColor="white" backgroundColor="white">
        <SettingsList.Header
          headerText="Settings"
          headerStyle={styles.setting}
        />
        <SettingsList.Item
          hasNavArrow={true}
          title="Notification settings"
          titleStyle={styles.settingItems}
          id = "openSetting"
          onPress={openSet}
        />

        <SettingsList.Header
          headerText="General"
          headerStyle={styles.general}
        />
        <SettingsList.Item
          hasNavArrow={false}
          title="About Medstick"
          titleStyle={styles.settingItems}
          id = "onPressHandle1"
          onPress={handle1}
        />
        <SettingsList.Item
          hasNavArrow={false}
          title="Share with friends and family"
          titleStyle={styles.settingItems}
          id="onpress"
          onPress={handle}
        />
      </SettingsList>
    </View>
  );
};

export default Settings;

