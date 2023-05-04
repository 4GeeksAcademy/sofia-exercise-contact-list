import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = props => {
	const { actions } = useContext(Context);

	//declareacion de estados
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		actions.addNew(fullName, email, phone, address);
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5"> Add a new contact </h1>{" "}
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label> Full Name </label>{" "}
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={e => setFullName(e.target.value)}
							value={fullName}
						/>
					</div>{" "}
					<div className="form-group">
						<label> Email </label>{" "}
						<input
							onChange={e => setEmail(e.target.value)}
							value={email}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>{" "}
					<div className="form-group">
						<label> Phone </label>{" "}
						<input
							onChange={e => setPhone(e.target.value)}
							value={phone}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>{" "}
					<div className="form-group">
						<label> Address </label>{" "}
						<input
							onChange={e => setAddress(e.target.value)}
							value={address}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>{" "}
					<button type="submit" className="btn btn-primary form-control">
						save{" "}
					</button>{" "}
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts{" "}
					</Link>{" "}
				</form>{" "}
			</div>{" "}
		</div>
	);
};
