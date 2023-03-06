import React, {useEffect, useState} from 'react';
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

import { useNavigation, useRoute } from '@react-navigation/native';
import { ProductProps } from '../../components/ProductCard';
import { ProductNavigationProps } from '../../@types/navigation';

type PizzasResponse = ProductProps & {
  photo_path: string;
  prices_sizes: {
    p: string;
    m: string;
    g: string;
  }
}

export function Product() {

    const [imagePath, setImagePath] = useState('');
    const [photoPath, setPhotoPath] = useState('')
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priceSizeP, setPriceSizeP] = useState('');
    const [priceSizeM, setPriceSizeM] = useState('');
    const [priceSizeG, setPriceSizeG] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    const route = useRoute();
    const { id } = route.params as ProductNavigationProps;

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
      .then(() => navigation.navigate('home'))
      .catch(() =>{
      setIsLoading(false);
       Alert.alert("Cadastro", "Não foi possivel cadastrar a pizza.")})
    }

    function handleGoBack(){
      navigation.goBack();
    }

    function handleDelete(){
      firestore()
      .collection('pizzas')
      .doc(id)
      .delete()
      .then(() => {
        storage()
        .ref(photoPath)
        .delete()
        .then(() => navigation.navigate('home'));
      })
    }

    useEffect(() => {
      if (id) {
        firestore()
        .collection('pizzas')
        .doc(id)
        .get()
        .then(response => {
          const product = response.data() as PizzasResponse;

          setName(product.name);
          setImagePath(product.photo_url);
          setDescription(product.description);
          setPriceSizeP(product.prices_sizes.p);
          setPriceSizeM(product.prices_sizes.m);
          setPriceSizeG(product.prices_sizes.g);
          setPhotoPath(product.photo_path)
        })
      }
    }, [id])
    

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
                <ButtonBack
                onPress={handleGoBack}
                />

                <Text style={styles.title}>Cadastrar</Text>

               { 
               id ?
               <TouchableOpacity
               onPress={handleDelete}
               >
                  <Text style={styles.deleteLabel}>Deletar</Text>
                </TouchableOpacity>
                : <View style={{ width: 20 }} />
                }

            </LinearGradient>

            <View 
            style={styles.upload}
            >
                <Photo uri={imagePath}/>

                { 
                !id &&
                  <View style={styles.pickImageButton}
                >
                    
                      <Button 
                        title='Carregar' 
                        type='segundary'
                        onPress={handlePickerImage}
                        />
                        
                </View>
                }

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

              {
                !id &&
                <Button
                onPress={handleAdd}
                title={isLoading ? 
                <ActivityIndicator 
                color={theme.COLORS.TITLE}
                /> 
                : 'Cadastrar Pizza'} 
              />
              }

            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
