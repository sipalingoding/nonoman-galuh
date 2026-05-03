import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = process.cwd();

const routesManifest = {
  version: 3,
  pages404: true,
  appType: "app",
  caseSensitive: false,
  basePath: "",
  redirects: [],
  headers: [],
  onMatchHeaders: [],
  rewrites: {
    beforeFiles: [],
    afterFiles: [],
    fallback: [],
  },
  dynamicRoutes: [],
  staticRoutes: [],
  dataRoutes: [],
  rsc: {
    header: "RSC",
    varyHeader:
      "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch",
    prefetchHeader: "Next-Router-Prefetch",
    didPostponeHeader: "x-nextjs-postponed",
    contentTypeHeader: "text/x-component",
    suffix: ".rsc",
    prefetchSegmentHeader: "Next-Router-Segment-Prefetch",
    prefetchSegmentSuffix: ".segment.rsc",
    prefetchSegmentDirSuffix: ".segments",
    clientParamParsing: false,
    dynamicRSCPrerender: false,
  },
  rewriteHeaders: {
    pathHeader: "x-nextjs-rewritten-path",
    queryHeader: "x-nextjs-rewritten-query",
  },
};

const middlewareManifest = {
  version: 3,
  middleware: {},
  functions: {},
  sortedMiddleware: [],
};

const pageBuildManifest = {
  polyfillFiles: [],
  devFiles: [],
  ampDevFiles: [],
  lowPriorityFiles: [],
  rootMainFiles: [],
  pages: {},
};

async function writeJson(relativePath, data) {
  const filePath = join(root, relativePath);
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

async function ensureDevManifests() {
  await Promise.all([
    writeJson(".next/dev/required-server-files.json", {
      version: 1,
      config: {
        distDir: ".next",
        experimental: {
          isExperimentalCompile: false,
        },
        cacheHandlers: {},
      },
      appDir: root,
      relativeAppDir: "",
      files: [],
      ignore: [],
    }),
    writeJson(".next/dev/routes-manifest.json", routesManifest),
    writeJson(".next/dev/server/pages-manifest.json", {
      "/_app": "pages/_app.js",
      "/_error": "pages/_error.js",
    }),
    writeJson(".next/dev/server/middleware-manifest.json", middlewareManifest),
    writeJson(".next/dev/server/pages/_app/build-manifest.json", {
      ...pageBuildManifest,
      pages: { "/_app": [] },
    }),
    writeJson(".next/dev/server/pages/_error/build-manifest.json", {
      ...pageBuildManifest,
      pages: { "/_error": [] },
    }),
  ]);
}

console.log("Starting Next.js dev server...");

await ensureDevManifests();

const nextBin = join(root, "node_modules", "next", "dist", "bin", "next");
const nextDev = spawn(process.execPath, [nextBin, "dev", "--webpack"], {
  stdio: "inherit",
  cwd: root,
  env: process.env,
});

function shutdown(signal) {
  nextDev.kill(signal);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

nextDev.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});
