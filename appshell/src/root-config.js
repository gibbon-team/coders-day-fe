import { registerApplication, start } from "single-spa";

function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1,
  );
}

function app(location) {
  return prefix(location, 'app');
}

function quiz(location) {
  return prefix(location, 'quiz');
}

registerApplication({
  name: "@coders/app",
  app: () => System.import("@coders/app"),
  activeWhen: app
});

registerApplication({
  name: "@coders/quiz",
  app: () => System.import("@coders/quiz"),
  activeWhen: quiz
});

start({
  urlRerouteOnly: true,
});
