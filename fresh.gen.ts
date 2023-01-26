// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/api/v1/codes.tsx";
import * as $3 from "./routes/api/v1/codes/ts.tsx";
import * as $4 from "./routes/code.tsx";
import * as $5 from "./routes/contributing.tsx";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/integrating.tsx";
import * as $$0 from "./islands/Search.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/api/v1/codes.tsx": $2,
    "./routes/api/v1/codes/ts.tsx": $3,
    "./routes/code.tsx": $4,
    "./routes/contributing.tsx": $5,
    "./routes/index.tsx": $6,
    "./routes/integrating.tsx": $7,
  },
  islands: {
    "./islands/Search.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;