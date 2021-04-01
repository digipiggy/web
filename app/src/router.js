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
import Lesson1 from './views/Lesson1';
import Lesson2 from './views/Lesson2';
import Lesson3 from './views/Lesson3';
import LessonX from './views/LessonX';
import LessonViewer from './views/LessonViewer';
import Articles from './views/Articles';
import FAQ from './views/Faq';
import ContactUs from './views/ContactUs';
import Chapter from './views/Chapter';
import Settings from './views/Settings';
import Page404 from './views/Page404';
import Printables from './views/Printables';

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
      path: '/lessons/lesson/1',
      name: 'Lesson 1 - Goals',
      component: Lesson1
    },
    {
      path: '/lessons/lesson/2',
      name: 'Lesson 2 - Earning',
      component: Lesson2
    },
    {
      path: '/lessons/lesson/3',
      name: 'Lesson 3 - Needs vs Wants',
      component: Lesson3
    },
    {
      path: '/lessons/lesson/:title',
      name: 'Lesson Coming Soon',
      component: LessonX
    },
    {
      path: '/lessonViewer/lesson/:title',
      name: 'Lesson',
      component: LessonViewer
    },
    {
      path: '/articles',
      name: 'Learning Links',
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
      path: '/settings',
      name: 'Family Settings',
      component: Settings
    },
    {
      path: '/404',
      name: '404 - Page not Found',
      component: Page404
    },
    {
      path: '/printables',
      name: 'Piggles Printables',
      component: Printables
    },
    {
      path: '*',
      redirect: { name: '404 - Page not Found' }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.path === '/setup' || to.path === '/callback' || Auth.isAuthenticated()) {
    next();
  } else {
    Auth.login();
  }
});

export default router;