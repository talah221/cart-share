import axios from 'axios'


export const APIService = {
    login
}
const APIURL = 'https://reciper-service.herokuapp.com/api/v1'

async function login(provider, token) {
    const { data } = await axios.post(`${APIURL}/auth/${provider}/token`, { access_token: token })
    console.log("Data", data);
}

async function createCart(itemsIds) {
    const { data } = await axios.post


}