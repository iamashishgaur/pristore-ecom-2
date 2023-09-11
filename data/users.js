const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Ashish Kumar",
    email: "ashish@admin.com",
    phone_number: "7752982456",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Alok Kumar",
    email: "alok@xyz.com",
    phone_number: "7068508899",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "user",
    email: "user@user.com",
    phone_number: "7752982456",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];
module.exports = users;
