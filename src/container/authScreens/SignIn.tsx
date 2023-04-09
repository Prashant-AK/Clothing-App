import React from 'react';
import {Container, Input, Stack, VStack, Box, Button, Text} from 'native-base';
import FtIcon from 'react-native-vector-icons/Fontisto';
import EnIcon from 'react-native-vector-icons/Entypo';
import {AuthLayout} from '../../utils/layout/AuthLayout';

export const SignIn = AuthLayout(({navigation}) => {
  return (
    <Stack space={4} w="100%" flex={1}>
      <VStack mt={2} space={3} alignItems="center">
        <Input
          w={{
            base: '90%',
          }}
          type="email"
          fontSize={'lg'}
          borderRadius={'lg'}
          bgColor="singletons.white"
          color="singletons.black"
          InputLeftElement={
            <Container bg="#F679521A" m={2} p={3} rounded={'xl'}>
              <EnIcon name="mail" size={20} color="#f67952" />
            </Container>
          }
          placeholder="Email"
        />
        <Input
          w={{
            base: '90%',
          }}
          bgColor={'singletons.white'}
          borderRadius={'lg'}
          fontSize={'lg'}
          color="singletons.black"
          InputLeftElement={
            <Container bg="#F679521A" m={2} p={3} rounded={'xl'}>
              <FtIcon name="locked" size={20} color="#f67952" />
            </Container>
          }
          placeholder="Password"
        />
      </VStack>
      <Box w="100%" style={{alignItems: 'flex-end'}}>
        <Button w="50%" variant={'link'} bg="transparent">
          <Text>Forgot Password?</Text>
        </Button>
      </Box>
    </Stack>
  );
}, 'SignIn');
