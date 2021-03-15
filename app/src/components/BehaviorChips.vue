<template>
    <div>
        <v-chip
            class="ma-2"
            color="#48A182"
            v-for="behavior in allChips"
            :key="`${kid.name}-${behavior}`"
            :outlined="!isChipSelected(behavior)"
            :text-color="isChipSelected(behavior) ? '#FFFFFF': '#48A182'"
            @click="selectChip(behavior)"
        >
            <v-icon v-if="isChipSelected(behavior)">mdi-check</v-icon>
            {{behavior}}
        </v-chip>
        <v-chip
            v-if="showNewBehaviorChip"
            v-click-outside="createBehavior"
            class="ma-2"
            color="#48A182"
            outlined
        >
            <v-text-field
            label="New Behavior"
            v-model="newBehaviorChipText"
            v-on:keyup.enter="createBehavior"
            single-line
            dense
            style="position: relative; top: 9px;"
            ></v-text-field>
            <v-icon @click="createBehavior" >mdi-plus</v-icon>
        </v-chip>
        <v-chip
            v-else
            class="ma-2"
            style="cursor: pointer;"
            color="#48A182"
            outlined
            @click.native="showChipAdder"
        >
            <v-icon >mdi-plus</v-icon>
            Custom Behavior
        </v-chip>
    </div>
</template>

<script>
export default {
    name: "behaviorChips", 
    props: {    
        defaultChips: Array,
        kid: Object,
    },
    data() {
        return {
            showNewBehaviorChip: false,
            newBehaviorChipText: "",
            customChips: []
        };
    },
    computed: {
        allChips: function(){
            let allChips = [...this.defaultChips];
            this.kid.behaviors.forEach(behavior => {
                if (!allChips.some(b => b == behavior)){
                    allChips.push(behavior)
                }
            })
            return allChips
        }
    },
    methods: {
        isChipSelected(behavior) {
            return this.kid.behaviors.includes(behavior)
        },
        selectChip(behavior) {
            this.$emit('selectBehavior', {
                kid: this.kid,
                behavior
            });
        },
        createBehavior(){
            if (this.newBehaviorChipText == ""){
                this.showNewBehaviorChip = false;
            } else {
            this.customChips.push(this.newBehaviorChipText)
            this.$emit('selectBehavior', {
                kid: this.kid,
                behavior: this.newBehaviorChipText
            });
            this.newBehaviorChipText = "";
            this.showNewBehaviorChip = false;
            }
        },
        showChipAdder(){
            this.showNewBehaviorChip = true;
        }
    }
};
</script>
