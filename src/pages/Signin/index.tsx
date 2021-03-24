import React from 'react';
import { Image, ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';


import logoImg from '../../assets/logo.png';

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAcountButtonText, CreateAcountButton } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg}></Image>
            <View>
              <Title>Faça seu logon</Title>
            </View>

            <Input name="email" icon="mail" placeholder="email" />

            <Input name="password" icon="lock" placeholder="senha" />

            <Button onPress={() => { }}>Entrar</Button>


            <ForgotPassword onPress={() => { }}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>


      <CreateAcountButton onPress={() => { navigation.navigate('SignUp') }}>
        <Icon name="log-in" size={20} color="#ff9020" />
        <CreateAcountButtonText>Criar uma Conta</CreateAcountButtonText>
      </CreateAcountButton>
    </>
  )


};
export default SignIn