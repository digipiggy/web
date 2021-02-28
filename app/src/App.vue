<template>
  <v-app id="app">
    <v-app-bar
      color="#9367E6"
      dark
      dense
      max-height="48"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Digi Piggy</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="logoutDialogDisplayed" max-width="320">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">power_settings_new</v-icon>
              </template>
              <span>Logout</span>
            </v-tooltip>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>Are you sure you want to logout?</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red lighten-2" text @click="onLogout">Logout</v-btn>
            <v-btn color="primary" text @click="logoutDialogDisplayed = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-title class="title">
          Digi Piggy
        </v-list-item-title>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/lessons">
            <v-list-item-icon>
              <v-icon>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Lessons</v-list-item-title>
          </v-list-item>

          <v-list-item to="/pigSettings">
            <v-list-item-icon>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Digi Pig Settings</v-list-item-title>
          </v-list-item>

          <v-list-item to="/values">
            <v-list-item-icon>
              <v-icon>mdi-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Values</v-list-item-title>
          </v-list-item>

          <v-list-item to="/articles">
            <v-list-item-icon>
              <v-icon>mdi-newspaper</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Articles</v-list-item-title>
          </v-list-item>

          <v-divider ></v-divider>

          <v-list-item to="/faq">
            <v-list-item-icon>
              <v-icon>mdi-help</v-icon>
            </v-list-item-icon>
            <v-list-item-title>FAQs</v-list-item-title>
          </v-list-item>

          <v-list-item to="/contactUs">
            <v-list-item-icon>
              <v-icon>mdi-clippy</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact Us</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main >
      <transition name="component-fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
    <v-snackbar v-model="notification" :multi-line="true" :timeout="3000">
      {{ notificationText }}
      <v-btn text :color="notificationColor" @click="notification = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Auth from './auth';

export default {
  data() {
    return {
      notificationText: '',
      notificationColor: 'info',
      notificationQueue: [],
      notification: false,
      drawer: false,
      group: null,
      logoutDialogDisplayed: false,
    };
  },
  computed: {
    ...mapState({
      messageText: state => state.message.text,
      messageColor: state => state.message.color
    }),
    hasNotificationsPending() {
      return this.notificationQueue.length > 0;
    }
  },
  watch: {
    messageText() {
      if (this.messageText) {
        this.notificationQueue.push({ text: this.messageText, color: this.messageColor });
        if (!this.notification) {
          const options = this.notificationQueue.shift();
          this.notificationText = options.text;
          this.notificationColor = options.color;
          this.notification = true;
        }
      }
    },
    notification() {
      if (!this.notification && this.hasNotificationsPending) {
        const options = this.notificationQueue.shift();
        this.notificationText = options.text;
        this.notificationColor = options.color;
        this.$nextTick(() => (this.notification = true));
      }
    }
  },
  methods: {
    ...mapActions(['initialize']),
    onLogout() {
      Auth.logout();
    }
  }
};
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
