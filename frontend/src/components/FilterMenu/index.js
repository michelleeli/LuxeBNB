import './Filter.css'
import { useHistory } from 'react-router-dom/';


export default function FilterMenu () {
    const history = useHistory()

    const redirectRender = (category) => {
        history.push(`/categories/${category}`)
    }

    return (
        <div id="filter">
            <div class="category" onClick={() => redirectRender("pool")}>
                <img src={require("../../../src/assets/pool.png")}></img>
                <hr/>
                <div>Pool</div>
            </div>
            <div class="category" onClick={() => redirectRender("mansion")}>
                <img src={require("../../../src/assets/mansion.png")}></img>
                <hr/>
                <div>Mansion</div>
            </div>
            <div class="category" onClick={() => redirectRender("city")}>
                <img src={require("../../../src/assets/city.png")}></img>
                <hr/>
                <div>City</div>
            </div>
            <div class="category" onClick={() => redirectRender("nature")}>
                <img src={require("../../../src/assets/nature.png")}></img>
                <hr/>
                <div>Nature</div>
            </div>
            <div class="category" onClick={() => redirectRender("apartment")}>
                <img src={require("../../../src/assets/apartment.png")}></img>
                <hr/>
                <div>Apartment</div>
            </div>
            <div class="category" onClick={() => redirectRender("island")}>
                <img src={require("../../../src/assets/island.png")}></img>
                <hr/>
                <div>Island</div>
            </div>
        </div>

    )
}