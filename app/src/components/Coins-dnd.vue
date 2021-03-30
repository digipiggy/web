<template>
	<div>
		<drop class="drop"
			@drop="handleDrop">
			drop
			<v-img :src="require('@/assets/Piggy.svg')" height="384px" contain class="d-block my-4"></v-img>
			<drag class="drag"
				:image="require('@/assets/PT-Coin.png')"
				:transfer-data="{ id: '1234' }">
				drag
			</drag>
		</drop>
	</div>
</template>

<script>
	import { Drag, Drop } from 'vue-drag-drop';
	export default {
        props: ['id'],
		components: { Drag, Drop },
		methods: {
			handleDrop(data) {
				alert(`IN COINS You dropped with data: ${JSON.stringify(data)}`);
			},
		},
	};
</script>

<style scoped>
	.drop {
		display: inline-block;
		vertical-align: top;
		padding: 15px;
		margin-bottom: 20px;
		width: auto;
		height: auto;
		background-image: '@/assets/Piggy.svg';
	}
</style>