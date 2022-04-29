/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  server: "src/express/server.js",
  appDirectory: "src/remix/app",
  assetsBuildDirectory: "src/remix/public/build",
  serverBuildPath: "src/remix/build/index.js",
  // publicPath: "/build/",
};
