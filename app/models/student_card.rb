class StudentCard < ApplicationRecord::Base
  validates :user_name, presence: true,length: { maximum: 50}
  validates :password, presence: true, length: { maximum: 50}
   belongs_to :student
end
