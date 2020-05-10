class Group < ApplicationRecord
  has_many :members
  has_many :users, through: :members
  has_many :messages
  
  validates :name, presence: true, uniqueness: true

  def show_last_message
    
  end
  
end
