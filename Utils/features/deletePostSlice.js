import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  collection,
  updateDoc,
} from 'firebase/firestore';

const db = getFirestore();

const initialState = {
  deletepost: [],
  loadings: false,
};

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postid) => {
    // const docRef = doc(db, 'Posts', postid);
    // const querySnapshot = await getDoc(docRef);
    // console.log(querySnapshot.data());
    await deleteDoc(doc(db, 'Posts', postid));
    return 'success';
  }
);

export const deletePostSlice = createSlice({
  name: 'deletepost',
  initialState,
  reducers: {},
  extraReducers: {
    [deletePost.pending]: (state) => {
      state.loadings = true;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.deletepost = payload;
    },
    [deletePost.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const deletePostReducer = deletePostSlice.reducer;
