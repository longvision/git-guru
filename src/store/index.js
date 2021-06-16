import { init } from "@rematch/core";

import { models } from "./models";

export const store = init({
  name: "Git Guru",
  models,
});
