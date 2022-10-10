import { combineReducers } from 'redux';
import { auth } from './auth/reducer';
import { common } from './common/reducer';
import { market } from './market/reducer';

const appReducer = combineReducers({
    common,
    auth,
    market
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;