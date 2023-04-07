import React from 'react';
import {StyleSheet} from 'react-native';
import {Box} from 'native-base';

import LogoS from '../../assets/images/logo.svg';

const Splash = () => {
  return (
    <Box style={styles.container}>
      <LogoS width={100} height={100} />
    </Box>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
