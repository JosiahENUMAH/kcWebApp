// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { setMessage } from "./messageSlice";
// // import AuthService from "../service/authService";
// import { store } from "../../store";

// // let user;
// // let storage = localStorage.getItem("user");
// // if (storage) {
// //   alert("hhh");
// //   user = JSON.parse(localStorage.getItem("user"));
// // } else {
// // }


// export const register = createAsyncThunk(
//   "auth/register",
//   async ({ fullname, email, password, confirmPassword }, thunkAPI) => {
//     alert("got here")
//     try {
//       const response = await AuthService.register(
//         fullname,
//         email,
//         password,
//         confirmPassword
//       );
//       // thunkAPI.dispatch(setMessage(response.data.message));
//       store.dispatch(setMessage(response.data.message));
//       return response.data;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue();
//     }
//   }
// );

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const data = await AuthService.login(email, password);
//       return { user: data };
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue();
//     }
//   }
// );

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await AuthService.logout();
// });

// // const initialState = user
// //   ? { isLoggedIn: true, user }
// //   : { isLoggedIn: false, user: null };
// const initialState = {
//   isLoggedIn : false, 
//   user : {}
// }

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [register.fulfilled]: (state, action) => {
//       state.isLoggedIn = false;
//     },
//     [register.rejected]: (state, action) => {
//       state.isLoggedIn = false;
//     },
//     [login.fulfilled]: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload.user;
//     },
//     [login.rejected]: (state, action) => {
//       state.isLoggedIn = false;
//       state.user = null;
//     },
//     [logout.fulfilled]: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = null;
//     },
//   },
// });

// const { reducer } = authSlice;
// export default reducer;