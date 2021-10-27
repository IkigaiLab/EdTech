import { getFirestore, getDocs, collection } from 'firebase/firestore';

const db = getFirestore();

export const getAllCourse = async () => {
  const allcourses = [];
  const querySnapshot = await getDocs(collection(db, 'Course'));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    allcourses.push(doc.data());
  });
  return allcourses;
};
