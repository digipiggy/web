<template>
    <div class="piggi">
        <div v-for="(list, i) in lists" :key="i">
            <drop class="drop list" @drop="handleDrop(list, ...arguments)">DROP
                <drag v-for="item in list"
                    class="drag"
                    :image="require('@/assets/PT-Coin.png')"
                    :key="item"
                    :class="{ [item]: true }"
                    :transfer-data="{ item: item, list: list, example: 'lists' }">
                        {{ item }}
                DRAG
                </drag>
            </drop>
        </div>
	</div>
</template>

<script>
	import { Drag, Drop } from 'vue-drag-drop';
	export default {
		components: { Drag, Drop },
		data() {
			return {
				lists: [
					['A', 'B', 'C'],
					['D', 'E', 'F'],
				],
			};
		},
		methods: {
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
	.drag {
		display: inline-block;
	}
	.drag.A { background: #aaa; }
	.drag.B { background: #888; }
	.drag.C { background: #666; }
	.drag.D { background: #444; }
	.drag.E { background: #222; }
	.drag.F { background: #000; }
	.drop {
		display: inline-block;
		/* vertical-align: bottom; */
		padding: 15px;
		margin-bottom: 20px;
		width: auto;
		height: 300px;
        background: blueviolet;
        background-image: url(../assets/CoinStack.svg);
        background-size: contain;
        background-position: left, left;
        background-repeat: no-repeat;
	}
    /* .wrapper {
        position: relative;
    }
    .piggi {
        top: 0;
        left: 0;
        height: 380px;
        width: 581;
        background-image: url(../assets/Piggy.svg);
        background-color: darkgreen;
    }
    .coinstack {
        top: 25%;
        left: 25%;
        background-image: url(../assets/CoinStack.svg);
        background-color: darkgoldenrod;
    } */
</style>