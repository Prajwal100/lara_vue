import Vue from 'vue';
import Router from 'vue-router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(Router);
Vue.use(ViewUI);
import home from "./components/pages/home";
import tags from "./components/pages/tags";
const routes=[
    {
        path:'/',
        component:home,
    },
    {
        path:'/tags',
        component: tags,
    }
]

export default new Router({
    mode:'history',
    routes
})
