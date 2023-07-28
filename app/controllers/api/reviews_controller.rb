class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render 'api/reviews/index'
    end 

    def create
        @review = Review.new(review_params)
        if @review.save 
            render 'api/reviews/index'
        else 
            render json: {errors: @reivew.errors.full_messages}, status: 422
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
