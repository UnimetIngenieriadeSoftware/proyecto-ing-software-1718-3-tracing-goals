import { AppRegistry } from 'react-native';
import App from './App';
import androidApp from './android';
import { YellowBox } from 'react-native';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Setting a timer', 'Warning: Failed child context type']);


AppRegistry.registerComponent('reactapp9', () => androidApp);
