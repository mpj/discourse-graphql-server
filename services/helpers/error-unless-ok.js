const fn = (name, response) => {
  if (response.status !== 200) {
    throw new Error(`Operation "${name}" failed with status code ${response.status}`)
  }
  return response
}

const api = fn.bind(null, 'NONAME')
api.tag = name => fn.bind(null, name)
module.exports = api