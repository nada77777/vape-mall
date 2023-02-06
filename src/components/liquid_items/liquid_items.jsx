import React from 'react';
import LiquidItem from '../liquid_item/liquid_item';

const LiquidItems = (props) => {
    const items = [
        {
            "company": "VPS",
            "title": "[VPS] 피치 홀릭 0.3 (폐호흡)",
            "id": "1312",
            "price": 35000,
            "sale": 24000,
            "percent": 32,
            "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/zombie_peach_zummev.jpg",
            "description": "빠져나올수 없는 진한 복숭아의 늪 !"
        },
        {
            "company": "VPS",
            "title": "[VPS] 피치 홀릭 0.98 (입호흡)",
            "id": "13122",
            "price": 35000,
            "sale": 22000,
            "percent": 38,
            "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/zombie_peach_p_fw6pjw.jpg",
            "description": "빠져나올수 없는 진한 복숭아의 늪 !"
        },
        {
            "company": "Kardinal",
            "title": "[카디날] 자바 0.98 (입호흡)",
            "id": "1315462",
            "price": 35000,
            "sale": 24000,
            "percent": 32,
            "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730404/liquid/primera_u2oxfq.jpg",
            "description": "크림과 원두커피의 환상 조합 !"
        },
        {
            "company": "Felix X Empire Brew",
            "title": "[펠릭스] 라임 라임 0.97 (입호흡)",
            "id": "1315416542",
            "price": 35000,
            "sale": 21000,
            "percent": 40,
            "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730406/liquid/%ED%8E%A0%EB%A6%AD%EC%8A%A4_i8w6lw.jpg",
            "description": "다시 돌아온 믿고 먹는 라임 라임 !"
        },
        {
            "company": "NSTY 사슴사슴",
            "title": "[네스티] 쿠반 0.98 (입호흡)",
            "id": "1313151112",
            "price": 30000,
            "sale": 22000,
            "percent": 27,
            "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730406/liquid/%EC%BF%A0%EB%B0%98_bjzcbb.jpg",
            "description": "연초와 견과류맛 액상!"
        }
    ]
    return (
        <section>
            <ul className='grid grid-cols-1 md:grid-cols-5 lg-grid-cols-4 gap-4'>
                {items.map((item) => <LiquidItem key={item.id} item={item} />)}
            </ul>
        </section>
    );
};

export default LiquidItems;