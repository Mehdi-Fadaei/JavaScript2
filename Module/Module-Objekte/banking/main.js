import * as Helper from "./utils/helper.js";
import * as Settings from "./utils/settings.js";

import * as K from "./classes/Konto.js";
import * as Kk from "./classes/Kinderkonto.js";



Helper.objekt_anzeigen(new K.Konto("DE6206752564419854", Settings.person_1.name, Settings.person_1.vermoegen));
Helper.objekt_anzeigen(new Kk.Kinderkonto("DE6206752564419740", Settings.person_2.name, Settings.person_2.vermoegen, 500));

