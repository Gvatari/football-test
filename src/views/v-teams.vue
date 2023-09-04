<template>
    <div class="v-teams">
        <div 
            class="v-teams_content"   
            v-for="item in teams"
            :key="item.id"
            @click="navigateToMatches(item.id)"
        >
            <div class="v-teams_crest">
                <img 
                    :src="item.crest" 
                    alt="Team Crest" 
                    class="v-teams_crest-img"
                >
            </div>
            <div class="v-teams_name">
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const teams = computed(() => { 
    // console.log(store.getters.getTeam);
    return store.getters.getTeam
});

const navigateToMatches = (id) => {
    store.dispatch('fetchMatches', id);
    router.push({ name: 'matches'});
};
</script>

<style lang="scss">
    .v-teams {
        display: flex;
        gap: 15px;
        margin: 40px 20px 0 20px;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: column;

        &_content {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 2px;
            transition: 0.2s;
            border-bottom: 1px solid #cecece;
            gap: 10px;
        }
        &_content:hover {
            background: #d0d6ed;
            border-radius: 4px;
        }
        &_name {
            font-size: 17px;
            cursor: default;
        }
        &_crest-img {
            width: 60px;
            height: 60px;
        }
    }
</style>
