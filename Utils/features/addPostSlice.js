import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  arrayUnion,
  setDoc,
  addDoc,
  collection,
  updateDoc,
} from 'firebase/firestore';

const db = getFirestore();

const initialState = {
  addpost: [],
  loadings: false,
};

export const addPost = createAsyncThunk('posts/addPosts', async (vardata) => {
  const { text, userid } = vardata;
  console.log(text);
  console.log(userid);
  console.log(new Date());
  var d = new Date();
  let dat = d.toString();
  await addDoc(collection(db, 'Posts'), {
    text: text,
    userid: userid,
    likes: [],
    comments: [],
    date: dat,
  });
  return 'Success';
});

export const addPostSlice = createSlice({
  name: 'addpost',
  initialState,
  reducers: {},
  extraReducers: {
    [addPost.pending]: (state) => {
      state.loadings = true;
    },
    [addPost.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.addpost = payload;
    },
    [addPost.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const addPostReducer = addPostSlice.reducer;
