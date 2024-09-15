const userData = [
  {
    username: "lernantino",
    email: "lernantino@gmail.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "johndoe",
    email: "johndoe@gmail.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "janedoe",
    email: "janedoe@gmail.com",
    thoughts: [],
    friends: [],
  },
];

const thoughtData = [
  {
    thoughtText: "Here's a cool thought...",
    username: "lernantino",
    reactions: [
      {
        reactionBody: "Great thought!",
        username: "johndoe",
      },
      {
        reactionBody: "I totally agree!",
        username: "janedoe",
      },
    ],
  },
  {
    thoughtText: "This is my first thought!",
    username: "janedoe",
    reactions: [],
  },
  {
    thoughtText: "Another random thought!",
    username: "johndoe",
    reactions: [],
  },
];

module.exports = { userData, thoughtData };
