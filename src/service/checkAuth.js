import { checkAuth } from "../store/authSlice"

export const verifyAuth = () => (dispatch) => {
    dispatch(checkAuth());
}