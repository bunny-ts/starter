import { Bunny } from "@bunny-ts/core";
import { Core } from "./core";

const post = process.env.PORT || 8080;

const bunny = new Bunny(Core);

bunny.listen(8080, () => {
  console.log(`Server is running on port ${post}`);
});
