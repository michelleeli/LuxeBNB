import './Filter.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchListings } from "../../store/listings";
import ListingIndex from '../ListingIndex/ListingIndex';
import { useHistory } from 'react-router-dom/';


export default function FilterMenu () {
    const history = useHistory()

    const redirectRender = (category) => {
        history.push(`/categories/${category}`)
    }

    return (
        <div id="filter">
            <div class="category" onClick={() => redirectRender("pool")}>
                <img src="https://i.ibb.co/YypWDcg/pool.png"></img>
                <hr/>
                <div>Pool</div>
            </div>
            <div class="category" onClick={() => redirectRender("mansion")}>
                <img src="https://i.ibb.co/FnhqNtz/mansion.png"></img>
                <hr/>
                <div>Mansion</div>
            </div>
            <div class="category" onClick={() => redirectRender("city")}>
                <img src="https://i.ibb.co/R9RtSr3/island.png"></img>
                <hr/>
                <div>City</div>
            </div>
            <div class="category" onClick={() => redirectRender("nature")}>
                <img src="https://i.ibb.co/R9RtSr3/island.png"></img>
                <hr/>
                <div>Nature</div>
            </div>
            <div class="category" onClick={() => redirectRender("apartment")}>
                <img src="https://i.ibb.co/R9RtSr3/island.png"></img>
                <hr/>
                <div>Apartment</div>
            </div>
            <div class="category" onClick={() => redirectRender("island")}>
                <img src="https://i.ibb.co/R9RtSr3/island.png"></img>
                <hr/>
                <div>Island</div>
            </div>
        </div>
    )
}