<template>
    <v-row 
      v-intersect.once="updateLessonStatusCompleted"
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
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6  mx-2 mb-1">
              Our Family's Goal Catalog:
            </p>
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
                    <v-list-item-avatar class="mr-0 font-weight-bold"> 
                      <span>{{i+1}}</span>
                    </v-list-item-avatar>
                    <v-list-item-avatar  >
                      <v-icon color="#9367E6">
                        mdi-view-headline
                      </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content class="ml-3"> 
                      <span >{{element.name}}</span>
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
    },
    updateLessonStatusCompleted(entries) {
      this.$emit('lessonComplete', entries)
    }
  },
  mounted() {
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
