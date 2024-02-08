import oa from "./utils/helper.js";

import {person_1, person_2} from "./utils/settings.js";
import { Pusteblume } from "./classes/Kinderkonto.js";
import {Konto} from "./classes/Konto.js";

oa(new Konto("DE6206752564419854", person_1.name, person_1.vermoegen));
oa(new Pusteblume("DE6206752564419740", person_2.name, person_2.vermoegen, 500));