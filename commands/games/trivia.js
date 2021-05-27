let fetch = require("node-fetch");

module.exports = {
  name: "trivia",
  description: "trivia game",
  async execute(message, embed) {
    fetch(
      "https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        Array.prototype.insert = function (index, item) {
          this.splice(index, 0, item);
        };

        const randomNumber = Math.floor(Math.random() * 4) + 1;

        let options = [
          data.results[0].incorrect_answers[0],
          data.results[0].incorrect_answers[1],
          data.results[0].incorrect_answers[2],
        ];

        options.insert(randomNumber - 1, data.results[0].correct_answer);

        const triviaEmbed = embed
          .setColor("#0000FF")
          .setDescription(data.results[0].question)
          .addField(`1. ${options[0]}`, "⠀")
          .addField(`2. ${options[1]}`, "⠀")
          .addField(`3. ${options[2]}`, "⠀")
          .addField(`4. ${options[3]}`, "⠀");
        let filter = (user) => {
          return user.author.id === message.author.id;
        };
        message.channel.send(triviaEmbed).then((sent) => {
          sent.channel
            .awaitMessages(filter, {
              max: 1,
              time: 30000,
              errors: ["time"],
            })
            .then((collected) => {
              if (collected.first().content == randomNumber) {
                sent.delete();
                message.channel.send("you found the answer");
              } else {
                message.channel.send(`sorry, that's the wrong answer ;-;... correct answer was number ${randomNumber}`);
              }
            })
            .catch(console.error);
        });
      });
  },
};
