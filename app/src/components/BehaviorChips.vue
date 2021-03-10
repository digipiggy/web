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
            class="ma-2"
            color="#48A182"
            outlined
        >
            <v-text-field
            label="New Behavior"
            v-model="newBehaviorChipText"
            single-line
            dense
            style="position: relative; top: 9px;"
            ></v-text-field>
            <v-icon @click="createBehavior" >mdi-plus</v-icon>
        </v-chip>
        <v-chip
            v-else
            class="ma-2"
            color="#48A182"
            outlined
            @click="showInput"
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
            return [...this.defaultChips, ...this.customChips]
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
            this.customChips.push(this.newBehaviorChipText)
            this.$emit('selectBehavior', {
                kid: this.kid,
                behavior: this.newBehaviorChipText
            });
            this.newBehaviorChipText = "";
            console.log("this.showNewBehaviorChip", this.showNewBehaviorChip)
            this.showNewBehaviorChip = false;
            console.log("this.showNewBehaviorChip", this.showNewBehaviorChip)
        },
        showInput(){
            console.log("showInput was called")
            this.showNewBehaviorChip = true;
        }
    }
};
</script>
