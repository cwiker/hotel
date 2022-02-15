class RoomsController < ApplicationController
    skip_before_action :authenticate_user
    
    def index
        rooms = Room.all
        render json: rooms
    end

    def show
        room = Room.find(params[:id])
        render json: room
    end

end
