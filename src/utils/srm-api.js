
import rec1 from '../images/rec-1.jpg';
import rec2 from '../images/rec-2.jpg';
import rec3 from '../images/rec-3.jpg';


//?? fakeApi в данный момент
export const getTasksRequest = async () => {
    return await new Promise(resolve =>
        setTimeout(() => {
            resolve({
                success: true,
                data: [
                    {
                        id: 1,
                        type: 2,
                        descripion: "just a smal test task",
                        payload: [],
                        level: 0,
                        src: rec1,
                        authors: []
                    },
                    {
                        id: 2,
                        type: 2,
                        descripion: "Очень многа текста, пипец как многааааа",
                        payload: [],
                        level: 0,
                        src: rec2,
                        authors: []
                    },
                    {
                        id: 3,
                        type: 2,
                        descripion: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам  сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
                        payload: [],
                        level: 0,
                        src: rec3,
                        authors: []
                    }
                ]
            });
        }, 1500)
    );
};


const _baseUrl = '../db.json';

const getResourse = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
        console.log('error');
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);

    }
    return await res.json();
}

const getAllTasks = async () => {

    const res = await this.getResourse(`${this._apiBase}`);
    return res.tasks.map(this._transformTask);
}

const _transformTask = (task) => {
    return {

        id: task.id,
        type: task.type,
        description: task.description ? `${task.description}` : 'На данное задание нет описания',
        playload: task.playload,
        level: task.level,
        autors: task.autors
    }
}





// export const getDeliveryMethodsRequest = async () => {
//   return await new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         success: true,
//         data: [
//           {
//             thumb: delivery1,
//             id: 1,
//             text: 'Экспресс доставка',
//             duration: '7-14 дней',
//             price: 4000
//           },
//           {
//             thumb: delivery2,
//             id: 2,
//             text: 'Обычная доставка',
//             duration: '30-45 дней',
//             price: 0
//           }
//         ]
//       });
//     }, 1500);
//   });
// };

// export const getRecommendedItemsRequest = async () => {
//   return await new Promise(resolve =>
//     setTimeout(() => {
//       resolve({
//         success: true,
//         data: [
//           {
//             src: rec1,
//             price: 640,
//             text: 'Деревянная подушка в виде бревна, деревянная текстура пня для украшения'
//           },
//           {
//             src: rec2,
//             price: 480,
//             text: 'Забавная 3D имитация, закусочный хлеб, мягкая подушка в форме поясницы'
//           },
//           {
//             src: rec3,
//             price: 960,
//             text: '3D моделирование формы еды плюшевая подушка креативная курица колбаса'
//           },
//           {
//             src: rec4,
//             price: 360,
//             text: 'Забавная Мужская футболка Роберт Паттинсон стоячий мем'
//           }
//         ]
//       });
//     }, 1500)
//   );
// };

// const promoCodes = {
//   PROMO10: 10,
//   PROMO15: 15,
//   PROMO20: 20,
//   PROMO666: 100
// };

// export const applyPromoCodeRequest = async code => {
//   const result = { success: true };
//   if (~Object.keys(promoCodes).indexOf(code)) {
//     result.discount = promoCodes[code];
//   } else {
//     result.success = false;
//     result.discount = 0;
//   }
//   return await new Promise(resolve =>
//     setTimeout(() => {
//       resolve(result);
//     }, 1500)
//   );
// };

// export const orderCheckoutRequest = async order => {
//   const result = { success: true, data: { id: Math.floor(Math.random() * 1000) + 2033 } };

//   return await new Promise(resolve =>
//     setTimeout(() => {
//       resolve(result);
//     }, 1500)
//   );
// };

