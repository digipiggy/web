<template>
  <v-container fluid>
    <lessonTitle 
      :isDesktop="isDesktop"
      :titlePage="lesson3.titlePage"
    />
    <template
      v-for="(page, i) in lesson3.contentPages"
    >
      <!-- Display the page contents based on the page type -->
      <contentPageBasicText
        v-if="page.type == 'contentPageBasicText'"
        :key="`page-${i}`"
        :isDesktop="isDesktop"
        :lessonPage="page"
      />
      <contentPageQuestions
        v-if="page.type == 'contentPageQuestions'"
        :key="`page-${i}`"
        :isDesktop="isDesktop"
        :lessonPage="page"
      />
      <contentPageGoalSelector
        v-if="page.type == 'contentPageGoalSelector'"
        :key="`page-${i}`"
        :isDesktop="isDesktop"
        :lessonPage="page"
      />
      <contentPageNextLesson
        v-if="page.type == 'contentPageNextLesson'"
        :key="`page-${i}`"
        :isDesktop="isDesktop"
        :lessonPage="page"
      />

      <!-- Page Divider for Mobile -->
      <v-row 
        v-if="i < lesson3.contentPages.length - 1"
        :key="`divider-${i}`"
        :style="{
          borderBottom: isDesktop ? '' : '3px dashed #AAA'
        }"
      >
      </v-row>      
    </template>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import LessonTitle from '@/components/lessons/LessonTitle';
import ContentPageBasicText from '@/components/lessons/ContentPageBasicText';
import ContentPageQuestions from '@/components/lessons/ContentPageQuestions';
import ContentPageGoalSelector from '@/components/lessons/ContentPageGoalSelector';
import ContentPageNextLesson from '@/components/lessons/ContentPageNextLesson';
import Lesson3 from '@/data/lessons/lesson3'

export default {
  name: 'LessonViewer',
  components: {
    lessonTitle: LessonTitle,
    contentPageBasicText: ContentPageBasicText,
    contentPageQuestions: ContentPageQuestions,
    contentPageGoalSelector: ContentPageGoalSelector,
    contentPageNextLesson: ContentPageNextLesson
  },
  data() {
    return {
      lesson3: Lesson3,
    }
  },
  computed: {
    ...mapState(['device']),
    isDesktop () {
        let { name } = this.$vuetify.breakpoint;
        return name == 'md' || name == 'lg' || name == 'xl';
    }
  },
  methods: {
    ...mapActions(['updateDevice']),
    async updateLessonStatusStarted() {
      const device = {
        ...this.device,
        status: {
          ...this.device.status,
          lessons: {
            ...this.device.status.lessons,
            lesson1: {
              ... this.device.status.lessons.lesson1,
              started: true
            }
          }
        }
      }

      if (await !this.updateDevice(device)) {
        console.log("Error updating device with lesson status")
      }
    },
  },
  mounted() {
    // update the lesson 1 status to started on load if it's false
    if (this.device.status.lessons.lesson1.started == false) this.updateLessonStatusStarted();
  },

};
</script>