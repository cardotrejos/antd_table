import axios from 'axios'

export const GET_DATA = 'GET DATA'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE'

export const getData = () => ({
  type: GET_DATA,
})

export const getDataSuccess = data => ({
  type: GET_DATA_SUCCESS,
  payload: data,
})

export const getDataFailure = () => ({
  type: GET_DATA_FAILURE,
})

export function fetchData() {
  return async dispatch => {
    dispatch(getData())

    try {
      const response = await axios.get('https://api.eia.gov/series/?api_key=f8e294cce8855b7fa91bbbd11f0e31e4&series_id=ELEC.GEN.ALL-CA-97.M')
      const data = await response.data

      dispatch(getDataSuccess(data))
    } catch (error) {
      dispatch(getDataFailure())
    }
  }
}