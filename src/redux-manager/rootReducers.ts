import { combineReducers } from 'redux';
import { auth } from './auth/reducer';
import { common } from './common/reducer';

const appReducer = combineReducers({
    common,
    auth,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;