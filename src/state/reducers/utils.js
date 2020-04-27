export const createReducer = (handlers, intialState) => (state = intialState, action) => {
    if (!handlers.hasOwnProperty(action.type)) {
        return state;
    }
    return handlers[action.type](state, action);
}