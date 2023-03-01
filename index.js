const { Server } = require("socket.io");

const io = new Server(3000);
const socket = 1;
io.on("connection", (socket) => {
	socket.emit("Tersambung ke Socket.io robot lansia");

	//
	socket.on("conversation", () => {});
});
