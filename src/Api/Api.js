

const Api = {
	fetchData: function (endpoint, stateFunction, paramsObject) {
		fetch(process.env.REACT_APP_API_URL + endpoint, paramsObject)
			.then(response => response.json())
			.then(stateFunction)
			.catch(err => console.log(err))
	}
}

export default Api
