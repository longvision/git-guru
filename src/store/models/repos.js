import { createModel } from "@rematch/core";
import api from "../../services/api";

import history from "../../services/history";
export const repos = createModel()({
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
    clear(state) {
      return {
        data: [],
        loading: false,
      };
    },
  },
  effects: () => ({
    async listAsync(payload) {
      try {
        const res = await api.get(`/users/${payload}/repos?per_page=20`);

        this.list(res.data);
      } catch (err) {
        alert("api error: user not found");
      }
    },
    async clearAsync(payload) {
      await this.clear();
    },
  }),
});
