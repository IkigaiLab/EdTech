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
  personaliseposts: [],
  loadings: false,
};

export const getpersonalisePosts = createAsyncThunk(
  'posts/getpersonalisePosts',
  async (userid) => {
    const allpostsData = [];
    const querySnapshot = await getDocs(collection(db, 'Posts'));
    console.log(querySnapshot);
    console.log(querySnapshot.docs.length);
    const docs = querySnapshot.docs;
    for (let i = 0; i < docs.length; i++) {
      const allcomments = [];
      console.log('in for loop');
      console.log(docs[i].id);
      console.log(docs[i].data());
      console.log('in for loop');
      let postsdata = {
        id: docs[i].id,
        ...docs[i].data(),
      };
      console.log(postsdata);
      const docRef = doc(db, 'users', postsdata.userid);
      const querySnapshot = await getDoc(docRef);
      const name = querySnapshot.data().name;
      const text = docs[i].data().text;
      for (let i = 0; i < postsdata.comments.length; i++) {
        console.log(postsdata.comments.length);
        console.log(postsdata.comments[i].userid);
        const docRef = doc(db, 'users', postsdata.comments[i].userid);
        const querySnapshot = await getDoc(docRef);
        console.log(querySnapshot.data());
        console.log(querySnapshot.data()?.name);
        const name = querySnapshot.data().name;
        const text = postsdata.comments[i].text;
        const date = postsdata.comments[i].date;
        allcomments.push({
          name,
          text,
          date,
        });
      }
      allpostsData.push({
        id: docs[i].id,
        userid: docs[i].data().userid,
        name: name,
        text: text,
        comments: allcomments,
        likes: docs[i].data().likes,
        date: docs[i].data().date,
      });
    }
    // filter
    const docRefs = doc(db, 'users', userid);
    const querySnap = await getDoc(docRefs);
    console.log(querySnap.data().following);
    const followingdta = [];
    for (const id of querySnap.data().following) {
      followingdta.push(id.userid);
    }
    console.log(followingdta);
    console.log(allpostsData);
    var filteredArray = allpostsData.filter(function (itm) {
      return followingdta.indexOf(itm.userid) > -1;
    });
    console.log(filteredArray);
    // filter

    filteredArray.sort((a, b) => {
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateA - dateB;
    });
    return filteredArray.reverse();
  }
);

export const socialfeedSlice = createSlice({
  name: 'personaliseposts',
  initialState,
  reducers: {},
  extraReducers: {
    [getpersonalisePosts.pending]: (state) => {
      state.loadings = true;
    },
    [getpersonalisePosts.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.personaliseposts = payload;
    },
    [getpersonalisePosts.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const socialfeedSliceReducer = socialfeedSlice.reducer;
