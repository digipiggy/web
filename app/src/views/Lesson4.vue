<template>
  <v-container fluid>
    <lessonTitle 
      :isDesktop="isDesktop"
      :titlePage="lesson4.titlePage"
    />
    <template
      v-for="(page, i) in lesson4.contentPages"
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
      <contentPageTextWithSideImage
        v-if="page.type == 'contentPageTextWithSideImage'"
        :key="`page-${i}`"
        :isDesktop="isDesktop"
        :lessonPage="page"
      />
      <contentPageSortingGame
        v-if="page.type == 'contentPageSortingGame'"
        :key="`page-${i}`"
        :isDesktop="isDesktop"
        :lessonPage="page"
      />
      <contentPageTakeAction
        v-if="page.type == 'contentPageTakeAction'"
        :key="`page-${i}`"
        :isDesktop="isDesktop"
        :lessonPage="page"
        @lessonComplete="lessonComplete"
      />

      <!-- Page Divider for Mobile -->
      <v-row 
        v-if="i < lesson4.contentPages.length - 1"
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
import ContentPageTextWithSideImage from '@/components/lessons/ContentPageTextWithSideImage';
import ContentPageSortingGame from '@/components/lessons/ContentPageSortingGame';
import ContentPageTakeAction from '@/components/lessons/ContentPageTakeAction';
import Lesson4 from '@/data/lessons/lesson4'

export default {
  name: 'Lesson4',
  components: {
    lessonTitle: LessonTitle,
    contentPageBasicText: ContentPageBasicText,
    contentPageQuestions: ContentPageQuestions,
    contentPageGoalSelector: ContentPageGoalSelector,
    contentPageTextWithSideImage: ContentPageTextWithSideImage,
    contentPageSortingGame: ContentPageSortingGame,
    contentPageTakeAction: ContentPageTakeAction
  },
  data() {
    return {
      lesson4: Lesson4,
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
            lesson4: {
              ... this.device.status.lessons.lesson4,
              started: true
            }
          }
        }
      }

      if (await !this.updateDevice(device)) {
        console.log("Error updating device with lesson status")
      }
    },
    async lessonComplete(entries) {
      if (entries[0].isIntersecting){
        if (this.device.status.lessons.lesson4.completed == false) {
          const device = this.device
          device.status.lessons.lesson4.completed = true;
          if (await !this.updateDevice(device)) {
            console.log("Error updating device with lesson completion")
          }
        }
      }
    }
  },
  // mounted() {
  //   // update the lesson 3 status to started on load if it's false
  //   const hasLessonStarted = this.device.status.lessons.lesson4.started;
  //   if (hasLessonStarted === false) this.updateLessonStatusStarted();
  // },

};
</script>