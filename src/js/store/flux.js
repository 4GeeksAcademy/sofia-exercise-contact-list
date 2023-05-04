const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [
				// { fullName: "Ana Perez", email: "anaperez@gamil.com", phone: "4444444444", address: "portugal" },
				// {	fullName: "Pedro feijoo",
				// 	email: "pedrofeijoo@gamil.com",
				// 	phone: "555555555",
				// 	address: "ccs-vzla"
				// },
				// { fullName: "Juan iñigo", email: "juaniñigp@gamil.com", phone: "666666666", address: "miami" },
				// {	fullName: "Sofia Fernandes",
				// 	email: "sofia@gamil.com",
				// 	phone: "0000000",
				// 	address: "italia"
				// }
			]

			//cada objeto representaria entonces un contacto
			//Your data structures, A.K.A Entities
		},
		actions: {
			// funcion de agregar un nuevo contacto
			addNew: (fullName, email, phone, address) => {
				console.log(fullName, email, phone, address);
				//getStore().contacts.concat({ fullName, email, phone, address });
				//setStore({ contacts: getStore().contacts.concat({ fullName, email, phone, address }) });
			},
			searchContact: () => {
				//setStore({propiedadDeStore:valor})
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/sofia18")
					.then(response => response.json()) // te trae un respuestas y la convierte en json
					.then(data => setStore({ contacts: data })) // esa respuesta la voy a guardar en un espacio de memoria que se llame "data" que a su vez se convertira en un objeto.
					.catch(err => console.log("request failed", err)); // si sale algo mal en alguno de los dos primeros pasos, aqui te mostraria el error.
			}
		}
	};
};
export default getState;
