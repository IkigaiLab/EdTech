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
  userdatafollow: [],
  loadings: false,
};

export const userfollow = createAsyncThunk(
  'user/followdata',
  async (userid) => {
    const userdata = [];
    const docRef = doc(db, 'users', userid);
    const querySnapshoting = await getDoc(docRef);
    console.log(querySnapshoting.data());

    console.log(userdata);
    const followingdata = [];
    for (const id of querySnapshoting.data().following) {
      const docRefs = doc(db, 'users', id.userid);
      const querySnapshotings = await getDoc(docRefs);
      console.log(querySnapshotings.data());
      followingdata.push({
        name: querySnapshotings.data().name,
        id: querySnapshotings.id,
      });
    }
    console.log(followingdata);

    const followersdata = [];
    for (const id of querySnapshoting.data().followers) {
      const docRefs = doc(db, 'users', id.userid);
      const querySnapshotings = await getDoc(docRefs);
      console.log(querySnapshotings.data());
      followersdata.push({
        name: querySnapshotings.data().name,
        id: querySnapshotings.id,
      });
    }
    console.log(followersdata);

    userdata.push({
      followers: querySnapshoting.data().followers,
      following: querySnapshoting.data().following,
      followingdata: followingdata,
      followersdata: followersdata,
    });
    console.log(userdata);
    return userdata;
  }
);

export const myprofileSlice = createSlice({
  name: 'userdatafollow',
  initialState,
  reducers: {},
  extraReducers: {
    [userfollow.pending]: (state) => {
      state.loadings = true;
    },
    [userfollow.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.userdatafollow = payload;
    },
    [userfollow.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const myprofileSliceReducer = myprofileSlice.reducer;
