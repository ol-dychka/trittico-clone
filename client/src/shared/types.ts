export enum SelectedPage {
  Overview = "overview",
  Stem = "stem",
  Handlebar = "handlebar",
  Seatpost = "seatpost",
  Fork = "fork",
  BottlecageSpoon = "bottlecage & spoon",
  Specs = "specs",
}

export class Spec {
  title: string;
  text: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
}

export enum Tab {
  Stem = "Stem",
  Handlebar = "Handlebar",
  Seatpost = "Seatpost",
  Fork = "Fork",
  Bottlecage = "Bottlecage",
  RaceSpoon = "RaceSpoon",
}
