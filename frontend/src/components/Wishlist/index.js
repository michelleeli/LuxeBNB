import './likes.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { deleteLike, fetchLikes } from '../../store/likes'
import { getLike } from '../../store/likes'
import { createLike } from '../../store/likes'

export default function Like({listing}) {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    let like = useSelector(getLike(listing.id, currentUser.id))

    useEffect(()=> {
        dispatch(fetchLikes())
    }, [])

    const likeListing = () => {
        dispatch(createLike({user_id: currentUser.id, listing_id: listing.id}))
    }

    const unlikeListing =() => {
        dispatch(deleteLike(like.id))
    }

    return (
        <>
        {!like && 
            <div onClick={likeListing} id="empty">
                <i class="fa-regular fa-heart fa-2x" style={{color: "#ffffff",}}></i>
            </div>
        }
        {like && <div onClick={unlikeListing} id="heart">
            <i class="fa-solid fa-heart fa-2x" style={{color: "#b34125",}}></i>
            </div>}
        </>
    )
}