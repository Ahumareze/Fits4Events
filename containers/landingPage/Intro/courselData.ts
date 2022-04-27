//projects
const img1 = require('../../../public/assets/skycrapper.png');
const img2 = require('../../../public/assets/technology.jpg');
const img3 = require('../../../public/assets/business.jpg');

//users
const user1 = require('../../../public/assets/user1.jpg');
const user2 = require('../../../public/assets/user2.jpg');
const user3 = require('../../../public/assets/user3.jpg');

const data = [
    {
        title: "Plan for 5 star hotel in Lekki",
        image: img1.default.src,
        user: {
            user: user1.default.src,
            fullname: "Henry Ikubor",
            occupation: "Head Architect at KingBuilds.inc",
            verified: true
        }
    },
    {
        title: "Food Delivery app",
        image: img2.default.src,
        user: {
            user: user2.default.src,
            fullname: "Ifeanyi Ahumareze",
            occupation: "Front-end developer at Syntax Software",
            verified: true
        }
    },
    {
        title: "Restaurant franchise",
        image: img3.default.src,
        user: {
            user: user3.default.src,
            fullname: "Frank Osinachi",
            occupation: "Lead marketing director",
            verified: true
        }
    },
];

export default data;