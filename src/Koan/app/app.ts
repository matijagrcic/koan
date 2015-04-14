import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import "bootstrap";
import "bootstrap/css/bootstrap.css!";

@inject(Router)
export class App {
  constructor(private router) {
    this.router.configure(config => {
      config.title = "Aurelia";
      config.map([
        { route: ["","posts"],  moduleId: "./posts",      nav: true, title:"Posts" },
        { route: "media",        moduleId: "./media",       nav: true, title: "Media" },
        { route: "about",        moduleId: "./about",       nav: true, title: "About Koan" }
      ]);
    });
  }
}
