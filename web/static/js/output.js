import { output_channel } from "./socket";

output_channel.on("gamestate_update", payload => {console.log(payload)});