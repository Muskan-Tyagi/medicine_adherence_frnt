import React from "react";
import AdherencePercentage from '../../components/adherence/adherencePercentage';
import { Divider } from 'react-native-elements';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';

const ReminderMed = ({ item }) => {
    let currdate = new Date();
    let click = currdate >= new Date(item?.end_date);
    const [percentage, setpercentage] = React.useState(0);
    AdherencePercentage(
        item?.start_date,
        item?.days,
        item?.time,
        item?.current_count,
        item?.medicine_name,
    ).then(per => setpercentage(per));

    return (
        <>
            {item?.status === 1 ? (
                <View>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                        onPress={() => {
                            if (click) {
                                Alert.alert('Reminder duration over', '', [
                                    {
                                        text: 'Ok',
                                        onPress: () => undefined,
                                    },
                                ]);
                            } else {
                                navigation?.navigate('Today Performance', {
                                    user_id: item?.user_id,
                                });
                            }
                        }}>
                        <View style={{ flexDirection: 'column', margin: 10, width: '60%' }}>
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: '600',
                                    marginBottom: 7,
                                    fontSize: 16,
                                }}>
                                {item?.medicine_name}
                            </Text>
                            <Text
                                style={{ marginBottom: 5, color: 'grey', fontWeight: '600' }}>
                                {item.medicine_des}
                            </Text>
                            <View style={{ flexDirection: 'row', width: '50%' }}>
                                <Text style={{ color: 'black', fontWeight: '400' }}>
                                    Days -{' '}
                                </Text>
                                <Text style={{ color: 'grey' }}>
                                    {item.days.split(':').map((mday) => {
                                        return <Text key={mday}>{mday + ', '}</Text>;
                                    })}
                                </Text>
                            </View>
                            <View
                                style={{ flexDirection: 'row', width: '60%', marginTop: 5 }}>
                                <Text style={{ color: 'black', fontWeight: '400' }}>
                                    Timings -{' '}
                                </Text>
                                <Text style={{ color: 'grey' }}>
                                    {item.time.split('-').map((mtime) => {
                                        return <Text key={mtime}>{mtime + ', '}</Text>;
                                    })}
                                </Text>
                            </View>
                            <View style={{ marginTop: 7, flexDirection: 'row' }}>
                                <Text style={{ color: 'black', fontWeight: '400' }}>
                                    {'End Date - '}
                                </Text>
                                <Text>{new Date(item?.end_date).toDateString()}</Text>
                            </View>
                        </View>
                        <View style={{ padding: 30 }}>
                            <TouchableOpacity>
                                <ProgressCircle
                                    percent={percentage}
                                    radius={26}
                                    borderWidth={3}
                                    color="#00bcd4"
                                    shadowColor="#999"
                                    bgColor="#ffff">
                                    <Text style={{ fontSize: 15, color: '#00bcd4' }}>
                                        {percentage + '%'}
                                    </Text>
                                </ProgressCircle>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <Divider width={1} />
                </View>
            ) : (
                <></>
            )}
        </>
    );
};

export default ReminderMed;