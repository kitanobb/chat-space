class UsersController < ApplicationController

  def edit
  end

  def update
    if current_user.update
      
    else
      
    end
  end

end
