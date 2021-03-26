import React, { useRef } from 'react';
import { Image, TextInput, ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';


import logoImg from '../../assets/logo.png';

import { Container, Title, BackToSignIn, BackToSignText, } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null)

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

            <Form
              ref={formRef}
              onSubmit={data => {
                console.log(data);
              }}
            >
              <Input
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => { emailInputRef.current?.focus() }}
                name="name" icon="user" placeholder="Nome" />

              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => { passwordInputRef.current?.focus() }}
                name="email" icon="mail" placeholder="email" />

              <Input
                ref={passwordInputRef}
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
                name="password" icon="lock" placeholder="senha" />

              <Button onPress={() => formRef.current?.submitForm()}>
                Entrar
                </Button>
            </Form>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>


      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />

        <BackToSignText>Voltar para Logon</BackToSignText>
      </BackToSignIn>
    </>
  )

};

export default SignUp;