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
		showModal: true,
		message: "",
		username: ""
	};

	componentDidMount() {
		const this1 = this;

		socket.on("new_message", function(data) {
			const { messages } = this1.state;
			messages.push(data);
			this1.setState({ messages });
		});

		socket.on("usernames", function(data) {
			this1.setState({
				users: data
			})
		});
	}

	sendMessage = e => {
		if (e) e.preventDefault();
		const { message } = this.state;
		if (!message) return;
		socket.emit("send_message", message, new Date());
		this.setState({
			message: ""
		})
	};

	addNewUser = e => {
		const this1 = this;
		e.preventDefault();
		socket.emit("add_new_user", this.state.username, function(data) {
			this1.sendMessage();
			this1.setState({
				showModal: false
			});
		});
	};

	handleInput = e => {
		this.setState({
			message: e.target.value
		});
	};

	handleUserName = e => {
		this.setState({
			username: e.target.value
		});
	};

	render() {
		const { messages, users, showModal } = this.state;
		return (
			<div className="App container">
				<MessageList messages={messages} />
				<br />
				<InputBar onSubmit={this.sendMessage} onChange={this.handleInput}  value={this.state.message}/>
				<OnlineList users={users} />
				{showModal && (
					<Modal onSubmit={this.addNewUser} onChange={this.handleUserName}/>
				)}
			</div>
		);
	}
}

export default App;
