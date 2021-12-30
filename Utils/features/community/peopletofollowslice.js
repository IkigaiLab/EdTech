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
  followpeople: [],
  loadings: false,
};

export const tofollowpeople = createAsyncThunk(
  'people/tofollowpeople',
  async (userid) => {
    console.log('follow people');
    const allusersData = [];
    const querySnapshot = await getDocs(collection(db, 'users'));
    console.log(querySnapshot);
    console.log(querySnapshot.docs.length);
    for (const dataObj of querySnapshot.docs) {
      // console.log(dataObj.data());
      // console.log(dataObj.id);
      // console.log(dataObj.data().name);
      // console.log(dataObj.data().followers);
      // console.log(dataObj.data().following);
      allusersData.push({
        userid: dataObj.id,
        name: dataObj.data().name,
        followers: dataObj.data().followers,
        following: dataObj.data().following,
      });
    }
    console.log(allusersData);
    const userdata = allusersData.filter((user) => user.userid != userid);
    const docRef = doc(db, 'users', userid);
    const querySnapshoting = await getDoc(docRef);
    console.log(querySnapshoting);
    console.log(querySnapshoting.data().following);
    const filteredUserData = [];
    for (const dataObj1 of userdata) {
      console.log(dataObj1);
      for (const dataObj of querySnapshoting.data().following) {
        if (dataObj1.userid === dataObj.userid) {
          // alert('mached');
          console.log(
            filteredUserData.push(
              ...userdata.filter((user) => user.userid === dataObj.userid)
            )
          );
        }
      }
    }
    console.log(filteredUserData);
    console.log(userdata);
    const filtered = userdata.filter(function (e) {
      return this.indexOf(e) < 0;
    }, filteredUserData);
    console.log(filtered);

    return filtered.sort(() => Math.random() - 0.5);
  }
);

export const followbuttonpeople = createAsyncThunk(
  'people/followbuttonpeople',
  async (vardata) => {
    const { userid, followuserid } = vardata;
    // alert('followed.....' + userid + '........' + followuserid);
    const querySnapshot = await getDocs(collection(db, 'users'));
    console.log(querySnapshot);
    console.log(querySnapshot.docs.length);
    const docRef = doc(db, 'users', userid);
    for (const dataObj of querySnapshot.docs) {
      if (dataObj.id === userid) {
        await updateDoc(docRef, {
          following: arrayUnion({ userid: followuserid }),
        });
        const docRefs = doc(db, 'users', followuserid);
        await updateDoc(docRefs, {
          followers: arrayUnion({ userid: userid }),
        });
      }
    }
    // console.log(allusersData);
    // return allusersData;
  }
);

export const peopletofollowSlice = createSlice({
  name: 'followpeople',
  initialState,
  reducers: {},
  extraReducers: {
    [tofollowpeople.pending]: (state) => {
      state.loadings = true;
    },
    [tofollowpeople.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.followpeople = payload;
    },
    [tofollowpeople.rejected]: (state) => {
      state.loadings = false;
    },

    [followbuttonpeople.pending]: (state) => {
      // state.loadings = true;
    },
    [followbuttonpeople.fulfilled]: (state) => {
      // state.loadings = false;
    },
    [followbuttonpeople.rejected]: (state) => {
      // state.loadings = false;
    },
  },
});

export const peopletofollowReducer = peopletofollowSlice.reducer;
