class Api::LikesController < ApplicationController
    def index
        if current_user 
            @likes = Like.where(user_id: current_user.id)
            render '/api/likes/index'
        end 
    end 

    def create 
        @like = Like.new(like_params)
        if @like.save
            render '/api/likes/show'
        else 
            render json: {errors: @like.errors.full_messages }, status: 422
        end 
    end 

    def destroy
        @like = Like.find(params[:id])
        if @like 
            @like.destroy
        else 
            render json: {errors: "Like does not exist"}, status: 422;
        end 
             
    end 

    def like_params
        params.require(:like).permit(:user_id, :listing_id)
    end 
end
