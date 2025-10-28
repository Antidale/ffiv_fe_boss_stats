const Api = {
	fetchData: function (endpoint, stateFunction, paramsObject) {
		fetch(import.meta.env.VITE_API_URL + endpoint, paramsObject)
			.then(response => response.json())
			.then(stateFunction)
			.catch(err => console.log(err))
	},

	fetchHtml: function (endpoint, stateFunction, paramsObject) {
		fetch(import.meta.env.VITE_API_URL + endpoint, paramsObject)
			.then(response => {
				if (response.ok)
					response.text()
				else
					return null
			})
			.then(stateFunction)
			.catch(err => console.log(err))
	}
}

export default Api
