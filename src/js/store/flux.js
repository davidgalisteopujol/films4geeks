const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			movies: [],
			searchedMovies: [],
			searchValue: ''
		},
		actions: {
			
			fetchMovies: async () => {
				const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=c5083e57bd8e698a2a69427a666f125f';
				const API_URL_2 = 'https://imdb-api.com/en/API/ComingSoon/k_aq317h6s'
				const empty = []
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}	
				}
				const response  = await fetch (API_URL, CONFIG)
				const json = await response.json();
			
				console.log(">>DATA>>", json)
				setStore({movies:json.results})
		
			},

		}
	};
};

export default getState;
