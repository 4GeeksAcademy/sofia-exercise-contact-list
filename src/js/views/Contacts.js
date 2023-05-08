import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { ModalEdit } from "../component/ModalEdit.js";
import { Context } from "../store/appContext.js";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});

	const [edit, setEdit] = useState({
		showModal: false,
		id: undefined
	});

	// useEffect funciona como el onload y ejecuta el codigo que tiene dentro ni bien se cague el componente
	useEffect(() => {
		actions.searchContact();
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((item, index) => (
							<ContactCard
								id={item.id}
								full_name={item.full_name}
								address={item.address}
								phone={item.phone}
								email={item.email}
								key={index}
								onDelete={() => setState({ showModal: true, id: item.id })}
								edit={() => setEdit({ showModal: true, id: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal id={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
			<ModalEdit id={edit.id} show={edit.showModal} onClose={() => setEdit({ showModal: false })} />
		</div>
	);
};
