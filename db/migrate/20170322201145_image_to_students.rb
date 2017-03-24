class ImageToStudents < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :phone, :string
    add_column :students, :image, :binary
  end
end
