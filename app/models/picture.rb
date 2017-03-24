class Picture < ApplicationRecord

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

  def get_base64_image_parametro(image)
  return image != nil ? 'data:image/png;base64,' + Base64.encode64(image) : ""
  end
end
