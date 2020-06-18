import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Root } from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  loadRootComponent: (props) => Promise.resolve(() => <Root {...props} />),
  domElementGetter,
});

export const bootstrap = lifecycles.bootstrap;
export const unmount = lifecycles.unmount;
export const mount = lifecycles.mount;

function domElementGetter() {
  let el = document.getElementById("app");
  if (!el) {
    el = document.createElement("div");
    el.id = "app";
    document.body.appendChild(el);
  }

  return el;
}
