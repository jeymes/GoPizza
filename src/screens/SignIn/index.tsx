import React, { useState } from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import {getBottomSpace} from 'react-native-iphone-x-helper'

import brandImg from '../../assets/brand.png';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('')
    const { signIn, signOut, forgotPassword, isLoading } = useAuth();

    function handleSignIn(){
        signIn(email, password)
    }
    function handleforgotPassword(){
        forgotPassword(email)
    }

    return (
        <LinearGradient 
        colors={theme.COLORS.GRADIENT}
            start={{x: 0,y: 1}}
            end={{x: 0.5, y: 0.5}}
            style={styles.container}
            >

            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{width: '100%'}}
            >
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: getBottomSpace() + 48}}
                    style={{ width: '100%', paddingLeft: 32, paddingRight: 32}}
                >

                  <Image
                  source={brandImg}
                  />

                    <Text style={styles.title}>
                        Login
                    </Text>

                    <Input 
                        placeholder='E-mail' 
                        type='segundary'
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={setEmail}
                        />

                    <Input 
                        placeholder='Senha' 
                        type='segundary'
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry
                        onChangeText={setPassword}
                        />

                        <TouchableOpacity 
                        onPress={handleforgotPassword}
                        style={styles.forgotPassowrdButton}>
                          <Text 
                          style={styles.forgotPassowrdLabel}>
                            Esqueci minha senha
                          </Text>
                        </TouchableOpacity>

                    <Button 
                    title={isLoading ? <ActivityIndicator color={theme.COLORS.TITLE}/> : 'Entrar'} 
                    type='segundary'
                    onPress={handleSignIn}
                    />
                </ScrollView>

            </KeyboardAvoidingView>
        </LinearGradient>
    );
}
