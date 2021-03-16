import Vue from 'vue';
import Router from 'vue-router';
import Auth from './auth';
import Setup from './views/Setup';
import Callback from './views/Callback';
import PigDashboard from './views/PigDashboard';
import PigSettings from './views/PigSettings';
import Goals from './views/Goals';
import Home from './views/Home';
import Story from './views/Story';
import Lessons from './views/Lessons';
import Lesson from './views/Lesson';
import Articles from './views/Articles';
import FAQ from './views/Faq';
import ContactUs from './views/ContactUs';
import Chapter from './views/Chapter';
import Preferences from './views/Preferences';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/setup',
      name: 'Setup',
      component: Setup
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pigDashboard',
      name: 'PigDashboard',
      component: PigDashboard
    },
    {
      path: '/goals',
      name: 'Goals',
      component: Goals
    },
    {
      path: '/pigSettings',
      name: 'PigSettings',
      component: PigSettings
    },
    {
      path: '/story',
      name: 'Story',
      component: Story
    },
    {
      path: '/chapter/:title',
      name: 'chapter',
      component: Chapter,
    },
    {
      path: '/lessons',
      name: 'Lessons',
      component: Lessons
    },
    {
      path: '/lessons/lesson/:title',
      name: 'Lesson',
      component: Lesson
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/contactUs',
      name: 'Contact Us',
      component: ContactUs
    },
    {
      path: '/setupGuide',
      name: 'Setup Guide',
      component: Preferences
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