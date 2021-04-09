<template>
    <v-row 
      :style="{
        minHeight: '100vh',
        color: lessonPage.textPrimaryColor,
      }"
      class=" flex-column"
      :id="lessonPage.id"
      align="center"
    >
      <v-spacer>
      </v-spacer>
      <v-col cols="12" >
        <v-row align="center">
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
              <v-icon color="#A0E667" size="30" >{{lessonPage.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{lessonPage.instructions}}</span>
                </template>
                <span>{{lessonPage.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{lessonPage.title}}
            </p>
            <div class="mb-0 ">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-6"
                v-for="paragraph in lessonPage.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>
            <v-btn
              :to="lessonPage.ctaLink"
              color="#48A182"
              class="white--text mb-5"
            >
              {{lessonPage.ctaText}}
              <v-icon right dark>{{lessonPage.ctaIcon}}</v-icon>
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >


            <draggable
              v-model="wantItems"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
            >
              <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                <v-card 
                  class="ma-2 pa-3 d-flex" 
                  v-for="(element, i) in wantItems" 
                  :key="element.name"
                  :style="{cursor: drag ? 'grabbing' : 'grab'}"
                >
                    <v-list-item-avatar  >
                      <v-icon color="#9367E6">
                        mdi-view-headline
                      </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content> 
                      <!-- <span style="display: inline-block;">{{i+1}}</span>
                      <span style="display: inline-block;">{{element.name}}</span> -->
                      <v-list-item-title >{{i+1}} {{element.name}}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar class="ml-auto" >
                      <v-img :src="require(`@/assets/common/pigglesCoin${element.coins}.png`)" ></v-img>
                    </v-list-item-avatar>
                </v-card>
              </transition-group>
            </draggable>


          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo(`#${lessonPage.nextPage}`)"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>
</template>

<script>
import draggable from 'vuedraggable';
import { mapState } from 'vuex'

export default {
  name: 'ContentPageSortingCTA',
  components: {
    draggable
  },
  props: {
    isDesktop: Boolean,
    lessonPage: Object
  },
  computed: {
    ...mapState(['device']),
    dragOptions() {
      return {
        animation: 400,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
  },
  data() {
    return {
      wantItems: [],
      drag: false
    };
  },
  methods: {
    fetchGoalCatalog(){
      this.wantItems = this.device.goalCatalog
    }
  },
  mounted() {
    // update the lesson 3 status to started on load if it's false
    // const hasLessonStarted = this.device.status.lessons.lesson4.started;
    // if (hasLessonStarted === false) this.updateLessonStatusStarted();
    this.fetchGoalCatalog();
  },
};
</script>

<style>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
