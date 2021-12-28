import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { postAction } from '../store';
import { useSelector } from '../hooks/useTypedSelector'
import Loader from '../Components/inc/Loader';
import { Container } from '@bootstrap-styled/v4';
import PostFilter from '../Components/PostFilter';

const App: FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(postAction.getPosts())
    }, [dispatch])

    const { loading, data } = useSelector(state => state.posts)

    return (
        <Container className="py-2 w-auto">
            {loading ? <Loader /> : data &&  
                <PostFilter items={data} />
            }
        </Container>
    )
};

export default App