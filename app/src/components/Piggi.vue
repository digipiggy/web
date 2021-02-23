<template>
    <div>
      <h3>Piggy</h3>
      <v-card>
        <v-container fluid>
            <v-layout align-start justify-center>
                <v-flex full-width>
                    <v-layout column justify-space-between>
                        <v-card width=500px>
                        empty spacer
                        </v-card>
                        <v-card class="wrapper coinstack"
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
                    </v-layout>
                </v-flex>
                <v-flex full-width>
                    <v-card class="wrapper piggi"
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
                                <v-img class="acoin" src="../assets/Coin.svg"></v-img>
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
                </v-flex>
            </v-layout>
        </v-container>
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
                lists: [
                    ['A', 'B', 'C'],
                    ['D', 'E', 'F'],
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
        display: inline-block;
        width: 50%;
        height: 50%;
    }
    .dropPiggi {
        /* display: inline-block; */
		/* vertical-align: bottom; */
		top: 0;
        left: 0;
		width: auto;
		height: auto;
        background: blueviolet;
        background-image: url(../assets/Piggy.svg);
        background-size: contain;
        /* background-position: left, left; */
        background-repeat: no-repeat;
    }
    /* .wrapper {
        position: relative;
    } */
    .piggi {
        top: 0;
        left: 0;
        background-image: url(../assets/Piggy.svg);
        background-size: contain;
        background-color: darkgreen;
    }
   .coinstack {
        top: 75%;
        left: 0;
        background-image: url(../assets/CoinStack.svg);
        background-size: contain;
        background-color: darkgoldenrod;
    }
    .v-icon {
        height: 20px;
        width: 20px;
        background-image: url(../assets/Coin.svg);
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>