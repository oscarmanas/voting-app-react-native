import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './navigation/Router';
import { initializeApp } from 'firebase/app';

export default function App() {
  
  const firebaseConfig = {
      apiKey: "AIzaSyB2toiWWSKScfqhO9WccyToLP8jJ534Kb8",
      authDomain: "pranyes-f6823.firebaseapp.com",
      projectId: "pranyes-f6823",
      storageBucket: "pranyes-f6823.appspot.com",
      messagingSenderId: "349145166314",
      appId: "1:349145166314:web:811669d1f66c49cdbb0293",
      measurementId: "G-NE0ZE6PXW7"
  }
  
  initializeApp(firebaseConfig);

  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
