import { api } from '../config/config'
import { fetchProjectsFailure, fetchProjectsStart, fetchProjectsSucces } from '../store/projectSlice';

export const fetchProjects = () => async (dispatch) => {
    dispatch(fetchProjectsStart());
    try {
        const response = await api.get("/project");
        dispatch(fetchProjectsSucces(response.data));
    } catch (error) {
        dispatch(fetchProjectsFailure(error.message));
    }
};

