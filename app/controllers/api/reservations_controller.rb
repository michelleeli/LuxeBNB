class Api::ReservationsController < ApplicationController

    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save 
            render 'api/reservations/show'
        else
            render json: {errors: @reservation.errors.full_messages }, status: 422
        end 
    end 

    # def index 
    #     @reservations = Reservation.where(user_id: current_user.id)
    #     render 'api/reservations/index'
    # end 

    def index 
        @reservations = Reservation.all
        render 'api/reservations/index'
    end 

    def show 
        @reservation = Reservation.find(params[:id])
        if @reservation 
            render 'api/reservations/show'
        else 
            render json: {errors: @reservation.errors.full_messages}, status: 422;
        end 
    end 

    def update 
        @reservation = Reservation.find(params[:id])
        if @reservation.update(reservation_params)
            render 'api/reservations/show'
        else 
            render json: {errors: @reservation.errors.full_messages}, status: 422;
        end 
    end 

    def destroy
        @reservation = Reservation.find(params[:id])
        if @reservation 
            @reservation.destroy
        else 
            render json: {errors: "Reservation was not found"}, status: 422;
        end 
    end 

    def reservation_params 
        params.require(:reservation).permit(:listing_id, :user_id, :start_date, :end_date, :guests, :total)
    end 
end
