import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';

// Form Validation

import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password Length should not be less than 4 characters...')
    .max(16, 'Password Length should not be more than 16 characters...')
    .required('Length is required'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    //
  };

  const createPassword = (characters: string, passwordLength: number) => {
    //
  };

  const resetPassword = () => {
    //
  };
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
