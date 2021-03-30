<template>
    <div
        :id="id"
        class="coins"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.stop
    >
        <slot />
        <v-img 
            :src="require('@/assets/Coin.svg')" 
            height="100px" 
            contain class="d-block my-4">
        </v-img>
    </div>
</template>

<script>
export default {
    props: ['id', 'draggable'],
    methods: {
        dragStart: e => {
            const target = e.target;
            e.dataTransfer.setData('coin_id', target.id);
            setTimeout(() => {
                target.style.display = "none";
            }, 0);
        }
    }
}
</script>