const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [] //array vacio ya que no extraeremos de manera local los contactos

			//cada objeto representaria entonces un contacto
			//Your data structures, A.K.A Entities
		},
		actions: {
			/////////////////////// funcion de agregar un nuevo contacto
			addNew: (fullName, email, phone, address) => {
				//console.log(fullName, email, phone, address);
				let _datos = {
					full_name: fullName,
					email: email,
					agenda_slug: "sofia18",
					address: address,
					phone: phone
				};

				// esta seria la url a donde se haria el POST(con su metodo,tipo de dato y cuerpo)
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(_datos),
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				}) //estas serian las promesas
					.then(response => response.json()) //trae un arespuesta y la convierte a json
					.then(data => console.log(data)) /// esa respuesta la voy a guardar en un espacio de memoria que se llame "data" que a su vez se convertira en un objeto.
					.catch(err => console.log(err)); //// si sale algo mal en alguno de los dos primeros pasos, aqui te mostraria el error.
			},
			///////////////////////OBTENER CONTACTOS
			searchContact: () => {
				//setStore({propiedadDeStore:valor})
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/sofia18")
					.then(response => response.json()) // te trae un respuestas y la convierte en json
					.then(data => setStore({ contacts: data })) // esa respuesta la voy a guardar en un espacio de memoria que se llame "data" que a su vez se convertira en un objeto.
					.catch(err => console.log("request failed", err)); // si sale algo mal en alguno de los dos primeros pasos, aqui te mostraria el error.
			},

			//////DELETE CONTACTOS
			deleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(response => response.json())
					.then(data => {
						if (data.msg === "ok") {
							data;
							actions.searchContact();
						}
					})
					.catch(err => console.log(err));
			},

			//////////EDITAR CONTACTOS / O ACTUALIZAR CONTACTOS
			editContact: (name, email, phone, adress, id) => {
				let _datos = {
					full_name: fullName,
					email: email,
					agenda_slug: "sofia18",
					address: adress,
					phone: phone
				};
				console.log(name);
				// urlr de fetch
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(_datos),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				}) // ésta son las promesas
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
			}
		}
	};
};

export default getState;
