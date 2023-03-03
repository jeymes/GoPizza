import React, {useState} from 'react';
import {
  ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme';
import {ButtonBack} from '../../components/ButtonBack';
import {Photo} from '../../components/Photo';
import {Button} from '../../components/Button';

import ImagePicker from 'react-native-image-crop-picker';
import {InputPrice} from '../../components/InputPrice';
import { Input } from '../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export function Product() {

    const [imagePath, setImagePath]  = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priceSizeP, setPriceSizeP] = useState('');
    const [priceSizeM, setPriceSizeM] = useState('');
    const [priceSizeG, setPriceSizeG] = useState('');
    const [isLoading, setIsLoading] = useState(false);


  const handlePickerImage = () => {
        ImagePicker.openPicker
        ({ 
          width: 160, 
          height: 160, 
          cropping: true
        })
        .then(image => {
          setImagePath(image.path);
        });
    };

    async function handleAdd(){
      if (!name.trim()) {
        return Alert.alert("Cadastro", "Informe o nome da pizza.");
      }
      if (!description.trim()) {
        return Alert.alert("Cadastro", "Informe a descrição da pizza.");
      }
      if (!imagePath) {
        return Alert.alert("Cadastro", "Selecione a imagem da pizza.");
      }
      if (!priceSizeP || !priceSizeM || !priceSizeG) {
        return Alert.alert("Cadastro", "Informe o preço de todos os tamanhos da pizza.");
      }
      setIsLoading(true);

      const fileName = new Date().getTime()
      const reference = storage().ref(`/pizzas/${fileName}.png`);

      await reference.putFile(imagePath);
      const photo_url = await reference.getDownloadURL();

      firestore()
      .collection('pizzas')
      .add({
        name,
        name_insensitive: name.toLowerCase().trim(),
        description,
        prices_sizes: {
          p: priceSizeP,
          m: priceSizeM,
          g: priceSizeG,
        },
        photo_url,
        photo_path: reference.fullPath
      })
      .then(() => Alert.alert("Cadastro", "Pizza cadastrada com sucesso."))
      .catch(() => Alert.alert("Cadastro", "Não foi possivel cadastrar a pizza."))

      setIsLoading(false);
    }
    

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient 
                colors={theme.COLORS.GRADIENT}
                style={styles.header}
                >
                <ButtonBack/>

                <Text style={styles.title}>Cadastrar</Text>

                <TouchableOpacity>
                  <Text style={styles.deleteLabel}>Deletar</Text>
                </TouchableOpacity>

            </LinearGradient>

            <View 
            style={styles.upload}
            >
                <Photo uri={imagePath}/>

                <View style={styles.pickImageButton}
                >
                    <Button 
                        title='Carregar' 
                        type='segundary'
                        onPress={handlePickerImage}
                        />
                </View>

            </View>

            <View
            style={styles.form}
            >
              <View style={styles.inputGroup} >
                <Text style={styles.label}>
                  Nome
                </Text>
                <Input
                onChangeText={setName}
                value={name}
                />
              </View>

              <View style={styles.inputGroup} >
                <View style={styles.inputGroupHeader}>
                <Text style={styles.label}>Descrição</Text>
                <Text style={styles.masCharacters} >0 de 60 caracteres</Text>
                </View>

                <Input
                multiline
                maxLength={60}
                height={90}
                onChangeText={setDescription}
                value={description}
                />
              </View>

              <View style={styles.inputGroup} >

                <Text style={styles.label}>Tamanho e preços</Text>
                <InputPrice 
                size='P'
                onChangeText={setPriceSizeP}
                value={priceSizeP}
                />
                <InputPrice 
                size='M'
                onChangeText={setPriceSizeM}
                value={priceSizeM}
                />
                <InputPrice 
                size='G'
                onChangeText={setPriceSizeG}
                value={priceSizeG}
                />
              </View>

              <Button
                onPress={handleAdd}
                title={isLoading ? 
                <ActivityIndicator 
                color={theme.COLORS.TITLE}
                /> 
                : 'Cadastrar pizza'} 
              />

            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
