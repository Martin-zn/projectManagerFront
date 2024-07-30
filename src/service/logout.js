import { logout as logoutAction } from "../store/authSlice";

export const logout = () => (dispatch) => {
    dispatch(logoutAction());
}