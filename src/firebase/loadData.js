import { getDatabase, ref, child, get } from "firebase/database";
import { app } from "./firebase";

const firebaseApp = app;

export async function loadItems(dataType) {
    const dbRef = ref(getDatabase());
    const resultItems = await get(child(dbRef, `LiquidItems/${dataType}/items`)).then((snapshot) => {
        if (snapshot.exists()) { //인자로 받아온 dataType에 따라 해당 경로의 item을 리턴 
            return Object.values(snapshot.val());
        }
    }).catch((error) => {
        throw new Error('loadItems error', error);
    });
    return resultItems;
};

export async function searchItems(keyword) {
    const dbRef = ref(getDatabase());
    const resultItems = await get(child(dbRef, `LiquidItems/mainItems/items`)).then((snapshot) => {
        if (snapshot.exists()) {//인자로 받아온 keyword 문자열를 포함하는 item을 리턴  
            return Object.values(snapshot.val()).filter(item => item.title.replace(/ /g, "").includes(keyword)); //검색 키워드를 공백을 제거해 비교
        }
    }).catch((error) => {
        throw new Error('searchItems error', error);
    });
    return resultItems;
};



