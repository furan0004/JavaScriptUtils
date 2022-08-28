import kurosakiData from  "./kurosaki.json" assert {type: "json"};
/*
import { buildPage } from "/litlinkcopy/pagebuild.js";

buildPage(kurosakiData);

*/

import { ProfilePage } from "/lib/ProfilePageBuilder/builder.js";
var profile = new ProfilePage(kurosakiData);
profile.build();