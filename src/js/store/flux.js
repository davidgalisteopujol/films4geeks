const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			movies: [],
			comingSoon: [],
			favourites: [],
			pending: [],
		},
		actions: {
			
			fetchMovies: async () => {
				const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=c5083e57bd8e698a2a69427a666f125f';
				//const API_URL_2 = 'https://imdb-api.com/en/API/ComingSoon/k_aq317h6s'
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}	
				}
				const response  = await fetch (API_URL, CONFIG)
				const json = await response.json();
			
				console.log(json)
				setStore({movies:json.results})
			},

			fetchComingSoon: async () => {
				//const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=c5083e57bd8e698a2a69427a666f125f';
				const API_URL_2 = 'https://imdb-api.com/en/API/ComingSoon/k_aq317h6s'
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}	
				}
				const response  = await fetch (API_URL_2, CONFIG)
				const json = await response.json();
			
				console.log(">>items>>", json)
				setStore({comingSoon:json.items})
			},

			setFavourites: (poster_path) => {
				const store = getStore();
				setStore({favourites: [...store.favourites, poster_path]})
				console.log(store.favourites)
			},

			removeFavourite: (item) => {
				const store = getStore();
				setStore({ favourites: store.favourites.filter(movie => movie !== item) });
			},


			setPending: (poster_path) => {
				const store = getStore();
				setStore({pending: [...store.pending, poster_path]})
				console.log(store.pending)
			},

			removePending: (item) => {
				const store = getStore();
				setStore({ pending: store.pending.filter(movie => movie !== item) });
			},

		}
	};
};

export default getState;
