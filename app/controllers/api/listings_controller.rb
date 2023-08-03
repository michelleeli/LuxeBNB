class Api::ListingsController < ApplicationController
    def index
        @listings = Listing.all
        render 'api/listings/index'
    end 

    def show
        @listing = Listing.find(params[:id])
        if @listing 
            render 'api/listings/show'
        else 
            render json: {errors: @listing.errors.full_messages}, status: 422;
        end 
    end 
    

    def create
        @listing = Listing.new(listing_params)
    end

    def search 
        query = params[:query]
        @listings = Listing
            .where('country ILIKE ? OR city ILIKE ? OR state ILIKE ?', "%#{query}%", "%#{query}%", "%#{query}%")
        render :search
    end 

    def listing_params
        params.require(:listing).permit(:title, :description, :address, :city, :state, :num_bedroom, :num_bath, :num_bed, :max_guests, :price)
    end 

end

