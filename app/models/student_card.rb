
class StudentCard < ApplicationRecord
  validates :user_name, :presence =>true, :length=>{maximum:25}
  validates :password, :presence =>true, :length=>{in:6..25}
end
