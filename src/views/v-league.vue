<template>
    <div class="v-league">
        <div 
            class="v-league_content" 
            v-for="item in competitions" 
            :key="item.id"
            @click="navigateToLeagueTeams(item.code)"
        >
            <div class="v-league_name">
                {{item.name}}
            </div>
            <div class="v-league_emblem">
                <img :src="item.emblem" alt="League Emblem" class="v-league_emblem-img">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const competitions = computed(() => { 
    return store.getters.getCompetitions
});

onMounted(()=>{
    store.dispatch('fetchCompetitions');
});

const navigateToLeagueTeams = (leagueCode) => {
    store.dispatch('fetchTeam', leagueCode);
    router.push({ name: 'teams'});
};

</script>

<style lang="scss">
.v-league {
    display: flex;
    gap: 15px;
    margin: 40px 20px 0 20px;
    flex-wrap: wrap;
    justify-content: space-around;

    &_content {
        display: flex;
        max-width: 240px;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        padding: 2px;
        transition: 0.2s;
    }
    &_content:hover {
        background: #d0d6ed;
        border-radius: 4px;
    }
    &_name {
        font-size: 17px;
        cursor: default;
    }
    &_emblem-img {
        width: 60px;
        height: 60px;
    }
}
</style>
