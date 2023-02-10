import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/userReducer';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    dispatch(login({ username }));
    navigation.navigate('Home');
  };

  return (
    <View>
      <TextInput
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Sign in' onPress={onLogin} />
    </View>
  );
};

export default LoginScreen;
