import {useState, useCallback} from 'react';

const useBoolean = (initialVal : boolean) =>{
    const [getBoolState, useBoolState] = useState(initialVal)
    const api = {
        toggle: useCallback(() => useBoolState( old => !old),[])
    }
    
}