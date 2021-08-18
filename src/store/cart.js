export const cartStore = {
    namespaces: true,
    state: {
        cartProducts: []
    },
    mutations: {
        addProduct: (state, newProduct) => state.cartProducts = [...state.cartProducts, newProduct],
        removeProduct: (state, idx) => state.cartProducts.splice(idx, 1)
    },
    actions: {

        toggleProductOnCart: ({ commit, state }, payload) => {
            const productIdx = state.cartProducts.findIndex(p => p.id === payload.id)
            if (productIdx === -1) return commit("addProduct", payload)
            return commit("removeProduct", productIdx);

        }

    },
    getters: {
        getCartItems: (state) => state.cartProducts,
    }
}