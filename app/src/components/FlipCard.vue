<template>
  <div v-bind:class="flipped ? 'flip-container flipped': 'flip-container'" >
    <div class="flipper bouncyCard" >
      <v-card 
        class="front pa-3" 
        @click="flipped=true"
      >
        <v-img 
          :src="require(`@/assets/${cardInfo.frontImg}`)" 
          :lazy-src="require(`@/assets/${cardInfo.frontImg}`)" 
          aspect-ratio="1"
          class="mb-2 d-flex align-center justify-center"
        />
        <p class="text-center mb-0">{{cardInfo.frontText}}</p>
      </v-card>
      <v-card 
        class="back d-flex align-center justify-center" 
        :style="{ backgroundColor: cardInfo.backColor}"
        @click="flipped=false"
        height="100%"
      >
        <p class="text-h5 white--text mb-0">{{cardInfo.backText}}</p>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipCard",
  props: {
    cardInfo: Object
  },
  data() {
    return {
      flipped: false
    };
  }
};
</script>

<style type='text/css' scoped>

.bouncyCard{
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-name: bounce-7;
      animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
  }
  @keyframes bounce-7 {
      0%   { transform: scale(1,1)      translateY(0); }
      4%  { transform: scale(1.01,.99)   translateY(0); }
      8%  { transform: scale(.99,1.01)   translateY(-10px); }
      12%  { transform: scale(1.03,.97) translateY(0); }
      16%  { transform: scale(1,1)      translateY(-7px); }
      20%  { transform: scale(1,1)      translateY(0); }
      100% { transform: scale(1,1)      translateY(0); }
}

i.frontFlipBtn,
i.backFlipBtn {
    position:absolute; 
    right: 20px; 
    top: 20px;
    color:#FFFFFF;
}
i.backFlipBtn {
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
}
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
.flip-container {
  min-height: 120px;
}
.flipper {
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  position: relative;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}
.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.front {
  z-index: 2;
}
</style>