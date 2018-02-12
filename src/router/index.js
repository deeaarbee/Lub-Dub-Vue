import HomePage from '../components/HomePage.vue';
import Monitor from '../components/monitor/Monitor.vue';
import Login from '../components/auth/Login.vue';
import SignUp from '../components/auth/SignUp.vue';
import Profile from '../components/profile/Profile.vue';
import Reports from '../components/reports/Reports.vue'
import Meds from '../components/meds/Meds.vue';
import Graphs from '../components/monitor/Graphs.vue';

export const routes = [
  { path:'' , component:HomePage , name:'homepage'},
  { path:'/profile' , component: Profile , name:'profile'},
  { path:'/login' , component: Login , name:'login'},
  { path:'/signup' , component: SignUp , name:'signup'},
  { path:'/meds' , component: Meds , name:'meds' },
  { path:'/reports' , component: Reports , name:'reports'},
  { path:'/monitor' , component: Monitor , name:'monitor', children:[
      { path:'/monitor/:graph', component: Graphs , name:'graph' }
    ]},


];
