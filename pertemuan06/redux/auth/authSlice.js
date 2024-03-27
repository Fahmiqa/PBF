import { createSlice } from

export const inisialState = {
    isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    inisialState,
    reducers: {
        setLogin(state, action){
            //state?.isLogin = action?.payload.isLogin;
            if (action && action.payload && typeof action.payload.isLogin !== ' undefined'){

            }
        },
    },
});

export const { setLogin } = authSlice.actions;

const authReducer = authSlice.reducers;
export default authReducer;