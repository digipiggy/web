import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Auth from './auth';

const cloneDevice = device => JSON.parse(JSON.stringify(device));

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: process.env.VUE_APP_API_BASE_URL || '',
    message: {
      text: null,
      color: null
    },
    device: {
      deviceId: null,
      deviceCode: null,
      goals: []
    }
  },
  mutations: {
    setMessage(state, options) {
      state.message.text = options.text;
      state.message.color = options.color;
    },
    setDevice(state, device) {
      state.device = device;
    }
  },
  actions: {
    displayMessage({ commit }, options) {
      commit('setMessage', options);
      setTimeout(() => commit('setMessage', { text: null, color: null }), 0);
    },
    async loadDevice({ state, commit }, deviceId) {
      try {
        const response = await axios.get(`${state.baseUrl}/api/device/${deviceId}`, {
          headers: {
            Authorization: `Bearer ${Auth.idToken}`
          }
        });

        Vue.ls.set('device', response.data);
        commit('setDevice', response.data);
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },
    async storeDevice({ state, commit }, device) {
      try {
        const updatedDevice = cloneDevice(state.device);
        updatedDevice.goals.length = 0;
        device.goals.forEach(g => updatedDevice.goals.push(g));

        await axios.put(`${state.baseUrl}/api/device/${device.deviceId}`, updatedDevice);
        Vue.ls.set('device', updatedDevice);
        commit('setDevice', updatedDevice);
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },
    async updateGoalTotals({ state, dispatch }, deposits) {
      const updatedDevice = cloneDevice(state.device);
      updatedDevice.goals.forEach((d, i) => d.current += deposits[i]);
      return await dispatch('storeDevice', updatedDevice);
    }
  }
})
