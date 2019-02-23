import io from "socket.io-client";
const socket = io("http://localhost");
let usernameForm;

const messages = [];
const usernames = [];

socket.on("new_message", function(data) {
	messages.push(data);
});

socket.on("usernames", function(data) {
	socket.on("get_user", function(user) {
		usernames.push(user);
	});
	socket.emit("getUser");
});

usernameForm.submit(function(e) {
	e.preventDefault();
	socket.emit("add_new_user", $username.val(), function(data) {
		console.log(data);
	});
});
