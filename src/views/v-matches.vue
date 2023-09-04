<template>
  <div class="v-matches">
    <div class="v-matches_header">
      <div class="v-matches_name-team">Команда</div>
      <div class="v-matches_crest-team">Эмблема</div>
      <div class="v-matches_halftime">Перерыв</div>
      <div class="v-matches_fulltime">Основное время</div>
    </div>
    <div 
        class="v-matches_team" 
        v-for="item in matches"
        :key="item.id"
    >
        <div class="v-matches_away-team">
          <div class="v-matches_away-team-name">
            {{ item.awayTeam.name }}
          </div>
          <div class="v-matches_wrapper-img">
            <img 
              :src="item.awayTeam.crest" 
              alt="Team Crest" 
              class="v-matches_crest-img"
            >
          </div>
          <div class="v-matches_halftime-away-team">
            <div class="v-matches_score">
              {{ item.score.halfTime.away }}
            </div>
          </div>
          <div class="v-matches_fulltime-away-team">
            <div class="v-matches_score">
              {{ item.score.fullTime.away }}
            </div>
          </div>
        </div>
        <div class="v-matches_home-team">
          <div class="v-matches_home-team-name">
            {{ item.homeTeam.name }}
          </div>
          <div class="v-matches_wrapper-img">
            <img 
              :src="item.homeTeam.crest" 
              alt="Team Crest" 
              class="v-matches_crest-img"
            >
          </div>
          <div class="v-matches_halftime-home-team">
            <div class="v-matches_score">
              {{ item.score.halfTime.home }}
            </div>
          </div>
          <div class="v-matches_fulltime-home-team">
            <div class="v-matches_score">
              {{ item.score.fullTime.home }}
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();


const matches = computed(() => { 
    console.log(store.getters.getMatches);
    return store.getters.getMatches
});


</script>

<style lang="scss">
  .v-matches {
    display: flex;
    flex-direction: column;
    margin: 40px 20px 0 20px;

    &_header {
      display: flex;
      border-bottom: 1px solid #e1e1e1;
      margin-bottom: 8px;
      font-weight: 600;
      gap: 32px;
    }

    &_name-team {
      min-width: 192px;
    }
  
    &_crest-team {
      min-width: 72px;
      display: flex;
      justify-content: center;
    }

    &_halftime {
      min-width: 74px;
      display: flex;
      justify-content: center;
    }

    &_fulltime {
      min-width: 134px;
      display: flex;
      justify-content: center;
    }

    &_team{
      display: flex;
      flex-direction: column;
      margin-bottom: 6px;
      border-bottom: 1px solid #d4d4d4;
    }

    &_away-team {
      display: flex;
      gap: 32px;
      margin-bottom: 2px;
    }

    &_home-team {
      display: flex;
      gap: 32px;
      margin-bottom: 2px;
    }

    &_away-team-name {
      min-width: 192px;
    }

    &_home-team-name {
      min-width: 192px;
    }

    &_wrapper-img {
      min-width: 72px;
      display: flex;
      justify-content: center;
    }

    &_crest-img {
      width: 24px;
      height: 24px;
    }

    &_halftime-away-team {
      min-width: 74px;
      display: flex;
      justify-content: center;
    }

    &_fulltime-away-team {
      min-width: 134px;
      display: flex;
      justify-content: center;
    }

    &_halftime-home-team {
      min-width: 74px;
      display: flex;
      justify-content: center;
    }

    &_fulltime-home-team {
      min-width: 134px;
      display: flex;
      justify-content: center;
    }

    &_score {
      width: 32px;
      display: flex;
      justify-content: center;
      background: #fae9d3de;
      border-radius: 6px;
      align-items: center;
    }
  }
</style>