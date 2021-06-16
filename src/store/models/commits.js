import { createModel } from "@rematch/core";
import api from "../../services/api";
export const commits = createModel()({
  state: {
    data: [],
    loading: false,
  },
  reducers: {
    list(state, payload) {
      return {
        ...state,
        data: payload,
      };
    },
  },
  effects: () => ({
    async listAsync(payload) {
      try {
        const res = await api.get(`/repos/${payload}/commits`);

        this.list(res.data);
      } catch (err) {
        alert("api error");
      }
    },
  }),
});
