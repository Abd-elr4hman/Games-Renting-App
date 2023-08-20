import Card from "../pages/games/components/Card";

export default {
  title: "gameCard",
  component: Card,
};

// export const primary = () => (
//   <Card title="aa" imgPath="url here" price={123} type="classic"></Card>
// );

export const Primary = {
  args: {
    title: "Super Mario Odyssey",
    imgPath:
      "https://assets.mycast.io/actor_images/actor-super-mario-sunshine-210157_large.jpg?1620241502",
    price: 60,
    type: "Classic",
    description:
      "Super Mario Odyssey Is A Nintendo Switch Video Game Released In 2017",
  },
};
