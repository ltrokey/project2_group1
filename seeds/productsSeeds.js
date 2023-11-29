const { Products } = require("../models");

const productsData = [
  {
    title: "Erasable Sketch Pad",
    description: "LCD Writing Tablet 10 Inch Sketch Board",
    price: 13,
    filename: "01_25cat_sketchpad.jpg",
    categories_id: 1,
  },
  {
    title: "Galaxy Moon Lamp",
    description: "Galaxy Lamp 5.9 inch 16 Colors LED 3D Moon Light",
    price: 24,
    filename: "01_25cat_moonlamp.jpg",
    categories_id: 1,
  },
  {
    title: "Robot Toys",
    description: "Sensory Robot Toys 4pk - Top Pop Tubes Fidget",
    price: 15,
    filename: "01_25cat_robottoys.jpg",
    categories_id: 1,
  },
  {
    title: "Shape Shifting Box",
    description:
      "Fidget Cube w/ 36 Rare Earth Magnets - Transforms Into Over 70 Shapes",
    price: 22,
    filename: "01_25cat_shapebox.jpg",
    categories_id: 1,
  },
  {
    title: "Spot it!",
    description: "Matching Classic Card Game",
    price: 5,
    filename: "01_cat25_spotit.jpg",
    categories_id: 1,
  },
  {
    title: "Dart Board",
    description: "Double Sided Dart Board 29 inch with 12 Sticky Balls",
    price: 10,
    filename: "01_cat25_dartboard.jpg",
    categories_id: 1,
  },
  {
    title: "Magnetic Pen",
    description: "Magnetic Pen, Fidget Pen, Decompression Magnetic Toy Pen",
    price: 18,
    filename: "01_cat25_magneticpen.jpg",
    categories_id: 1,
  },
  {
    title: "Walkie Talkies",
    description: "Walky Talky - Key Lock, VOX Crystal Voice, Easy to Use",
    price: 21,
    filename: "01_cat25_walkietalkie.jpg",
    categories_id: 1,
  },
  {
    title: "Mini Bowling Game",
    description: "Table Top Mini Bowling Game Set",
    price: 12,
    filename: "01_cat25_minibowling.jpg",
    categories_id: 1,
  },
  {
    title: "L.O.L Tweens Surprise",
    description:
      "Tweens Surprise Swap Braids-2-Waves Winnie Fashion Doll with 20+ Surprises Including Styling Head and Fabulous Fashions and Accessories",
    price: 17,
    filename: "01_cat25_loltween.jpg",
    categories_id: 1,
  },
  {
    title: "Flashing Cube Game",
    description: "Winning Fingers Flashing Cube Electronic Memory & Brain Game",
    price: 40,
    filename: "02_cat_upto100_flashingcube.jpg",
    categories_id: 2,
  },
  {
    title: "Flying Orb Ball",
    description: "Cosmic Globe Boomerang Hover Ball Galactic Fidget Spinner",
    price: 32,
    filename: "02_cat_upto100_flyingorb.jpg",
    categories_id: 2,
  },
  {
    title: "Telescope",
    description:
      "70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope",
    price: 96,
    filename: "02_cat_upto100_telescope.jpg",
    categories_id: 2,
  },
  {
    title: "Karaoke",
    description: "Karaoke Microphone Machine for Kids",
    price: 37,
    filename: "02_cat_upto100_karaoke.jpg",
    categories_id: 2,
  },
  {
    title: "Drone",
    description:
      "Drone with Camera, ATTOP Foldable 1080P FPV 120°FOV Drone with 3 Batteries 30 Mins Flight Time",
    price: 64,
    filename: "02_cat_upto100_drone.jpg",
    categories_id: 2,
  },
  {
    title: "Shooting Targets",
    description: "Digital Shooting Targets for Nerf Guns Practice",
    price: 35,
    filename: "02_cat_upto100_shootinggame.jpg",
    categories_id: 2,
  },
  {
    title: "Castle - Magnetic Tiles",
    description: "Magnetic Tiles 102pcs with Dolls & Princess Castle Building",
    price: 40,
    filename: "02_cat_upto100_magnetictiles.jpg",
    categories_id: 2,
  },
  {
    title: "LEGO Disney Princess",
    description:
      "LEGO Disney Princess Enchanted Journey 43216, Playset with Cinderella, Jasmine and Rapunzel Mini-Dolls, Toy Horse and Hot Air Balloon",
    price: 52,
    filename: "02_cat_upto100_legoprincess.jpg",
    categories_id: 2,
  },
  {
    title: "Hoverboard",
    description:
      "Hoverboard, 6.5 Inch Self Balancing Hoverboards with Bluetooth and Flashing LED Lights",
    price: 90,
    filename: "02_cat_upto100_hoverboard.jpg",
    categories_id: 2,
  },
  {
    title: "LEGO NINJAGO TEMPLE",
    description:
      "LEGO NINJAGO Temple of The Dragon Energy Cores 71795, Building Toy with a NINJAGO Temple and 6 Minifigures",
    price: 95,
    filename: "02_cat_upto100_legotemple.jpg",
    categories_id: 2,
  },
  {
    title: "Laser Tag",
    description: "Rechargeable Laser Tag Blasters & Vest Sensors",
    price: 120,
    filename: "03_cat_over100_lazertag.jpg",
    categories_id: 3,
  },
  {
    title: "Dance Mat",
    description:
      "Eletrionic Dance Mat with Multiple Modes, Non-Slip Dance Mat for TV with HD Camera",
    price: 103,
    filename: "03_cat_over100_dancemat.jpg",
    categories_id: 3,
  },
  {
    title: "Ninja Obstacle Course",
    description:
      "Ninja Obstacle Course for Kids Backyard - 10 Durable Obstacles",
    price: 140,
    filename: "03_cat_over100_obstaclecourse.jpg",
    categories_id: 3,
  },
  {
    title: "Smart Robot",
    description:
      "Large Programmable Interactive RC Robot with Voice Control and APP Control",
    price: 120,
    filename: "03_cat_over100_smartrobot.jpg",
    categories_id: 3,
  },
  {
    title: "Barbie Dreamhouse",
    description: "Pool Party Doll House with 75+ Pieces and 3-Story Slide",
    price: 140,
    filename: "03_cat_over100_barbiereamhouse.jpg",
    categories_id: 3,
  },
  {
    title: "LEGO Super Mario Castle",
    description: "Peach’s Castle Expansion Set 71408",
    price: 105,
    filename: "03_cat_over100_legomariocastle.jpg",
    categories_id: 3,
  },
  {
    title: "Police Car Ride",
    description:
      "Police Car Ride on 12V Electric Car for Kids Battery Powered Ride on Toys Cop Car with Remote Control, Siren, Flashing Lights, Music, Blueooth, and Spring Suspension",
    price: 180,
    filename: "03_cat_over100_policecar.jpg",
    categories_id: 3,
  },
  {
    title: "Movie Theatre Snack Bar",
    description:
      "Pretend Concession Stand Fun- Full Set Includes Popcorn Machine, Hot Dogs, Candy Bars, Sodas, Cash Register, Credit Card & More",
    price: 140,
    filename: "03_cat_over100_snackbar.jpg",
    categories_id: 3,
  },
  {
    title: "Electric Scooter",
    description: "Electric Kids Scooter, Ages 8+, Max Speed 6-15 MPH",
    price: 122,
    filename: "03_cat_over100_electricscooter.jpg",
    categories_id: 3,
  },
  {
    title: "Disney Wooden Dollhouse",
    description: "Disney Princess Dance & Dream Wooden Dollhouse",
    filename: "03_cat_over100_disneydollhouse.jpg",
    price: 146,
    categories_id: 3,
  },
];

const seedProducts = async () => {
  try {
    await Products.bulkCreate(productsData);
    console.log("Products seeded successfully!");
  } catch (error) {
    console.error("Error during products seeding:", error);
  }
};

module.exports = seedProducts;
