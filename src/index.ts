import { startEvents } from "./Events/index.js";
import { initialisePlacement } from "./logic/placement/shipPlacement.js";
import { initialRender } from "./render/initialRender.js";

initialRender();
startEvents();
initialisePlacement();
