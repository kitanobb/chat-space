class MessagesController < ApplicationController
  before_action :set_group
  
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
    @message = @group.messages.new(message_paramas)
    if @message.save
      redirect_to group_messages_path(@group), notice: 'メッセージが送信されました'
    else
      
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
