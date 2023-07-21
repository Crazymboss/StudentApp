class SiteController < ApplicationController
    before_action :authenticate_user!
    def index
        @user = current_user
        @users = User.all
       if current_user.nume == "Administrator"
            render 'site/index'
       else
            render 'site/_detalii'
       end
    end

    def show
        @user = User.find(params[:id])
    end

    def student_delete
        @student = User.find(params[:id])
        @student.destroy
        flash[:notice] = "The Student was successfully deleted."
        redirect_to root_path
    end
end