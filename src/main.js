import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store/store'
import { TNSFontIcon, fonticon } from 'nativescript-fonticon'
import CardViewPlugin from 'nativescript-material-cardview/vue';
import Vuex from 'vuex'
import RadListView from 'nativescript-ui-listview/vue';



TNSFontIcon.debug = true; 
TNSFontIcon.paths = { fa: './assets/css/fontawesome.min.css', far: './assets/css/regular.min.css', fas: './assets/css/solid.min.css', fab: './assets/css/brand.min.css' }
TNSFontIcon.loadCss() 

Vue.filter('fonticon', fonticon) 
Vue.use(RadListView);
Vue.use(CardViewPlugin);
Vue.use(Vuex)


Vue.registerElement(
  "CardView",
  () => require("@nstudio/nativescript-cardview").CardView
  );



new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
