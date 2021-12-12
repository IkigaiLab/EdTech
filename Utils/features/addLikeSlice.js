import { CommentRounded } from '@mui/icons-material';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  arrayUnion,
  arrayRemove,
  collection,
  updateDoc,
} from 'firebase/firestore';

const db = getFirestore();

const initialState = {
  addlike: [],
  loadings: false,
};

export const addLike = createAsyncThunk('posts/addLike', async (vardata) => {
  const { postid, userid } = vardata;
  console.log(new Date());
  const docRef = doc(db, 'Posts', postid);
  const querySnapshot = await getDoc(docRef);
  console.log(querySnapshot);
  console.log(querySnapshot.data().likes);
  let flag = 0;
  for (let i = 0; i < querySnapshot.data().likes.length; i++) {
    if (querySnapshot.data().likes[i].userid === userid) {
      flag = 1;
    }
  }
  if (flag === 0) {
    await updateDoc(docRef, {
      likes: arrayUnion({ userid: userid }),
    });
  } else {
    await updateDoc(docRef, {
      likes: arrayRemove({ userid: userid }),
    });
  }
  return 'success';
});

export const addLikeSlice = createSlice({
  name: 'addlike',
  initialState,
  reducers: {},
  extraReducers: {
    [addLike.pending]: (state) => {
      state.loadings = true;
    },
    [addLike.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.addlike = payload;
    },
    [addLike.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const addLikeReducer = addLikeSlice.reducer;
