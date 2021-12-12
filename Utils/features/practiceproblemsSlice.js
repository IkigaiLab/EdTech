import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  arrayUnion,
  collection,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

const db = getFirestore();

const initialState = {
  problems: [],
  loadings: false,
};

export const getallpracticeproblems = createAsyncThunk(
  'problems/getproblems',
  async (userid) => {
    const allproblemsData = [];
    const allproblemsDatass = [];
    let newdata = [];
    const querySnapshot = await getDocs(collection(db, 'practiceproblem'));
    let id = '';
    console.log(querySnapshot);
    console.log(querySnapshot.docs.length);
    const docs = querySnapshot.docs;
    for (let i = 0; i < docs.length; i++) {
      console.log('in for loop');
      console.log(docs[i].id);
      console.log(docs[i].data());
      console.log('in for loop');
      allproblemsData.push({
        id: docs[i].id,
        ...docs[i].data(),
      });
      id = docs[i].id;
      console.log(userid);
      const docRef = doc(db, 'users', userid);
      const querySnapshot = await getDoc(docRef);
      console.log(querySnapshot.data().practiceproblems);
      if (querySnapshot.data().practiceproblems) {
        // alert('already');
        // alert(docs[i].data().problemsdetail.length);
        // alert(querySnapshot.data().practiceproblems.length);
        if (
          querySnapshot.data().practiceproblems.length >
          docs[i].data().problemsdetail.length
        ) {
          // alert('problem');
          const newData = [];
          for (let k = 0; k < docs[i].data().problemsdetail.length; k++) {
            const test = [];
            test.push(...querySnapshot.data().practiceproblems);
            console.log(test);
            const hell = test.find(
              (v) => v.id === docs[i].data().problemsdetail[k].id
            );
            console.log(hell);
            newData.push(hell);
          }
          console.log(newData);
          await updateDoc(docRef, {
            practiceproblems: newData,
          });
        }
        if (
          querySnapshot.data().practiceproblems.length !=
          docs[i].data().problemsdetail.length
        ) {
          for (
            let p = querySnapshot.data().practiceproblems.length;
            p < docs[i].data().problemsdetail.length;
            p++
          ) {
            // alert(docs[i].data().problemsdetail[p]);
            newdata.push(docs[i].data().problemsdetail[p]);
          }
          await updateDoc(docRef, {
            practiceproblems: arrayUnion(...newdata),
          });
        }
      } else {
        await updateDoc(docRef, {
          practiceproblems: arrayUnion(...docs[i].data().problemsdetail),
        });
      }
    }
    console.log(allproblemsData);
    console.log(allproblemsData[0].problemsdetail);
    const docRef = doc(db, 'users', userid);
    const querySnapshots = await getDoc(docRef);
    console.log(querySnapshots.data().practiceproblems);

    const querySnapshoting = await getDocs(
      collection(db, `practiceproblem/${id}/problems`)
    );
    console.log(querySnapshoting);
    console.log(querySnapshoting.docs.length);
    const docums = querySnapshoting.docs;

    for (let i = 0; i < querySnapshots.data().practiceproblems.length; i++) {
      console.log(querySnapshots.data().practiceproblems[i].id);
      for (let j = 0; j < docums.length; j++) {
        // const allcomments = [];
        console.log('in for loop');
        // console.log(docums[j].id);
        // console.log(docums[j].data());
        if (querySnapshots.data().practiceproblems[i].id === docums[j].id) {
          console.log('id mathed');
          console.log(docums[j].data().question);
          allproblemsDatass.push({
            id: querySnapshots.data().practiceproblems[i].id,
            status: querySnapshots.data().practiceproblems[i].status,
            question: docums[j].data().question,
          });
        }
      }
    }

    console.log(allproblemsDatass);
    return allproblemsDatass;
  }
);

export const practiceproblemsSlice = createSlice({
  name: 'problems',
  initialState,
  reducers: {},
  extraReducers: {
    [getallpracticeproblems.pending]: (state) => {
      state.loadings = true;
    },
    [getallpracticeproblems.fulfilled]: (state, { payload }) => {
      state.loadings = false;
      state.problems = payload;
    },
    [getallpracticeproblems.rejected]: (state) => {
      state.loadings = false;
    },
  },
});

export const practiceproblemsReducer = practiceproblemsSlice.reducer;
