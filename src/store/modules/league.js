import axios from 'axios';

export const league = {
  state: {
    competitions: []
  },
  getters: {
    getCompetitions (state) {
      return state.competitions;
    }
  },
  mutations: {
    setCompetitions(state, competitions) {
      state.competitions = competitions;
    }
  },
  actions: {
    async fetchCompetitions(ctx) {
      try {
        const { data } = await axios.get('https://api.football-data.org/v4/competitions/', {
          headers: {
            'X-Auth-Token': 'cbbeeaa16bd2416db7f4d6408bd4cf6b'
          }
        });
        ctx.commit('setCompetitions', data.competitions);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
