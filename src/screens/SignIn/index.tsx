import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity} from 'react-native'
import {getBottomSpace} from 'react-native-iphone-x-helper'

import brandImg from '../../assets/brand.png';

export function SignIn() {
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
                        />

                    <Input 
                        placeholder='Senha' 
                        type='segundary'
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry
                        />

                        <TouchableOpacity 
                        style={styles.forgotPassowrdButton}>
                          <Text 
                          style={styles.forgotPassowrdLabel}>
                            Esqueci minha senha
                          </Text>
                        </TouchableOpacity>

                    <Button 
                    title='Entrar' 
                    type='segundary'
                    />
                </ScrollView>

            </KeyboardAvoidingView>
        </LinearGradient>
    );
}
