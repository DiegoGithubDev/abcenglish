<<<<<<< HEAD
class StudentCard < ApplicationRecord
=======
class StudentCard < ApplicationRecord::Base
  validates :user_name, presence: true,length: { maximum: 50}
  validates :password, presence: true, length: { maximum: 50}
   belongs_to :student
>>>>>>> f836c0bf449832fa4e0f3b42b769333e770e6a66
end
