import React from 'react';

import {Navigator} from './navigator';
import {NavigationContainer} from '@react-navigation/native';
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
