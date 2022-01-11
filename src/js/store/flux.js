const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			character: [],
			planet: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => setStore({ character: data.results }))
					.catch(error => console.error(error));

				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => setStore({ planet: data.results }))
					.catch(error => console.error(error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFav: newItem => {
				let myStore = getStore();
				let newFav = myStore.favorites.concat(newItem);
				setStore({ favorites: newFav });
			},
			delFav: deletedItem => {
				var storeCopy = getStore();
				var newFavorites = storeCopy.favorites.filter((value, index) => {
					return value != deletedItem;
				});
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;