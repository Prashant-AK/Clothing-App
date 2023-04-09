import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Center} from 'native-base';

import Logo from '../../assets/images/logo.svg';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Public');
    }, 1000);
  }, []);
  return (
    <Center style={styles.container}>
      <Logo width={100} height={120} />
    </Center>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
