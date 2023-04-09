import React, {useState} from 'react';
import {
  Box,
  Button,
  Center,
  Text,
  VStack,
  ScrollView,
  Divider,
  HStack,
  Circle,
} from 'native-base';
import {Dimensions} from 'react-native';

import Logo from 'assets/images/logo.svg';
import Google from 'assets/images/google.svg';
import Facebook from 'assets/images/facebook.svg';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

export const AuthLayout = (ChildComponent, screen) => {
  const Layout = props => {
    const renderHtml = () => {
      return (
        <VStack bg="background2">
          <Center h="20%" mt={'5%'}>
            <Logo width={60} />
          </Center>
          <VStack
            style={{
              height: '80%',
            }}>
            <ScrollView>
              <VStack
                alignItems="center"
                justifyContent="space-between"
                flex={1}
                style={{
                  height: '80%',
                }}>
                <Text fontSize="3xl" fontWeight={'bold'} textAlign={'center'}>
                  {screen === 'SignIn' ? 'Sign In' : 'Sign Up'}
                </Text>
                <ChildComponent {...props} />
                <Button
                  borderRadius="full"
                  size="lg"
                  bg="baseTheme.main"
                  p={5}
                  w={'50%'}>
                  <Text
                    color="singletons.white"
                    fontSize="xl"
                    fontWeight="semibold">
                    {screen === 'SignIn' ? 'Sign In' : 'Sign Up'}
                  </Text>
                </Button>
                <VStack w="100%" mt={3} p={4} alignItems={'center'}>
                  <HStack alignItems={'center'}>
                    <Divider bg="singletons.black" w="30%" thickness="2" />
                    <Text fontSize={'lg'} fontWight="bold" px={4}>
                      Or
                    </Text>
                    <Divider bg="singletons.black" w="30%" thickness="2" />
                  </HStack>
                  <HStack
                    alignItems={'center'}
                    w="80%"
                    justifyContent="space-evenly"
                    my={4}>
                    <Circle size="60px" bg="singletons.white">
                      <Facebook width={30} />
                    </Circle>
                    <Circle size="60px" bg="singletons.white">
                      <Google width={30} />
                    </Circle>
                  </HStack>
                  <Box mt={2} w="100%" style={{alignItems: 'center'}}>
                    {screen === 'SignIn' ? (
                      <Text
                        color="#230A0680"
                        fontSize="lg"
                        onPress={() => props.navigation.navigate('SignUp')}>
                        Don't have an account?{' '}
                        <Text fontWeight="bold" color="singletons.black">
                          Sign Up
                        </Text>
                      </Text>
                    ) : (
                      <Text
                        color="#230A0680"
                        fontSize="lg"
                        onPress={() => props.navigation.navigate('SignIn')}>
                        Already have an account?{' '}
                        <Text fontWeight="bold" color="singletons.black">
                          Sign In
                        </Text>
                      </Text>
                    )}
                  </Box>
                </VStack>
              </VStack>
            </ScrollView>
          </VStack>
        </VStack>
      );
    };
    return <>{renderHtml()}</>;
  };
  return Layout;
};
