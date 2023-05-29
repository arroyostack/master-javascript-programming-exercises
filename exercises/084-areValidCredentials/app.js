
const areValidCredentials = (name, password) => (
    name.length >= 3 && password.length >= 8 ? true : false
)
