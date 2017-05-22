class Student < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :facebook, :length=>{maximum:40}
  validates :skype, :length=>{maximum:40}

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :authentication_keys => [:user_name]

  #mount_uploader :image , ImageUploader
  def initialize(params = {})
    file = params.delete(:image)
    super
    if file
      self.image = file.read
    end
  end

  def get_base64_image
    return self.image != nil ? 'data:image/png;base64,' + Base64.encode64(self.image) : ""
  end
end
