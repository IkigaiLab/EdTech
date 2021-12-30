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
  userprodata: [],
  loadings: false,
};

export const userdataprofile = createAsyncThunk(
  'user/useralldata',
  async (userid) => {
    const userdata = [];
    const docRef = doc(db, 'users', userid);
    const querySnapshoting = await getDoc(docRef);
    console.log(querySnapshoting.data());
    userdata.push({
      followers: querySnapshoting.data().followers,
      following: querySnapshoting.data().following,
      name: querySnapshoting.data().name,
      id: querySnapshoting.id,
    });
    console.log(userdata);
    return userdata;
  }
);

export const followunfollowpeople = createAsyncThunk(
  'people/followunfollowpeople',
  async (vardata) => {
    const { userid, followuserid } = vardata;
    // alert('followed.....' + userid + '........' + followuserid);
    const querySnapshot = await getDocs(collection(db, 'users'));
    console.log(querySnapshot);
    console.log(querySnapshot.docs.length);
    const docRef = doc(db, 'users', userid);
    const userfollowingdata = (await getDoc(docRef)).data().following;
    console.log(userfollowingdata);
    let flag = 0;
    for (const id of userfollowingdata) {
      if (id.userid === followuserid) {
        flag = 1;
      }
    }

    for (const dataObj of querySnapshot.docs) {
      if (dataObj.id === userid) {
        if (flag === 0) {
          await updateDoc(docRef, {
            following: arrayUnion({ userid: followuserid }),
          });
          const docRefs = doc(db, 'users', followuserid);
          await updateDoc(docRefs, {
            followers: arrayUnion({ userid: userid }),
          });
        } else {
          await updateDoc(docRef, {
            following: arrayRemove({ userid: followuserid }),
          });
          const docRefs = doc(db, 'users', followuserid);
          await updateDoc(docRefs, {
            followers: arrayRemove({ userid: userid }),
          });
        }
      }
    }
  }
);

export const userprofileSlice = createSlice({
  name: 'userprodata',
  initialState,
  reducers: {},
  extraReducers: {
    [userdataprofile.pending]: (state) => {
      state.loadings = true;
    },
    [userdataprofile.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.userprodata = payload;
    },
    [userdataprofile.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const userprofileSliceReducer = userprofileSlice.reducer;
