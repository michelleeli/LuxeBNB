import FilterMenu from "../FilterMenu/index.js"
import { ListingIndexItem } from "./ListingIndexItem"

export default function ListingIndex({listings}) {
    return (
        <>
        <div className="Listings">
            {listings.map((listing) => <ListingIndexItem key={`${listing.id}`} listing={listing}/>)}
        </div>
        </>
    )
}

