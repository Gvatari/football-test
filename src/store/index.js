import { createStore } from 'vuex'
import { league } from '@/store/modules/league';
import { teams } from '@/store/modules/teams';
import { matches } from '@/store/modules/matches';

export default createStore({
  modules: { league, teams, matches }
});
