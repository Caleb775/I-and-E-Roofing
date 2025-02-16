// import { application } from "controllers/application";
// import { sprinkle } from "controllers/sprinkle";
// import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading";
// eagerLoadControllersFrom("controllers", application);

import { application } from "controllers/application";
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading";

// Load all controllers automatically
eagerLoadControllersFrom("controllers", application);

