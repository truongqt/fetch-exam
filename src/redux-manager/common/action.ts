export const commonActionTypes = {
    SET_SHOW_LOADING: 'SET_SHOW_LOADING',
};

export const setShowLoading = (showLoading: boolean) => {
    return {
        type: commonActionTypes.SET_SHOW_LOADING,
        payload: showLoading,
    }
}