import * as actions from '../actions/dataActions'

export const initialState = {
  data: [],
  loading: false,
  hasErrors: false,
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DATA:
      return { ...state, loading: true }
    case actions.GET_DATA_SUCCESS:
      return { data: action.payload, loading: false, hasErrors: false }
    case actions.GET_DATA_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}