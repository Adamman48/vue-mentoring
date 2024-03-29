import { MovieItemInterface } from "../src/definitions/MyMovieItem.definitions";

export const mockMovieDataList: MovieItemInterface[] = [
  {
    genres: ["action", "adventure", "fantasy"],
    poster_path: "anh.png",
    release_date: 1977,
    title: "A New Hope",
    overview:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    tagLine: "The movie that changed cinema",
    runtime: 121,
    vote_average: 8.6,
    vote_count: 20,
    id: 1001,
  },
  {
    genres: ["action", "adventure", "fantasy"],
    poster_path: "tesb.png",
    release_date: 1980,
    title: "The Empire Strikes Back",
    overview:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    tagLine: "Best Star Wars movie ever",
    runtime: 124,
    vote_average: 8.7,
    vote_count: 20,
    id: 1002,
  },
  {
    genres: ["action", "adventure", "fantasy"],
    poster_path: "rotj.png",
    release_date: 1983,
    title: "Return of the Jedi",
    overview:
      "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    tagLine: "The epic conclusion of the legendary saga",
    runtime: 121,
    vote_average: 8.3,
    vote_count: 20,
    id: 1003,
  },
  {
    genres: ["action", "adventure", "fantasy"],
    poster_path: "tpm.png",
    release_date: 1999,
    title: "The Phantom Menace",
    overview:
      "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
    tagLine: "The beginning of the epic saga",
    runtime: 136,
    vote_average: 6.5,
    vote_count: 20,
    id: 1004,
  },
  {
    genres: ["action", "adventure", "fantasy", "romance"],
    poster_path: "aotc.png",
    release_date: 2002,
    title: "Attack of the Clones",
    overview:
      "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.",
    tagLine: "The worst of the lot",
    runtime: 142,
    vote_average: 6.6,
    vote_count: 20,
    id: 1005,
  },
  {
    genres: ["action", "adventure", "fantasy"],
    poster_path: "rots.png",
    release_date: 2005,
    title: "Revenge of the Sith",
    overview:
      "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
    tagLine: "The birth of a legendary villain",
    runtime: 140,
    vote_average: 7.6,
    vote_count: 20,
    id: 1006,
  },
];
