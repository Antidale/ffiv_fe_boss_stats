

const Api = {
	fetchData: function (endpoint, stateFunction, paramsObject) {
		fetch(process.env.REACT_APP_API_URL + endpoint, paramsObject)
			.then(response => {
				if (response.ok)
					return response.json()

				throw new Error(response)
			})
			.then(stateFunction)
			.catch(err => console.log(JSON.stringify(err)))
	}
}

export default Api
