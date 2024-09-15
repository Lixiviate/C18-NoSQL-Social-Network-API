const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userData, thoughtData } = require("./data");
const { Type } = require("mongoose");

async function seedDatabase() {
  connection.once("open", async () => {
    console.log("Connected to MongoDB");

    // Drop existing Users and Thoughts
    await User.deleteMany({});
    await Thought.deleteMany({});

    console.log("Existing data cleared");

    // Insert Users and Thoughts
    const insertedUsers = await User.insertMany(userData);
    const insertedThoughts = await Thought.insertMany(thoughtData);

    console.log("Seeded users and thoughts data");

    // Add thoughts to associated users
    await User.findOneAndUpdate(
      { username: "lernantino" },
      { $push: { thoughts: insertedThoughts[0]._id } }
    );
    await User.findOneAndUpdate(
      { username: "janedoe" },
      { $push: { thoughts: insertedThoughts[1]._id } }
    );
    await User.findOneAndUpdate(
      { username: "johndoe" },
      { $push: { thoughts: insertedThoughts[2]._id } }
    );

    // Add friends
    await User.findOneAndUpdate(
      { username: "lernantino" },
      { $push: { friends: insertedUsers[1]._id } }
    );
    await User.findOneAndUpdate(
      { username: "johndoe" },
      {
        $push: { friends: insertedUsers[0]._id, friends: insertedUsers[2]._id },
      }
    );
    await User.findOneAndUpdate(
      { username: "janedoe" },
      { $push: { friends: insertedUsers[1]._id } }
    );

    console.log("Friends added to users");

    // Close connection
    process.exit(0);
  });
}

seedDatabase();
