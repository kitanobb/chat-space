class Group < ApplicationRecord
  has_many :members
  has_many :users, through: :members
  has_many :messages
  
  validates :name, presence: true, uniqueness: true

  def show_last_message
    if (last_message = messages.last).present?
      
    else
      'まだメッセージがありません'
    end
  end
  
end
