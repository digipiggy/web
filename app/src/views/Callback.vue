<template>
  <v-container class="pt-12">
    <v-row align="center" justify="center">
      <loader color="#9367E6"/>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { HashLoader } from '@saeris/vue-spinners';
import Auth from '../auth';

export default {
  components: {
    loader: HashLoader
  },
  computed: {
    ...mapState(['baseUrl'])
  },
  methods: {
    ...mapActions(['displayMessage', 'loadDevice'])
  },
  async mounted() {
    try {
      await Auth.handleAuthentication();
      const deviceResponse = await this.$http.get('https://api.particle.io/v1/devices', {
        headers: { Authorization: `Bearer ${Auth.accessToken}` }
      });

      if (!deviceResponse.data.length || !(await this.loadDevice(deviceResponse.data[0].id))) {
        this.displayMessage({ text: 'Failed to load device', color: 'error' });
      }
      
      this.$router.replace({ name: 'home' });
    } catch (err) {
      console.error(err);
      this.displayMessage({ text: 'Unable to complete authentication', color: 'error' });
    }
  }
};
</script>