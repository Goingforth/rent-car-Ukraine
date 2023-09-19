// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://65083c5c56db83a34d9bf950.mockapi.io';

// export const fetchAdverts = createAsyncThunk(
//     'adverts/fetchAll',

//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get('/adverts');
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );
import { useState, useEffect } from "react";
export function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    // useEffect(() => {
    //     fetch("https://65083c5c56db83a34d9bf950.mockapi.io/adverts/9582")
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result);
    //             },
    //             // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
    //             // чтобы не перехватывать исключения из ошибок в самих компонентах.
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    // if (error) {
    //     return <div>Ошибка: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Загрузка...</div>;
    // } else {
    //     return (
    //         <ul>
    //             {items.map(item => (
    //                 <li key={item.id}>
    //                     {item.name} {item.price}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }


    useEffect(() => {
        const url = new URL('https://65083c5c56db83a34d9bf950.mockapi.io/adverts');
        url.searchParams.append('completed', false);
        url.searchParams.append('page', page);
        url.searchParams.append('limit', 8);

        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            // .then(res => {
            // if (res.ok) {
            //     console.log(res.json());
            //     return res.json();
            // }
            // // handle error
            // })
            .then(res => res.json())
            .then(res => console.log(res))
            .then(tasks => {
                // mockapi returns first 10 tasks that are not completed
            }).catch(error => {
                // handle error
            })
    }, [page])
}