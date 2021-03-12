<template>
    <div>
        <v-chip
            class="ma-2"
            color="#48A182"
            v-for="(task) in allChips"
            :key="`${kid.name}-${task}`"
            :outlined="!isChipSelected(task)"
            :text-color="isChipSelected(task) ? '#FFFFFF': '#48A182'"
            @click="selectChip(task)"
        >
            <v-icon v-if="isChipSelected(task)">mdi-check</v-icon>
            {{task}}
        </v-chip>
        <v-chip
            v-if="showNewTaskChip"
            class="ma-2"
            color="#48A182"
            outlined
        >
            <v-text-field
            label="New Task"
            v-model="newTaskChipText"
            single-line
            dense
            style="position: relative; top: 9px;"
            
            ></v-text-field>
            <v-icon @click="createTask" >mdi-plus</v-icon>
        </v-chip>
        <v-chip
            v-else
            class="ma-2"
            color="#48A182"
            outlined
            @click="showNewTaskChip = true"
        >
            <v-icon >mdi-plus</v-icon>
            Custom Task
        </v-chip>
    </div>
</template>

<script>
export default {
    name: "taskChips", 
    props: {    
        defaultChips: Array,
        kid: Object,
    },
    data() {
        return {
            showNewTaskChip: false,
            newTaskChipText: "",
            customChips: []
        };
    },
    computed: {
        allChips: function(){
            let allChips = [...this.defaultChips];
            this.kid.tasks.forEach(task => {
                if (!allChips.some(t => t == task)){
                    allChips.push(task)
                }
            })
            return allChips
        }
    },
    methods: {
        isChipSelected(task) {
            return this.kid.tasks.includes(task)
        },
        selectChip(task) {
            this.$emit('selectTask', {
                kid: this.kid,
                task
            });
        },
        createTask(){
            this.customChips.push(this.newTaskChipText)
            this.$emit('selectTask', {
                kid: this.kid,
                task: this.newTaskChipText
            });
            this.newTaskChipText = "";
            this.showNewTaskChip = false;

        }
    }
};
</script>
