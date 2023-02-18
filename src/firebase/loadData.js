import { getDatabase, ref, child, get } from "firebase/database";
import { app } from "./firebase";
const firebaseApp = app;
export async function loadItems(dataType) {
    const dbRef = ref(getDatabase());
    const resultItems = await get(child(dbRef, `LiquidItems/${dataType}/items`)).then((snapshot) => {
        if (snapshot.exists()) {
            return Object.values(snapshot.val());
        }
    }).catch((error) => {
        console.error(error);
    });
    return resultItems;
};

export async function searchItems(keyword) {
    const dbRef = ref(getDatabase());
    const resultItems = await get(child(dbRef, `LiquidItems/mainItems/items`)).then((snapshot) => {
        if (snapshot.exists()) {
            return Object.values(snapshot.val()).filter(item => item.title.replace(/ /g, "").includes(keyword));
        }
    }).catch((error) => {
        console.error(error);
    });
    return resultItems;
};



