import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Account, ID, Client } from 'react-native-appwrite'


let client;
let account;

client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6621e5609c167e9a0af3")
  .setPlatform("com.testwrite.app")

account = new Account(client);

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  // create a new appwrite account...

  async function createAccount() {
    await account.create(ID.unique(), email, password, name);
    console.log("Succesfull created account");
  }

  // SignIn with email and password...

  async function signIn() {
    await account.createEmailSession(email, password);
    setUserDetails(await account.get()); //FIXME: Donot useThis use trycatch
    console.log(userDetails);
  }

  async function signOut() {
    await account.deleteSessions();
    setUserDetails(null);
    console.log("User Logged out Successfull");
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder='Email'
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder='Password'
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder='Name'
        />
        <Button title='SignIn' onPress={signIn} />
        <Button title='SignOut' onPress={signOut} />
        <Button title='Create Account' onPress={createAccount} />
      </View>
      <View>
        <Text>
          Account ID: {userDetails ? userDetails.$id : ''}
        </Text>
        <Text>
          Name: {name}
        </Text>
        <Text>
          Password: {password}
        </Text>
        <Text>
          Email: {email}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// import io.appwrite.Client
// import io.appwrite.services.Account

// val client = Client(context)
//     .setEndpoint("https://cloud.appwrite.io/v1")
//     .setProject("6621e5609c167e9a0af3")
//     .setSelfSigned(status: true) // For self signed certificates, only use for development

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
