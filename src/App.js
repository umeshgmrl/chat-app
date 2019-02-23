import React, { Component } from "react";
import io from "socket.io-client";
import "./App.css";
import MessageList from "./components/MessageList/MessageList";
import InputBar from "./components/InputBar/InputBar";
import OnlineList from "./components/OnlineList/OnlineList";
import Modal from "./components/Modal/Modal";

const socket = io("http://localhost:3001");

class App extends Component {
	state = {
		users: [],
		messages: [],
		showModal: true
	};

	componentDidMount() {
		const this1 = this;

		socket.on("new_message", function(data) {
			const { messages } = this1.state;
			messages.push(data);
			this1.setState({ messages });
		});

		socket.on("usernames", function(data) {
			socket.on("get_user", function(user) {
				const { users } = this1.state;
				users.push(user);
				this1.setState({ users });
			});
			socket.emit("getUser");
		});
	}

	sendMessage = e => {
		if (e) e.preventDefault();
		socket.emit("send_message", "Hello shhrbeh", new Date());
	};

	addNewUser = e => {
		const this1 = this;
		e.preventDefault();
		socket.emit("add_new_user", "Bhumesh", function(data) {
			this1.sendMessage();
			this1.setState({
				showModal: false
			});
		});
	};

	render() {
		const { messages, users, showModal } = this.state;
		console.log(this.state);
		return (
			<div className="App container">
				<MessageList messages={messages} />
				<br />
				<InputBar onSubmit={this.sendMessage} />
				<OnlineList users={users} />
				{showModal && <Modal onSubmit={this.addNewUser} />}
			</div>
		);
	}
}

export default App;
