import { createServer, Model } from "miragejs";

createServer({
  models: {
    games: Model,
  },

  seeds(server) {
    server.create("game", {
      id: "1",
      name: "Super Mario Odyssey",
      price: 60,
      description:
        "Super Mario Odyssey Is A Nintendo Switch Video Game Released In 2017",
      imageUrl:
        "https://assets.mycast.io/actor_images/actor-super-mario-odyssey-237759_large.jpg?1625373831",
      type: "Classic",
    });
    server.create("game", {
      id: "2",
      name: "Luigi's Mansion",
      price: 80,
      description:
        "Luigi's Mansion is an action-adventure video game developed and published by Nintendo for the GameCube. The game was a launch title for the GameCube and was the first game in the Mario franchise to be released for the console; it was released in Japan on September 14, 2001, in North America on November 18, 2001, in Europe on May 3, 2002, and in Australia on May 17, 2002. It is the second video game in which Luigi is the main character instead of Mario, after Mario Is Missing!. Players control him as he explores a haunted mansion, searches for Mario and deals with ghosts by capturing them through a vacuum cleaner supplied by Professor E. Gadd. Luigi's Mansion received positive reviews overall, with reviewers praising the sound and the gameplay, but criticizing its short length. The game has sold over 2.5 million copies, and is the fifth best selling GameCube game of all time. It was one of the first games to be re-released as a Player's Choice title on the system. The game was followed by two sequels – Luigi's Mansion: Dark Moon, released for the Nintendo 3DS in 2013, and Luigi's Mansion 3, which was released for the Nintendo Switch in 2019. A remake of Luigi's Mansion for the 3DS, co-developed by Nintendo and Grezzo, was released in 2018.",
      imageUrl:
        "https://assets.mycast.io/actor_images/actor-luigi-s-mansion-253688_large.jpg?1628472314",
      type: "Action",
    });
    server.create("game", {
      id: "3",
      name: "Super Mario World",
      price: 100,
      description: "",
      imageUrl:
        "https://assets.mycast.io/actor_images/actor-super-mario-world-199743_large.jpg?1618329257",
      type: "Sports",
    });
    server.create("game", {
      id: "4",
      name: "Super Mario Sunshine",
      price: 65,
      description: "",
      imageUrl:
        "https://assets.mycast.io/actor_images/actor-super-mario-sunshine-210157_large.jpg?1620241502",
      type: "Classic",
    });
    server.create("game", {
      id: "5",
      name: "Super Mario Bros.",
      price: 120,
      description:
        "Super Mario Bros. is a platform game developed and published by Nintendo. The successor to the 1983 arcade game Mario Bros. and the first in the Super Mario series, it was released in 1985 for the Famicom in Japan. Following a limited US release for the Nintendo Entertainment System (NES) in late 1985, the Vs. Super Mario Bros. arcade game port for the Nintendo Vs. System received a wide international release for overseas markets outside of Japan in early 1986, before the NES version received a wide release in North America the same year and in PAL regions in 1987. Players control Mario, or his brother Luigi in the multiplayer mode, as they travel the Mushroom Kingdom to rescue Princess Toadstool from Bowser (King Koopa). They must traverse side-scrolling stages while avoiding hazards such as enemies and pits with the aid of power-ups such as the Super Mushroom, Fire Flower and Starman. The game was designed by Shigeru Miyamoto and Takashi Tezuka as 'a grand culmination' of the Famicom team's three years of game mechanics and programming, drawing from their experiences working on Devil World and the side-scrollers Excitebike and Kung Fu to advance their previous work on platforming 'athletic games' such as Donkey Kong and Mario Bros. The design of the first level, World 1-1, serves as a tutorial for first-time video gamers on the basic mechanics of platform gameplay. The aggressively size-optimized profile was intended as a farewell to the Famicom's cartridge medium in favor of the forthcoming Famicom Disk System, whose floppy disks temporarily became the dominant distribution medium for a few years. Super Mario Bros. is frequently cited as one of the greatest video games of all time, with praise on its precise controls. It is one of the best-selling games of all time, with more than 50 million copies sold worldwide. It is credited alongside the NES as one of the key factors in reviving the video game industry after the 1983 crash, and helped popularize the side-scrolling platform game genre. Koji Kondo's soundtrack is one of the earliest and most popular in video games, making music into a centerpiece of game design. The game began a multimedia franchise including a long-running game series, an animated television series and a feature film. It has been rereleased on most Nintendo systems. Alongside Mario himself, Super Mario Bros. has become prominent in popular culture.",
      imageUrl:
        "https://assets.mycast.io/actor_images/actor-super-mario-bros-262692_large.jpg?1630100502",
      type: "Classic",
    });
    server.create("game", {
      id: "6",
      name: "Crash Bandicoot (1996 Game)",
      price: 70,
      description: "",
      imageUrl:
        "https://assets.mycast.io/actor_images/actor-crash-bandicoot-1996-game-334518_large.jpg?1640794614",
      type: "Sports",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/games", (schema, request) => {
      return schema.games.all();
    });

    this.get("/games/:id", (schema, request) => {
      const id = request.params.id;
      return schema.games.find(id);
    });
  },
});
