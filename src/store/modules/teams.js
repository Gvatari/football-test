import axios from 'axios';

export const teams = {
  state: {
    team: []
  },
  getters: {
    getTeam (state) {
      return state.team;
    }
  },
  mutations: {
    setTeam(state, team) {
      state.team = team;
    }
  },
  actions: {
    async fetchTeam(ctx, leagueCode) {
      try {
        const { data } = await axios.get(`https://api.football-data.org/v4/competitions/${leagueCode}/teams`, {
          headers: {
            'X-Auth-Token': ''
          }
        });
        ctx.commit('setTeam', data.teams);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
