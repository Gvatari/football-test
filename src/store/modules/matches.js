import axios from 'axios';

export const matches = {
  state: {
    matches: []
  },
  getters: {
    getMatches (state) {
      return state.matches;
    }
  },
  mutations: {
    setMatches(state, matches) {
      state.matches = matches;
    },
  },
  actions: {
    async fetchMatches(ctx, id) {
      try {
        const { data } = await axios.get(`https://api.football-data.org/v4/teams/${id}/matches?dateFrom=2021-07-01&dateTo=2022-01-01`, {
          headers: {
            'X-Auth-Token': 'cbbeeaa16bd2416db7f4d6408bd4cf6b'
          }
        });
        console.log(data);
        ctx.commit('setMatches', data.matches);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
