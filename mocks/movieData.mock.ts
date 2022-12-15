import { MovieItemInterface } from "../src/definitions/MyMovieItem.definitions";

export const mockMovieDataList: MovieItemInterface[] = [
  {
    genre: ["action", "adventure", "fantasy"],
    imgUrl: "anh.png",
    release: 1977,
    title: "A New Hope",
    synopsis:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    tag: "The movie that changed cinema",
    runningTimeInMins: 121,
    rating: 8.6,
    id: 1001,
  },
  {
    genre: ["action", "adventure", "fantasy"],
    imgUrl: "tesb.png",
    release: 1980,
    title: "The Empire Strikes Back",
    synopsis:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    tag: "Best Star Wars movie ever",
    runningTimeInMins: 124,
    rating: 8.7,
    id: 1002,
  },
  {
    genre: ["action", "adventure", "fantasy"],
    imgUrl: "rotj.png",
    release: 1983,
    title: "Return of the Jedi",
    synopsis:
      "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    tag: "The epic conclusion of the legendary saga",
    runningTimeInMins: 121,
    rating: 8.3,
    id: 1003,
  },
  {
    genre: ["action", "adventure", "fantasy"],
    imgUrl: "tpm.png",
    release: 1999,
    title: "The Phantom Menace",
    synopsis:
      "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
    tag: "The beginning of the epic saga",
    runningTimeInMins: 136,
    rating: 6.5,
    id: 1004,
  },
  {
    genre: ["action", "adventure", "fantasy", "romance"],
    imgUrl: "aotc.png",
    release: 2002,
    title: "Attack of the Clones",
    synopsis:
      "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.",
    tag: "The worst of the lot",
    runningTimeInMins: 142,
    rating: 6.6,
    id: 1005,
  },
  {
    genre: ["action", "adventure", "fantasy"],
    imgUrl: "rots.png",
    release: 2005,
    title: "Revenge of the Sith",
    synopsis:
      "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
    tag: "The birth of a legendary villain",
    runningTimeInMins: 140,
    rating: 7.6,
    id: 1006,
  },
];
