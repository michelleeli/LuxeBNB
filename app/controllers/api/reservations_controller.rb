class Api::ReservationsController < ApplicationController

    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save 
            render 'api/reservations/show'
        else
            render json: {errors: @reservation.errors.full_messages }, status: 422
        end 
    end 

    def index 
        @reservations = Reservation.all
        render 'api/reservations/index'
    end 

    def show 
        @listing = Listing.find(params[:id])
        if @listing 
            render 'api/listings/show'
        else 
            render json: {errors: @listing.errors.full_messages}, status: 422;
        end 
    end 

    def destroy
    end 

    def reservation_params 
        params.require(:reservation).permit(:listing_id, :user_id, :start_date, :end_date, :guests, :total)
    end 
end
