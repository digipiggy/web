<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="#9367E6">
      <v-toolbar-title>Sleep</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-switch label="" hide-details v-model="piggySleep.enabled" ></v-switch>
      </div>
    </v-toolbar>
    <p 
      class="text-body-1 mx-4 mt-3 mb-0" 
      :style="{color: !piggySleep.enabled ? 'rgba(0, 0, 0, 0.38)' : ''}"
    >Even DigiPigs have a bedtime. Put your DigiPig to sleep at night, by setting the options below.</p>
    <v-card-text>
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="piggySleep.wakeupTime"
          label="Wakeup at:"
          type="time"
          filled
          :disabled="!piggySleep.enabled || busy"
          :rules="[rules.wakeupTimeRequired, rules.wakeupBeforeSleep]"
        ></v-text-field>
        <v-text-field
          v-model="piggySleep.sleepTime"
          label="Sleep at:"
          type="time"
          filled
          :disabled="!piggySleep.enabled  || busy"
          :rules="[rules.sleepTimeRequired, rules.wakeupBeforeSleep]"
        ></v-text-field>
        <v-select
          :items="timezones"
          item-text="label"
          item-value="value"
          filled
          label="Timezone"
          v-model="piggySleep.timezone"
          :disabled="!piggySleep.enabled  || busy"
          :rules="[rules.timezoneRequired]"
        ></v-select>
        <v-checkbox
          v-model="piggySleep.observeDaylightSavings"
          label="Do you observe daylight savings?"
          :disabled="!piggySleep.enabled  || busy"
          color="#9367E6"
        ></v-checkbox>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        dark
        color="#9367E6"
        @click="onSave"
      >Save Sleep
        <v-icon right dark>cloud_upload</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    data () {
      return {
        busy: false,
        valid: true,
        timezones: [
          {label: 'Eastern', value: '-5'},
          {label: 'Central', value: '-6'},
          {label: 'Mountain', value: '-7'},
          {label: 'Pacific', value: '-8'},
          {label: 'Alaska', value: '-9'},
          {label: 'Hawaii-Aleutian', value: '-10'}
        ],
        piggySleep: {},
        rules: {
          wakeupTimeRequired: value => !this.piggySleep.enabled || value ? true : 'Wakeup time is required.',
          sleepTimeRequired: value => !this.piggySleep.enabled || value ? true : 'Sleep time is required.',
          wakeupBeforeSleep: () => !this.piggySleep.enabled || this.piggySleep.wakeupTime < this.piggySleep.sleepTime ? true : 'Wakeup time must be before Sleep time.',
          timezoneRequired: value => !this.piggySleep.enabled || value ? true : 'Timezone is required.'
        }
      }
    },
    computed: {
      ...mapState(['device']),
    },
    methods: {
      ...mapActions(['savePiggySleep', 'displayMessage']),
      async onSave() {
        this.busy = true;
        if (this.$refs.form.validate()) {
          if (await this.savePiggySleep(this.piggySleep)){
            this.displayMessage({ text: 'Sleep settings saved', color: 'info' });
          } else {
            this.displayMessage({ text: 'Sleep settings save failed', color: 'error' });
          }
        }
        this.busy = false;
      },
      initialize() {
        if (this.device.piggySleep) {
          this.piggySleep = this.device.piggySleep;
        } else {
          this.piggySleep = {
            enabled: false,
            wakeupTime: null,
            sleepTime: null,
            timezone: null,
            observeDaylightSavings: true
          }
        }
      }
    },
    mounted() {
      this.initialize();
    }
  };
</script>
