import Vue from 'vue';
import Router from 'vue-router';
import Auth from './auth';
import Setup from './views/Setup';
import Callback from './views/Callback';
import PigDashboard from './views/PigDashboard';
import PigSettings from './views/PigSettingsNew';
import Home from './views/Home';
import Story from './views/Story';
import Lessons from './views/Lessons';
import Lesson from './views/Lesson';
import Articles from './views/Articles';
import FAQ from './views/Faq';
import ContactUs from './views/ContactUs';
import Chapter from './views/Chapter';
import Values from './views/Values';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pigDashboard',
      name: 'pigDashboard',
      component: PigDashboard
    },
    {
      path: '/pigSettings',
      name: 'pigSettings',
      component: PigSettings
    },
    {
      path: '/story',
      name: 'story',
      component: Story
    },
    {
      path: '/chapter/:title',
      name: 'chapter',
      component: Chapter,
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: Lessons
    },
    {
      path: '/lessons/lesson/:title',
      name: 'lesson',
      component: Lesson
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUs
    },
    {
      path: '/values',
      name: 'values',
      component: Values
    },
    {
      path: '*',
      redirect: { name: 'pigDashboard' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/setup' || to.path === '/callback' || Auth.isAuthenticated()) {
    next();
  } else {
    Auth.login();
  }
});

export default router;