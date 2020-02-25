import produce from "immer";

export default function cart(state = [], action) {
  switch (action.type) {
    case "ADD_CART_SUCCESS":
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });

    case "REMOVE_CART":
      return produce(state, draft => {
        const produceIndex = draft.findIndex(p => p.id === action.id);

        if (produceIndex >= 0) {
          draft.splice(produceIndex, 1);
        }
      });

    case "UPDATE_AMOUNT_SUCCESS": {
      return produce(state, draft => {
        const produceIndex = draft.findIndex(p => p.id === action.id);

        if (produceIndex >= 0) {
          draft[produceIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
