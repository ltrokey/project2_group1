const { Comments } = require("../models");

const commentsData = [
  {
    content:
      "I can't believe how much fun I'm having with this toy! It's like an adventure every time I play with it. I really like how it makes me use my imagination and come up with all sorts of cool stories",
    users_id: 1,
    products_id: 30,
  },
  {
    content:
      "This toy is absolutely amazing. There's something about it that just captures my attention, and I find myself lost in play for hours. It's become a must-have in my playtime routine!",
    users_id: 2,
    products_id: 28,
  },
  {
    content:
      "Playing with this toy brings so much joy into my day. It's like stepping into a world of excitement and creativity. I love exploring all the different things I can do with it, and it never gets boring!",
    users_id: 3,
    products_id: 26,
  },
  {
    content:
      "This toy is a game-changer. It's not just any ordinary toy; it's like a portal to a world of endless possibilities. I can create, imagine, and have a blast every time I pick it up. It's my go-to choice for playtime fun!",
    users_id: 4,
    products_id: 24,
  },
  {
    content:
      "I've got to say, this toy is pretty awesome. It's the kind of toy that sparks my curiosity and keeps me entertained for ages. Whether I'm playing alone or with friends, it always adds that extra touch of excitement to our playdates.",
    users_id: 5,
    products_id: 22,
  },
  {
    content:
      "I'm absolutely hooked on this toy! It's like a secret treasure chest of fun. I love discovering new ways to play with it, and it never fails to surprise me. Definitely a top pick for any playtime adventure.",
    users_id: 6,
    products_id: 20,
  },
  {
    content:
      "This toy is like magic. It has this unique charm that makes me want to keep coming back to it. It's not just a toy; it's a source of endless joy and entertainment. I can't get enough of it!",
    users_id: 7,
    products_id: 18,
  },
  {
    content:
      "I'm having a blast with this toy! It's become my absolute favorite. There's something about the way it lights up my playtime that makes it stand out. It's a total game-changer for my toy collection!",
    users_id: 8,
    products_id: 16,
  },
  {
    content:
      "This toy is a total mood lifter. It brings so much happiness and excitement into my playtime routine. I love how versatile it is, allowing me to play in different ways. It's simply the best!",
    users_id: 9,
    products_id: 14,
  },
  {
    content:
      "I can't express how much I love this toy. It's not just fun; it's a whole experience. Every time I play with it, it's like stepping into a world of wonder and joy. I highly recommend it to anyone looking for the perfect playmate!",
    users_id: 10,
    products_id: 12,
  },
  {
    content:
      "Dude, this toy is seriously awesome. It's like the VIP of my toy crew. We have epic adventures together every day.",
    users_id: 11,
    products_id: 10,
  },
  {
    content:
      "This toy? It's a total game-changer. I can't even explain it. It just makes playtime ten times cooler. Trust me, you need one",
    users_id: 12,
    products_id: 8,
  },
  {
    content:
      "So, this toy? It's my go-to for fun. It's like the superhero of toys. Always there when I need a good time.",
    users_id: 13,
    products_id: 6,
  },
  {
    content:
      "This toy is the real deal. I take it everywhere with me. It's like my sidekick in the world of play. We're a dynamic duo.",
    users_id: 14,
    products_id: 4,
  },
  {
    content:
      "Yo, if you want a toy that's chill and keeps things interesting, this is it. I never get bored, and that's saying something!",
    users_id: 11,
    products_id: 2,
  },
  {
    content:
      "This toy is low-key amazing. It's like my own little happiness generator. Highly recommend for anyone who loves good vibes.",
    users_id: 15,
    products_id: 1,
  },
  {
    content:
      "Okay, this toy is legit. It's the kind of thing that makes you forget about everything else and just enjoy the moment. Fun level? Off the charts.",
    users_id: 11,
    products_id: 3,
  },
  {
    content:
      "I'm telling you, this toy is a total mood lifter. It's like a mini party in toy form. It brings the good times, no doubt.",
    users_id: 12,
    products_id: 5,
  },
  {
    content:
      "If toys had a popularity contest, this one would win. It's got that 'cool factor' that makes playtime way more fun. You gotta check it out.",
    users_id: 13,
    products_id: 7,
  },
  {
    content:
      "This toy? It's like the rockstar of my toy collection. Every time I show it off, my friends are like, 'Whoa, where'd you get that?!' It's the real deal.",
    users_id: 14,
    products_id: 9,
  },
  {
    content: "This toy is awesome!",
    users_id: 15,
    products_id: 11,
  },
  {
    content: "I really like playing with it.",
    users_id: 1,
    products_id: 13,
  },
  {
    content: "It's so much fun!",
    users_id: 2,
    products_id: 15,
  },
  {
    content: "I can play with this all day.",
    users_id: 3,
    products_id: 26,
  },
  {
    content: "My new favorite toy!",
    users_id: 4,
    products_id: 24,
  },
  {
    content: "I love the colors and shapes.",
    users_id: 5,
    products_id: 16,
  },
  {
    content: "It's really cool and exciting.",
    users_id: 6,
    products_id: 8,
  },
];

const seedComments = async () => {
  try {
    await Comments.bulkCreate(commentsData);
    console.log("Comments seeded successfully!");
  } catch (error) {
    console.error("Error during comment seeding:", error);
  }
};

module.exports = seedComments;
