<template>
  <!-- <v-container fluid class="wrapper"> -->
    <div >
      <h3>Piggy</h3>
      <v-card>
        <!-- <v-container fluid class="wrapper"> -->
            <!-- <v-layout align-start justify-center> -->
                <!-- <v-flex>  xs3 offset-xs9 align-end (moved to end of column) -->

                    <!-- <v-layout column md="12"> -->

                        <v-card class="coinstack"
                            @drop='onDrop($event,1)'
                            @dragover.prevent
                            @dragenter.prevent
                        >
                            <div 
                                v-for="(coin, i) in stackCoin" 
                                :key="i"
                                draggable
                                @dragstart="startDrag($event, coin)"
                            >
                                {{coin.title}}
                                <!-- <v-img
                                    src="../assets/CoinStack.svg">
                                </v-img> -->
                            </div>
                        </v-card>
                        <v-card class="piggi"
                            @drop='onDrop($event,2)'
                            @dragover.prevent
                            @dragenter.prevent
                        >
                                <div 
                                    v-for="(coin, i) in piggyCoin" 
                                    :key="i"
                                    class="acoin"
                                    draggable
                                    @dragstart="startDrag($event, coin)"
                                >
                                    <v-img class="acoin" src="../assets/Coin.svg" contain></v-img>
                                    {{coin.title}}
                                    <!-- <v-img
                                        src="../assets/CoinStack.svg">
                                    </v-img> -->
                                </div>
                            <!-- REMOVE "piggi" class to v-card and include v-img here instead
                                to have the image take render appropriately
                                <v-img contain
                                src="../assets/Piggy.svg">
                            </v-img> -->
                        </v-card>

                    <!-- </v-layout> -->

                <!-- </v-flex> -->
            <!-- </v-layout> -->
        <!-- </v-container> -->
      </v-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
                items: [
                    {
                        id: 1,
                        title: 'Item A',
                        list: 1
                    },
                    {
                        id: 2,
                        title: 'Item b',
                        list: 2
                    },
                    {
                        id: 3,
                        title: 'Item c',
                        list: 1
                    }
                ],
			};
		},
        computed: {
            stackCoin () {
                return this.items.filter(item => item.list === 1)
            },
            piggyCoin () {
                return this.items.filter(item => item.list === 2)
            }
        },
		methods: {
            startDrag: (evt, item) => {
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
                evt.dataTransfer.setData('itemID', item.id)
            },
            onDrop (evt, list) {
                const itemID = evt.dataTransfer.getData('itemID')
                const item = this.items.find(item => item.id == itemID)
                item.list = list
            },
			handleDrop(toList, data) {
				const fromList = data.list;
				if (fromList) {
					toList.push(data.item);
					fromList.splice(fromList.indexOf(data.item), 1);
                    // change background to image
                    alert(`IN PIGGY You dropped with data: ${JSON.stringify(data)}`);
                    toList.sort((a, b) => a > b);
				}
			},
		},
	};
</script>

<style scoped>
    .acoin {
        /* display: inline-block;
        width: auto;
        height: auto; */
        max-height: 50px;
    }
    .piggi {
        top: 0;
        /* left: 0; */
        /* width: 880px;
        height: 100%; */
        height: 100vh;
        background-image: url(../assets/Piggy.svg);
        /* background-color: darkgreen; */
    }
   .coinstack {
        top: 0;
        left: 0;
        height: 100vh;
        background-image: url(../assets/CoinStack.svg);
        background-size: contain;
        background-color: darkgoldenrod;
    }

</style>