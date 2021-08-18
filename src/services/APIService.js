import axios from 'axios'
import $store from "../store/index"

export const APIService = {
    login,
    getUserInfo
}
const APIURL = 'https://reciper-service.herokuapp.com/api/v1'

async function login(provider, token) {
    const { data } = await axios.post(`${APIURL}/auth/${provider}/token`, { access_token: token })

    return data.access_token
}

async function getUserInfo() {
    const accessToken = _getAccessToken();
    const config = { headers: { Authorization: `Bearer ${accessToken}` } }
    const { data } = await axios.get(`${APIURL}/auth/userinfo`, config)
    return data;
}
async function createCart(itemsIds) {
    const { data } = await axios.post


}

function _getAccessToken() {
    return $store.getters.getAccessToken
}