'use  client'

import { RootState } from '@/app/GlobalRedux/store';
import { useSelector } from 'react-redux';

export default function levelState () {
    const {level} = useSelector((state : RootState) => state.levelReducer)
    return level
}