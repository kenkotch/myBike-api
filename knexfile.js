'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: "postgres://my-bike.herokuapp.com/myBike"
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
