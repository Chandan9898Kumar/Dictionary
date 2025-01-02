import React ,{memo} from 'react';
import {useSelector} from 'react-redux';
import LoadingScreen from './LoadingScreen';
import Content from './Content';
import "./styles.css";

function Container({children}){
    const loading = useSelector(state => state.isLoading);

    return(
        <main className='app'>
            {children}
            {loading ? <LoadingScreen/> : <Content/>}
        </main>
    )
}

export default memo(Container);