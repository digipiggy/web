<template>
  <v-container 
    class=" snap-container"
    fluid>
    <!-- Title --> 
    <v-row 
      :style="{
        minHeight: '95vh',
        backgroundImage: isDesktop 
          ? `url(${require(`@/assets/${titlePage.backgroundImage}`)})`
          : `url(${require(`@/assets/${titlePage.backgroundImageMobile}`)})`,
        color: titlePage.textPrimaryColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class=" flex-column"
      justify="center"
    >
      <template> 
        <v-col
          cols="12"
          class="mt-9"
        >
          <p class="text-h4 text-md-h3 text-uppercase text-center font-weight-bold mb-0">
            {{titlePage.title}}
          </p>
          <p 
            class="text-uppercase text-center font-weight-bold my-n5 my-md-n9" 
            :style="{
              fontSize: isDesktop ? '140px' : '90px'
            }">
            {{titlePage.subtitle}}
          </p>
        </v-col>
        <v-spacer>
        </v-spacer>
      </template>
    </v-row>
  </v-container>
</template>

<script>

const titlePage = {
  type: "newTitlePage",
  title: "Lesson {x}",
  subtitle: "Coming Soon",
  backgroundImage: "familyKitchen2.png",
  backgroundImageMobile: "familyKitchenMobile.png",
  textPrimaryColor: "#FFFFFF"
}

export default {
  name: 'LessonX',
  components: {},
  computed: {
    isDesktop () {
        let { name } = this.$vuetify.breakpoint;
        return name == 'md' || name == 'lg' || name == 'xl';
    },
  },
  data() {
    return {
      titlePage,
    }
  },
};
</script>
