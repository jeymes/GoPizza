import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme';
import { ButtonBack } from '../../components/ButtonBack';
import { Photo } from '../../components/Photo';
import { Button } from '../../components/Button';

import ImagePicker from 'react-native-image-crop-picker';

export function Product() {

const [image, setImage] = useState('');

const handlePickerImage = () => {
    ImagePicker.openPicker({
        width: 160,
        height: 160,
        cropping: true
      }).then(image => {
        setImage(image.path);
      });
};

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={styles.container}>

        <LinearGradient
        colors={theme.COLORS.GRADIENT}
        style={styles.header}
        >
            <ButtonBack/>

            <Text style={styles.title} >
                Cadastrar
            </Text>

            <TouchableOpacity>
                <Text style={styles.deleteLabel}>
                    Deletar
                </Text>
            </TouchableOpacity>

        </LinearGradient>

        <View style={styles.upload}>

        <Photo uri={image} />
        <View style={styles.pickImageButton}>
        <Button 
        title='Carregar'
        type='segundary'
        onPress={handlePickerImage}
         />
        </View>

        </View>

    </KeyboardAvoidingView>
  );
}