const API_URL = "https://localhost:5001/api/";

const Api = {
	fetchData: function (endpoint, stateFunction, paramsObject) {
		fetch(API_URL + endpoint, paramsObject)
			.then(response => response.json())
			.then(stateFunction)
			.catch(err => console.log(err))
	}
}

export default Api
