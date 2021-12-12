import { CommentRounded } from '@mui/icons-material';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  arrayUnion,
  collection,
  updateDoc,
} from 'firebase/firestore';

const db = getFirestore();

const initialState = {
  addcomment: [],
  loadings: false,
};

export const addComment = createAsyncThunk(
  'posts/addComment',
  async (vardata) => {
    const { postid, userid, comment } = vardata;
    const docRef = doc(db, 'Posts', postid);
    const querySnapshot = await getDoc(docRef);
    console.log(querySnapshot);
    console.log(querySnapshot.data().comments);
    var d = new Date();
    let dat = d.toString();
    await updateDoc(docRef, {
      comments: arrayUnion({ text: comment, userid: userid, date: dat }),
    });
    return 'success';
  }
);

export const addCommentSlice = createSlice({
  name: 'addcommment',
  initialState,
  reducers: {},
  extraReducers: {
    [addComment.pending]: (state) => {
      state.loadings = true;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.addcomment = payload;
    },
    [addComment.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const addCommentReducer = addCommentSlice.reducer;
