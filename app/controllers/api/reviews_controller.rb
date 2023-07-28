class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render 'api/reviews/index'
    end 

    def create
        @review = Review.new(review)
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
        params.require(:review).permit(:body, :cleanlilness, :communication, :check_in, :accuracy, :location, :value, :rating)
    end 


end
