import { Navigation } from "react-native-navigation";
import {reduxProvider} from './src/config-store'
import Loading from './src/Loading'

// function HeadlessCheck({ isHeadless }) {
//   if (isHeadless) {
//     // App has been launched in the background by iOS, ignore
//     return null;
//   }

//   return <App />;
// }


Navigation.registerComponent('loading.app', () => reduxProvider(Loading),()=>Loading);
Navigation.events().registerAppLaunchedListener( async () => {
  Navigation.setRoot({
         root: {
           stack: {
             id:'LoadingStack',
             children: [
               {
                 component: {
                   id:'MainLoading',
                   name: 'loading.app',
                   options:{
                     topBar:{
                       visible:false,
                     }
                   }
                 }
               }  
             ]
           }
         }
      });
});

