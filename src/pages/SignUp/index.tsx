import React from 'react';
import { Image, ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input';
import Button from '../../components/Button';


import logoImg from '../../assets/logo.png';

import { Container, Title, ForgotPassword, BackToSign, BackToSignText, } from './styles';

const SignUp: React.FC = () => {
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
              <Title>Crie sua Conta</Title>
            </View>

            <Input name="name" icon="user" placeholder="nome" />

            <Input name="email" icon="mail" placeholder="email" />

            <Input name="password" icon="lock" placeholder="senha" />

            <Button onPress={() => { }}>Entrar</Button>



          </Container>
        </ScrollView>
      </KeyboardAvoidingView>


      <BackToSign onPress={() => { navigation.goBack() }}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignText>Voltar para Logon</BackToSignText>
      </BackToSign>
    </>
  )


};
export default SignUp;