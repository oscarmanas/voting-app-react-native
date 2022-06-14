import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './navigation/Router';
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

export default function App() {
  
  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
