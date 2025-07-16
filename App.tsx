import { StatusBar } from 'react-native';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';

import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import { Loading } from './src/components/Loading';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [fontLoaded] = useFonts({Inter_400Regular,Inter_600SemiBold,Inter_700Bold})

  return (
    <GluestackUIProvider config={config}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {fontLoaded ? <Dashboard/> : <Loading/>}

    </GluestackUIProvider>
  );
}

