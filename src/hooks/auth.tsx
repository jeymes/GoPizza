import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
    id: string;
    name: string;
    isAdmin: boolean;
}

type AuthContextData = {
    signOut: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    signIn: ( email: string, password: string ) => Promise<void>;
    isLoading: boolean;
    user: User  | null;
}

type AuthProviderProps = {
children: ReactNode;
}

const USER_COLLECTION = '@gopizza:users';

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children } : AuthProviderProps) {

    const [isLoading, setIsLoading] = useState(false);
    const [user , setUser] = useState<User | null>(null);

    async function signIn ( email: string, password: string ){
        if(!email || !password){
            return Alert.alert("Login", "Informe o e-mail e a senha.")
        }

        setIsLoading(true);

        auth()
        .signInWithEmailAndPassword(email, password)
        .then(account => {
           firestore()
           .collection('users')
           .doc(account.user.uid)
           .get()
           .then( async (profile) => {
            const { name, isAdmin } = profile.data() as User;

            if (profile.exists){
                const userData = {
                    id: account.user.uid,
                    name,
                    isAdmin
                }
                await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData) )
                setUser(userData);
            }
           })
           .catch(() => Alert.alert("Login", "Não foi possivel buscar os dados de perfil do usuário."));
        })
        .catch(error => {
            const { code } = error;

            if(code === 'auth/user-not-found' || code === 'auth/wrong-password') {
                return Alert.alert('Login', 'E-mail e/ou senha inválida.')
            } else {
                return Alert.alert('Login', 'Não foi possivel realizar o login.')
            }
        })
        .finally(() => setIsLoading(false))
    }

    async function loadUserStoregeData(){
        setIsLoading(true);

        const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

        if ( storedUser) {
            const userData = JSON.parse(storedUser) as User;
            console.log(userData)
            setUser(userData)
        }

        setIsLoading(false);
    }

    async function signOut() {
        await auth().signOut();
        await AsyncStorage.removeItem(USER_COLLECTION);
        setUser(null);
    }

    async function forgotPassword(email: string) {
        if (!email) {
            return Alert.alert("Redefinir senha", "Informe o e-mail.");
        }

        auth()
        .sendPasswordResetEmail(email)
        .then(() => Alert.alert("Redefinir senha", "Enviamos un link no seu e-mail para redefinir sua senha."))
        .catch(() => Alert.alert("Redefinir senha", "Não foi possível enviar o e-mail para redefinir a senha."))
    }

    useEffect(() => {
        loadUserStoregeData();
    }, [])

    return(
        <AuthContext.Provider 
        value={{
            isLoading,
            signIn,
            user,
            signOut,
            forgotPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };