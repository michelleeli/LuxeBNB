class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render 'api/reviews/index'
    end 

    def create
        @review = Review.new(review_params)
        if @review.save 
            render 'api/reviews/show'
        else 
            render json: {errors: @review.errors.full_messages}, status: 422
        end 
    end

    def update 
        @review = Review.find_by(listing_id: params[:listing_id], user_id: params[:user_id])
        if @review.update(review_params)
            render 'api/reviews/show'
        else
            render json: {errors: @review.errors.full_messages}, status: :unprocessible_entity
        end 
    end 


    def destroy
        @review = Review.find(params[:id])
        if @review 
            @review.destroy
        else 
            render json: {errors: "Review does not exist"}, status: 422;
        end 
    end 

    def review_params
        params.require(:review).permit(:body, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :rating, :user_id, :listing_id)
    end 


end
