export const userStore = {
    namespaces: true,
    state: {
        loggedInUser: null,
        accessToken: localStorage.accessToken ? localStorage.accessToken : null
    },
    mutations: {
        setUser: (state, payload) => state.loggedInUser = payload,
        setAccessToken: (state, payload) => {
            localStorage.accessToken = payload
            state.accessToken = payload
        }
    },
    actions: {
        onSetUser: ({ commit }, payload) => {
            if (!payload) localStorage.removeItem("accessToken")
            commit("setUser", payload)
        }

    },
    getters: {
        getLoggedUser: (state) => state.loggedInUser,
        getAccessToken: (state) => state.accessToken
    }
}