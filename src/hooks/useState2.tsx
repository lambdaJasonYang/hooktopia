import {useState} from 'react';

const useState2 = (initialState : any) => {
    const [setState2, useState2] = useState(initialState);
    return [setState2, useState2]
}

export default useState2;

//most trivial example of a custom hook