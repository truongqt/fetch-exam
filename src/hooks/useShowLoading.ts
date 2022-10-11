import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from 'redux-manager/allActions';

export function useShowLoading(show: boolean) {
    const dispatch = useDispatch();
    useFocusEffect(
        React.useCallback(() => {
            dispatch(allActions.common.setShowLoading(show));
            return () => dispatch(allActions.common.setShowLoading(false));
        }, [show]),
    );
}
