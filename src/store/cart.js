export const cartStore = {
    namespaces: true,
    state: {
        cartItems: []
    },
    mutations: {

    },
    actions: {
        // onSetUser: ({ commit }, payload) => {
        //     if (!payload) localStorage.removeItem("accessToken")
        //     commit("setUser", payload)
        // }

    },
    getters: {
        getCartItems: (state) => state.cartItems,
    }
}