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
      <!--TODO component-ize the contents of the if/else here-->
      <!--newTitlePage-->
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
              fontSize: isDesktop ? '140px' : '75px'
            }">
            {{titlePage.subtitle}}
          </p>
        </v-col>
        <v-spacer>
        </v-spacer>
        <v-col
          cols="12"
        >
          <v-img 
            max-width="200px"
            class="mx-auto"
            style="cursor: pointer;"
            :src="require(`@/assets/startCoin.png`)" 
            @click="$vuetify.goTo('#page1')"
          ></v-img>
        </v-col>
        <v-spacer class="">
        </v-spacer>
        <v-col
          cols="12"
        >
          <p class="text-h6 text-center ">
            <v-icon size="40" :color="titlePage.textPrimaryColor">mdi-timer</v-icon> {{titlePage.readTime}} mins
          </p>
          <p class="text-h6 text-center">
            <v-icon size="40" :color="titlePage.textPrimaryColor">fab fa-readme</v-icon> {{titlePage.audience}}
          </p>
          <p class="text-h6 text-center">
            <v-icon 
              class="bouncyArrow"
              size="70"
              @click="$vuetify.goTo('#page1')"
              :color="titlePage.textPrimaryColor" 
            >mdi-chevron-down</v-icon>
          </p>
        </v-col>
      </template>
    
    </v-row>

    <!-- Page1 How To Earn-->
    <v-row 
      :style="{
        minHeight: '100vh',
        color: textPage1.textPrimaryColor,
      }"
      class=" flex-column"
      id="page1"
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
              <v-icon color="#A0E667" size="30" >{{textPage1.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{textPage1.instructions}}</span>
                </template>
                <span>{{textPage1.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{textPage1.title}}
            </p>
            <div class="mb-0 ">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-6"
                v-for="paragraph in textPage1.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light" style="color: black">
              {{textPage1.imageTitle}}
            </p>
            <v-img 
              :src="require(`@/assets/${textPage1.backgroundImage}`)" 
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page2')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Divider for Mobile -->
    <v-row 
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page2 Rex's Earning Philosophy--> 
    <v-row 
      :style="{
        minHeight: '100vh',
        color: page2.textPrimaryColor,
        backgroundImage: isDesktop ? `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${page2.backgroundImage}`)})` : '',
        backgroundPosition: 'right',
        position: 'relative',
      }"
      class=" flex-column"
      id="page2"
    >
      <v-spacer>
      </v-spacer>
      <v-col
        cols="12"
        md="4"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-md-3 mb-md-8" style="color: black">
          <v-icon color="#A0E667" size="30" >{{page2.instructionIcon}}</v-icon>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
              > {{page2.instructions}}</span>
            </template>
            <span>{{page2.instructionsTT}}</span>
          </v-tooltip>
        </p>
        <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
          {{page2.title}}
        </p>
        <div class="mb-8 mb-md-14">
          <p 
            class="text-body-1 text-md-h6 font-weight-light mb-6"
            v-for="paragraph in page2.text"
            :key="paragraph"
          >
            {{paragraph}}
          </p>
        </div>
      </v-col>
      <v-col v-if="!isDesktop">
        <v-img 
          :src="require(`@/assets/${page2.backgroundImage}`)" 
        ></v-img>       
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0 ">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo(isEarningAllowance ? '#page5' : '#page3')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Divider for Mobile -->
    <v-row 
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page3 How Rex Earns (tasks and behaviors) -->
    <v-row 
      v-if="isEarningIncentive || isEarningAllowanceAndIncentive"
      :style="{
        minHeight: '100vh',
        color: page3.textPrimaryColor,
      }"
      class=" flex-column"
      id="page3"
      align="center"
    >
      <v-spacer>
      </v-spacer>
      <v-col cols="12" >
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
              <v-icon color="#A0E667" size="30" >{{page3.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{page3.instructions}}</span>
                </template>
                <span>{{page3.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{page3.title}}
            </p>
            <div class="mb-8 mb-md-14">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-6"
                v-for="paragraph in page3.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>

            <div class="mb-4 mb-md-6">
              <p 
                class="text-body-1 text-md-h6 font-weight-regular mb-0"
              >
                Tasks - Doing Helpful Things:
              </p>
              <v-chip
                class="ma-2 white--text"
                color="#48A182"

              >
                Vacuuming family room
              </v-chip>
              <v-chip
                class="ma-2 white--text"
                color="#48A182"
              >
                Clearing the table
              </v-chip>
              <v-chip
                class="ma-2 white--text"
                color="#48A182"
              >
                Packing school snack
              </v-chip>
            </div>

            <div class="">
              <p 
                class="text-body-1 text-md-h6 font-weight-regular mb-0"
              >
                Behaviors - Making Good Choices
              </p>
              <v-chip
                class="ma-2 white--text"
                color="#48A182"

              >
                Show gratitude
              </v-chip>
              <v-chip
                class="ma-2 white--text"
                color="#48A182"
              >
                Help with asking
              </v-chip>
              <v-chip
                class="ma-2 white--text"
                color="#48A182"
              >
                Mindfulness
              </v-chip>
            </div>

          </v-col>
          <v-col
            v-if="isDesktop"
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light" style="color: black">
              {{page3.imageTitle}}
            </p>
            <v-img 
              :src="require(`@/assets/${page3.backgroundImage}`)" 
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page4')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Divider for Mobile -->
    <v-row 
      v-if="isEarningIncentive || isEarningAllowanceAndIncentive"
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page4 How Rex is Evaluated-->
    <v-row 
      v-if="isEarningIncentive || isEarningAllowanceAndIncentive"
      :style="{
        minHeight: '100vh',
        color: page4.textPrimaryColor,
      }"
      class=" flex-column"
      id="page4"
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
              <v-icon color="#A0E667" size="30" >{{page4.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{page4.instructions}}</span>
                </template>
                <span>{{page4.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{page4.title}}
            </p>
            <div class="mb-8 mb-md-14">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-6"
                v-for="paragraph in page4.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light" style="color: black">
              {{page4.imageTitle}}
            </p>
            <v-img 
              
              :src="require(`@/assets/${page4.backgroundImage}`)" 
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page5')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Divider for Mobile -->
    <v-row
      v-if="isEarningIncentive || isEarningAllowanceAndIncentive"
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page5 How Rex is Rewarded-->
    <v-row 
      :style="{
        minHeight: '100vh',
        color: page5.textPrimaryColor,
      }"
      class=" flex-column"
      id="page5"
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
              <v-icon color="#A0E667" size="30" >{{page5.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{page5.instructions}}</span>
                </template>
                <span>{{page5.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{page5.title}}
            </p>
            <div class="mb-8 mb-md-14">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-6"
                v-for="paragraph in page5.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>
            <v-img 
              class="mx-15 my-2 my-md-15"
              :src="require(`@/assets/${page5.pigImage}`)" 
            ></v-img>
            
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-5 pa-md-15"
          >
            <p class="text-body-1 font-weight-light" style="color: black">
              {{page5.imageTitle}}
            </p>
            <v-img 
              :src="require(`@/assets/${page5.backgroundImage}`)" 
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page5a')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Divider for Mobile -->
    <v-row 
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page5a Your Turn Title-->
    <v-row 
      :style="{
        minHeight: '100vh',
        color: page5a.textPrimaryColor,
      }"
      class=" flex-column"
      id="page5a"
      align="center"
    >
      <v-spacer>
      </v-spacer>
      <v-col cols="12" >
        <v-row  align="center">
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
              <v-icon color="#A0E667" size="30" >{{page5a.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{page5a.instructions}}</span>
                </template>
                <span>{{page5a.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{page5a.title}}
            </p>
            <div class="mb-0 mb-md-8">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-0"
                v-for="paragraph in page5a.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>
            
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light" style="color: black">
              {{page5a.imageTitle}}
            </p>
            <v-img 
              :src="require(`@/assets/${page5a.backgroundImage}`)" 
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo(isEarningIncentive || isEarningAllowanceAndIncentive ? '#page7' : '#page6')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Divider for Mobile -->
    <v-row 
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page7 Your Turn: Update Tasks and Behaviors-->
    <v-row 
      v-if="isEarningIncentive || isEarningAllowanceAndIncentive"
      :style="{
        minHeight: '100vh',
        color: textPage7Incentive.textPrimaryColor,
      }"
      class=" flex-column"
      id="page7"
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
              <v-icon color="#A0E667" size="30" >{{textPage7Incentive.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{textPage7Incentive.instructions}}</span>
                </template>
                <span>{{textPage7Incentive.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{textPage7Incentive.title}}
            </p>
            <div class="mb-3 ">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-0"
                v-for="paragraph in textPage7Incentive.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <div 
              class="mb-10"
              v-for="(kid, kidIndex) in device.kids"
              :key="`kidTasks&Behaviors-${kidIndex}`"
            >
              <v-row>
                <v-col cols="12" >
                  <p style="color: #191919">Review and Modify tasks and/or behaviors for {{kid.name}}</p>
                  <taskchips
                    :defaultChips="kid.tasks"
                    :kid="kid"
                    @selectTask="selectTask"
                  />
                </v-col>
              </v-row>
            </div>
            <v-btn 
              @click="saveTasksAndBehaviors"
              class="white--text"
              color="#9367E6"
              :loading="loading"
            >
              Save Tasks and Behaviors
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>

          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo(isEarningAllowance || isEarningAllowanceAndIncentive ? '#page6' : '#page8')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Divider for Mobile -->
    <v-row
      v-if="isEarningIncentive || isEarningAllowanceAndIncentive"
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page6 Your Turn: Choose Allowance-->
    <v-row 
      v-if="isEarningAllowance || isEarningAllowanceAndIncentive"
      :style="{
        minHeight: '100vh',
        color: textPage6Allowance.textPrimaryColor,
      }"
      class=" flex-column"
      id="page6"
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
              <v-icon color="#A0E667" size="30" >{{textPage6Allowance.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{textPage6Allowance.instructions}}</span>
                </template>
                <span>{{textPage6Allowance.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{textPage6Allowance.title}}
            </p>
            <div class="mb-8 mb-md-14">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-6"
                v-for="paragraph in textPage6Allowance.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>
              <v-select
                :items="allowanceOptions"
                v-model="allowanceAmount"
                label="Coins earned per week"
                outlined
                background-color="#FFFFFF"
              ></v-select>
              <v-btn 
                @click="saveAllowance"
                class="white--text"
                color="#9367E6"
                :loading="loading"
              >
                Save Allowance
                <v-icon right dark>cloud_upload</v-icon>
              </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="px-15"
          >
            <p class="text-body-1 font-weight-light" style="color: black">
              {{textPage6Allowance.imageTitle}}
            </p>
            <v-img 
              :src="require(`@/assets/${textPage6Allowance.backgroundImage}`)" 
            ></v-img>
          </v-col>

        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page8')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Divider for Mobile -->
    <v-row 
      v-if="isEarningAllowance || isEarningAllowanceAndIncentive"
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page8 Your Turn: fill out goal sheet-->
    <v-row 
      :style="{
        minHeight: '100vh',
        color: page8.textPrimaryColor,
      }"
      class=" flex-column"
      id="page8"
      align="center"
    >
      <v-spacer>
      </v-spacer>
      <v-col cols="12" >
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
              <v-icon color="#A0E667" size="30" >{{page8.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{page8.instructions}}</span>
                </template>
                <span>{{page8.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{page8.title}}
            </p>
            <div class="mb-8 mb-md-14">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-6"
                v-for="paragraph in page8.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>
            <div class="mb-8 mb-md-14">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-6"
              >
                Here's an example of {{device.kids[0].name || 'Kid 1\'s'}}'s Earning Plan:
              </p>
            </div>

            <div v-if="isEarningAllowance">
              <div class="mb-3 mb-md-4" >
                <p class="white--text text-center text-h4" style="background-color: #9367E6; border-radius: 50%; width: 40px; height: 40px; display: inline-block;">
                  1
                </p>
                <p 
                  class="text-body-1 text-md-h6 font-weight-light mb-6 ml-3"
                  style="display: inline-block"
                >
                  <b>I would like to buy:</b> {{device.goals[0].name}}
                </p>
              </div>
              <div class="mb-3 mb-md-4" >
                <p class="white--text text-center text-h4" style="background-color: #9367E6; border-radius: 50%; width: 40px; height: 40px; display: inline-block;">
                  2
                </p>
                <p 
                  class="text-body-1 text-md-h6 font-weight-light mb-6 ml-3"
                  style="display: inline-block"
                >
                  <b>By Doing:</b> Cross out this section
                </p>
              </div>
              <div class="mb-3 mb-md-4" >
                <p class="white--text text-center text-h4" style="background-color: #9367E6; border-radius: 50%; width: 40px; height: 40px; display: inline-block;">
                  3
                </p>
                <p 
                  class="text-body-1 text-md-h6 font-weight-light mb-6 ml-3"
                  style="display: inline-block"
                >
                  <b>I receive:</b> {{device.settings.goalAllowance}} Piggles Coin(s)
                </p>
              </div>
            </div>

            <div v-if="isEarningIncentive">
              <div class="mb-3 mb-md-4" >
                <p class="white--text text-center text-h4" style="background-color: #9367E6; border-radius: 50%; width: 40px; height: 40px; display: inline-block;">
                  1
                </p>
                <p 
                  class="text-body-1 text-md-h6 font-weight-light mb-6 ml-3"
                  style="display: inline-block"
                >
                  <b>I would like to buy:</b> {{device.goals[0].name}}
                </p>
              </div>
              <div class="mb-3 mb-md-4" >
                <p class="white--text text-center text-h4" style="background-color: #9367E6; border-radius: 50%; width: 40px; height: 40px; display: inline-block;">
                  2
                </p>
                <p 
                  class="text-body-1 text-md-h6 font-weight-light mb-6 ml-3"
                  style="display: inline-block"
                >
                  <b>By Doing:</b> {{device.kids[0].tasks[0]}}
                </p>
              </div>
              <div class="mb-3 mb-md-4" >
                <p class="white--text text-center text-h4" style="background-color: #9367E6; border-radius: 50%; width: 40px; height: 40px; display: inline-block;">
                  3
                </p>
                <p 
                  class="text-body-1 text-md-h6 font-weight-light mb-6 ml-3"
                  style="display: inline-block"
                >
                  <b>I receive:</b> Cross out this section
                </p>
              </div>
            </div>

            <div v-if="isEarningAllowanceAndIncentive">
              <div class="mb-3 mb-md-4" >
                <p class="white--text text-center text-h4" style="background-color: #9367E6; border-radius: 50%; width: 40px; height: 40px; display: inline-block;">
                  1
                </p>
                <p 
                  class="text-body-1 text-md-h6 font-weight-light mb-6 ml-3"
                  style="display: inline-block"
                >
                  <b>I would like to buy:</b> {{device.goals[0].name}}
                </p>
              </div>
              <div class="mb-3 mb-md-4" >
                <p class="white--text text-center text-h4" style="background-color: #9367E6; border-radius: 50%; width: 40px; height: 40px; display: inline-block;">
                  2
                </p>
                <p 
                  class="text-body-1 text-md-h6 font-weight-light mb-6 ml-3"
                  style="display: inline-block"
                >
                  <b>By Doing:</b> {{device.kids[0].tasks[0]}}
                </p>
              </div>
              <div class="mb-3 mb-md-4" >
                <p class="white--text text-center text-h4" style="background-color: #9367E6; border-radius: 50%; width: 40px; height: 40px; display: inline-block;">
                  3
                </p>
                <p 
                  class="text-body-1 text-md-h6 font-weight-light mb-6 ml-3"
                  style="display: inline-block"
                >
                  <b>I receive:</b> {{device.settings.goalAllowance || 2}} Piggles Coin(s)
                </p>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light" style="color: black">
              {{page8.imageTitle}}
            </p>
            <v-img 
              :src="require(`@/assets/${page8.backgroundImage}`)" 
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page9')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Divider for Mobile -->
    <v-row 
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page9 Your Turn: First Goal Contribution-->
    <v-row 
      v-intersect.once="updateLessonStatusCompleted"
      :style="{
        minHeight: '100vh',
        color: textPage9.textPrimaryColor,
      }"
      class=" flex-column"
      id="page9"
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
              <v-icon color="#A0E667" size="30" >{{textPage9.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{textPage9.instructions}}</span>
                </template>
                <span>{{textPage9.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{textPage9.title}}
            </p>
            <div class="mb-8 mb-md-14">
              <p class="text-body-1 text-md-h6 font-weight-light mb-6">
                You've selected {{device.settings.rewardDay}}'s as your Piggles Day.
              </p>
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-6"
                v-for="paragraph in textPage9.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>
            <v-btn
              dark
              to="/goals"
              color="#48A182"
              elevation="4"
            >
              Goals
              <v-icon right>
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="px-16"
          >
            <p class="text-body-1 font-weight-light" style="color: black">
              {{textPage9.imageTitle}}
            </p>
            <v-img 
              :src="require(`@/assets/${textPage9.backgroundImage}`)" 
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
    </v-row>

  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TaskChips from '@/components/TaskChips';

const titlePage = {
  type: "newTitlePage",
  title: "Lesson 2",
  subtitle: "Earning",
  readTime: "15",
  audience: "Family reads together.",
  backgroundImage: "Lesson2Title.png",
  backgroundImageMobile: "Lesson2Title.png",
  textPrimaryColor: "#FFFFFF"
}

// Page1 How To Earn
const textPage1 = {
  type: "newTextPage",
  title: "How do we earn?",
  text: [
    "Adults earn money in exchange for doing a job. That’s how they pay for things they need and want.",
    "Grown-ups make a plan with whoever is paying them at their job, and agree on how much they will earn. They also agree on when they will be paid."
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'PigglesBankCoins.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

// Page2 Rex's Earning Philosophy
const textPage2Allowance = {
  type: "newTextPage",
  title: "Rex's Allowance",
  text: [
    "Mama Piggle offers to help Rex reach his pirate costume goal by giving him an allowance of 2 coins each week.",
    "He can redeem his coins for the costume when he has saved enough.",
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'RexEarningAllowance.jpg',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const textPage2Incentive = {
  type: "newTextPage",
  title: "Rex wants to earn too!",
  text: [
    "Mama Piggle offers to help Rex earn enough coins for his pirate costume goal.",
    "Each week, in exchange for good behaviors and completing tasks, Mama will award Rex with coins.",
    "Together, Mama Piggle and Rex agree on what Rex could do to earn coins. Let’s see what they decided."
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'RexEarningBoth.jpg',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const textPage2Both = {
  type: "newTextPage",
  title: "REX WANTS TO EARN TOO!",
  text: [
    "Mama Piggle offers to help Rex earn enough coins for his pirate costume goal.",
    "Each week, Mama will give Rex coins. He will receive an allowance of one coin each week, but he can also receive extra coins in exchange for good behaviors and completing tasks.",
    "Together, Mama Piggle and Rex agree on what Rex could do to earn extra coins. Let’s see what they decided."
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'RexEarningBoth.jpg',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

// Page3 How Rex Earns
const textPage3Incentive = {
  type: "newTextPage",
  title: "Tasks and behaviors",
  text: [
    "Mama Piggle tells Rex he will earn coins for being consistent (making good choices regularly over time) and doing helpful things like vacuuming the family room.",
    "She makes a deal with Rex to work on the  tasks and behaviors below throughout the week."
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'MommaPiggleHeadshot.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const textPage3Both = {
  type: "newTextPage",
  title: "Tasks and behaviors",
  text: [
    "Mama Piggle tells Rex he will earn coins for being consistent (making good choices regularly over time) and doing helpful things like vacuuming the family room.",
    "She makes a deal with Rex to work on the  tasks and behaviors below throughout the week."
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'MommaPiggleHeadshot.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

// Page4 How Rex is Evaluated
// const textPage4Allowance = {
//   type: "newTextPage",
//   title: "Piggles Day, how Rex is evaluated",
//   text: [
//     "Allowance Variation",
//   ],
//   audience: "kid",
//   instructions: "Read Aloud",
//   instructionsTT: "Read this section out loud with your kid(s).",
//   instructionIcon: "fab fa-readme",
//   backgroundImage: 'RexEarningPlan-Allowance.jpg',
//   imageTitle: 'Rex\'s Goal & Earning Plan:',
//   backgroundColor: "#FFFFFF",
//   textPrimaryColor: "#9367E6"
// }
const textPage4Incentive = {
  type: "newTextPage",
  title: "PIGGLES DAY IS HERE!",
  text: [
    "On their Piggles Day, Mama and Rex use a Goal & Earning Plan to talk about the week.",
    "How did Rex do on his tasks and behaviors?",
    "Rex had a chance to earn up to 3 coins that week. Because he consistently made good choices, but didn’t do all of his helpful tasks, she decides to give him 2 Piggles Coins for doing a Great Job that week. "
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'RexEarningPlan-Incentive.jpg',
  imageTitle: 'Rex\'s Goal & Earning Plan:',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const textPage4Both = {
  type: "newTextPage",
  title: "PIGGLES DAY IS HERE!",
  text: [
    "On their Piggles Day, Mama and Rex use a Goal and Earning Plan to talk about the week.",
    "How did Rex do on his tasks and behaviors?",
    "Rex had a chance to earn up to 3 additional coins that week. Because he consistently made good choices, but didn’t do all of his helpful tasks, she decides to give him 1 Piggles Coin for doing a Good Job that week. ",
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'RexEarningPlan-Both.jpg',
  imageTitle: 'Rex\'s Goal & Earning Plan:',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

// Page5 How Rex is Rewarded
const textPage5Allowance = {
  type: "newTextPage",
  title: "Piggles Day is here!",
  text: [
    "On their Piggle Day, Mama and Rex look at their Goal and Earning Plan.",
    "Rex receives 2 Piggle Coins! He can now add them to his goal in his DigiPig bank and watch it light up!"
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'RexEarningPlan-Allowance.jpg',
  pigImage: 'DigiPigBlueLights.gif',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const textPage5Incentive = {
  type: "newTextPage",
  title: "LIGHT IT UP",
  text: [
    "Rex earns 2 Piggles Coins, which he can now add to his goal in his DigiPig bank!",
    "Then he watches the DigiPig light up!",
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'RexGoalBank.png',
  pigImage: 'DigiPigBlueLightsTransparent.gif',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const textPage5Both = {
  type: "newTextPage",
  title: "LIGHT IT UP",
  text: [
    "Rex earns 2 Piggles Coins, which he can now add to his goal in his DigiPig bank!",
    "Then he watches the DigiPig light up!",
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'RexGoalBank.png',
  pigImage: 'DigiPigBlueLightsTransparent.gif',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

const page5a = {
  type: "newTextPage",
  title: "Now it’s your turn!",
  text: [
    "Let's setup your Goal & Earning Plan. Look in your “Lesson Materials” envelope for a blank Goals & Earning Plan page.",
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionsTT: "Pick your goal.",
  instructionIcon: "fas fa-tasks",
  backgroundImage: 'EarningPlan.jpg',
  imageTitle: 'Printed Goal & Earning Plan:',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

// Page6 Your Turn: Choose Allowance
const textPage6Allowance = {
  type: "newTextPage",
  title: "Allowance",
  text: [
    "Choose your family’s weekly allowance of Piggles Coins.",
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionsTT: "Set your allowance.",
  instructionIcon: "fas fa-tasks",
  backgroundImage: 'RexStanding.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

// Page7 Your Turn: Update Tasks and Behaviors
const textPage7Incentive = {
  type: "newTextPage",
  title: "Tasks and Behaviors",
  text: [
    "Here are the tasks and behaviors that you are going to do to earn coins towards your goal. Let’s review them together.",
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionsTT: "Review your tasks and behaviors",
  instructionIcon: "fas fa-tasks",
  backgroundImage: 'TaskBehaviorSelector.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

// Page8 Your Turn: fill out goal sheet
const textPage8Allowance = {
  type: "newTextPage",
  title: "GOAL & EARNING PLAN",
  text: [
    "Grab a blank Goal & Earning Plan from your Piggles Box for each kid and fill in the sections below.",
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionsTT: "Pick your goal.",
  instructionIcon: "fas fa-tasks",
  backgroundImage: 'EarningPlanAllowance.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const textPage8Incentive = {
  type: "newTextPage",
  title: "GOAL & EARNING PLAN",
  text: [
    "Grab a blank Goal & Earning Plan from your Piggles Box for each kid and fill in the sections below.",
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionsTT: "Pick your goal.",
  instructionIcon: "fas fa-tasks",
  backgroundImage: 'EarningPlanIncentive.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const textPage8Both = {
  type: "newTextPage",
  title: "GOAL & EARNING PLAN",
  text: [
    "Grab a blank Goal & Earning Plan from your Piggles Box for each kid and fill in the sections below.",
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionsTT: "Pick your goal.",
  instructionIcon: "fas fa-tasks",
  backgroundImage: 'EarningPlan.jpg',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

// Page9 Your Turn: First Goal Contribution
const textPage9 = {
  type: "newTextPage",
  title: "YOUR PIGGLES DAY",
  text: [
    "As a reward for completing Lesson 2, head on over to the Goals page and add your first Piggles Coin to your goals! ",
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionsTT: "Pick your goal.",
  instructionIcon: "fas fa-tasks",
  backgroundImage: 'PigglesCoin1.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

export default {
  name: 'Lesson2',
  components: {
    taskchips: TaskChips,
  },

  data() {
    return {
      goals: [],
      titlePage,
      textPage1,
      textPage2Allowance,
      textPage2Incentive,
      textPage2Both,
      textPage3Incentive,
      textPage3Both,
      // textPage4Allowance,
      textPage4Incentive,
      textPage4Both,
      textPage5Allowance,
      textPage5Incentive,
      textPage5Both,
      textPage6Allowance,
      textPage7Incentive,
      textPage8Allowance,
      textPage8Incentive,
      textPage8Both,
      textPage9,
      page5a,
      loading: false,
      allowanceOptions:[
        1,
        2,
        3,
        4
      ],
      allowanceAmount: null,
    }
  },
  computed: {
    ...mapState(['device']),
    isDesktop: function () {
        let { name } = this.$vuetify.breakpoint;
        return name == 'md' || name == 'lg' || name == 'xl';
    },
    goalCatalog: function () {
      const goalCatalog = this.device.goalCatalog.map(goal => goal.name)
      return goalCatalog
    },
    activeGoals: function () {
      return this.goals.filter(goal => !!goal.kidsName)
    },
    isEarningAllowance: function() {
      return this.device.settings.earningSystem == 'Allowance'
    },
    isEarningIncentive: function() {
      return this.device.settings.earningSystem == 'Incentive'
    },
    isEarningAllowanceAndIncentive: function() {
      return this.device.settings.earningSystem == 'Allowance + Incentive'
    },
    page2: function() {
      if (this.device.settings.earningSystem == 'Allowance'){
        return this.textPage2Allowance
      } else if (this.device.settings.earningSystem == 'Incentive'){
        return this.textPage2Incentive
      } else {
        return this.textPage2Both
      }
    },
    page3: function() {
      if (this.device.settings.earningSystem == 'Incentive'){
        return this.textPage3Incentive
      } else {
        return this.textPage3Both
      }
    },
    page4: function() {
      // if (this.device.settings.earningSystem == 'Allowance'){
      //   return this.textPage4Allowance
      // } else 
      if (this.device.settings.earningSystem == 'Incentive'){
        return this.textPage4Incentive
      } else {
        return this.textPage4Both
      }
    },
    page5: function() {
      if (this.device.settings.earningSystem == 'Allowance'){
        return this.textPage5Allowance
      } else if (this.device.settings.earningSystem == 'Incentive'){
        return this.textPage5Incentive
      } else {
        return this.textPage5Both
      }
    },
    page8: function() {
      if (this.device.settings.earningSystem == 'Allowance'){
        return this.textPage8Allowance
      } else if (this.device.settings.earningSystem == 'Incentive'){
        return this.textPage8Incentive
      } else {
        return this.textPage8Both
      }
    }
  },
  methods: {
    ...mapActions(['updateDevice', 'displayMessage']),

    // task functions
    selectTask(data) {
      const {kid, task} = data;
      // get the kid from the array of kids
      const selectedKid = this.device.kids.find(k => k.name == kid.name);
      // then update their tasks
      if (selectedKid.tasks.includes(task)) {
        selectedKid.tasks = selectedKid.tasks.filter((value) => value != task)
      } else {
        selectedKid.tasks.push(task);
      }
    },
    async saveTasksAndBehaviors() {
      this.loading = true;
      const device = {
        deviceId: this.device.deviceId,
        deviceCode: this.device.deviceCode,
        piggySleep: this.device.piggySleep,
        kids: this.device.kids,
        settings: this.device.settings,
        goalCatalog: this.device.goalCatalog,
        status: this.device.status,
        goals: this.device.goals
      };

      if (await this.updateDevice(device)) {
        this.displayMessage({ text: 'Goals saved', color: 'info' });
      } else {
        this.displayMessage({ text: 'Failed to save goals', color: 'error' });
      }

      this.loading = false;
    },
    async saveAllowance() {
      this.loading = true;

      const device = {
        deviceId: this.device.deviceId,
        deviceCode: this.device.deviceCode,
        piggySleep: this.device.piggySleep,
        kids: this.device.kids,
        settings: {
          ...this.device.settings,
          goalAllowance: this.allowanceAmount
        },
        goalCatalog: this.device.goalCatalog,
        status: this.device.status,
        goals: this.device.goals
      };

      if (await this.updateDevice(device)) {
        this.displayMessage({ text: 'Goals saved', color: 'info' });
      } else {
        this.displayMessage({ text: 'Failed to save goals', color: 'error' });
      }

      this.loading = false;
    },
    initialize() {
      this.goals = this.device.goals.map((g, i) => {
        const kid = this.device.kids[i];

        if (kid){
          return {
            name: g.name,
            color: g.color,
            enabled: g.enabled,
            percentage: g.percentage * 100,
            total: g.total,
            current: g.current,
            promise: g.promise,
            promises: g.promises,
            kidsName: kid.name,
            kidTasks: kid.tasks,
            kidBehaviors: kid.behaviors,
          };
        } else {
          return {
            name: g.name,
            color: g.color,
            enabled: g.enabled,
            percentage: g.percentage * 100,
            total: g.total,
            current: g.current,
            promise: g.promise,
            promises: g.promises,
            kidsName: "",
            kidTasks: [],
            kidBehaviors: [],
          };
        }
      });
    },
    async updateLessonStatusCompleted(entries) {
      if (entries[0].isIntersecting){
        if (this.device.status.lessons.lesson2.completed == false) {
          const device = this.device
          device.status.lessons.lesson2.completed = true;
          if (await !this.updateDevice(device)) {
            console.log("Error updating device with lesson completion")
          }
        }
      }
    },
    async updateLessonStatusStarted() {
      const device = {
        ...this.device,
        status: {
          ...this.device.status,
          lessons: {
            ...this.device.status.lessons,
            lesson2: {
              ... this.device.status.lessons.lesson2,
              started: true
            }
          }
        }
      }

      if (await !this.updateDevice(device)) {
        console.log("Error updating device with lesson started")
      }
    },
  },
  mounted() {
    this.initialize();
    if (this.device.status.lessons.lesson2.started == false) this.updateLessonStatusStarted();
  },

};
</script>

<style scoped>
  .bouncyArrow {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: bounce-7;
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    }
    @keyframes bounce-7 {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-10px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
  }
</style>