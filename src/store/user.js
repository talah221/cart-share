export const userStore = {
    namespaces: true,
    state: {
        loggedInUser: null
    },
    mutations: {
        setUser(state, payload) {
            console.log("Logged user:", payload);
            state.loggedInUser = payload;
        }
    },
    actions: {
        onSetUser: ({ commit }, payload) => commit("setUser", payload)

    },
    getters: {
        getLoggedUser: (state) => state.loggedInUser
    }
}