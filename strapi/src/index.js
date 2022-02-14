"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    //console.log(strapi.server.httpServer);
    const io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
        //allowedHeaders: ["my-custom-header"],
        //credentials: true,
      },
    });
    io.on("connection", function (socket) {
      console.log(`${socket.id} connected`);
      socket.on("join", ({ username, room }) => {
        console.log("user connected");
        console.log("username is ", username);
        console.log("room is...", room);
      });
    });
  },
};
