import FilterMenu from "../FilterMenu.js"
import { ListingIndexItem } from "./ListingIndexItem"

export default function ListingIndex({listings}) {
    return (
        <>
        <FilterMenu/>
        <div className="Listings">
            {listings.map((listing) => <ListingIndexItem key={`${listing.id}`} listing={listing}/>)}
        </div>
        </>
    )
}

