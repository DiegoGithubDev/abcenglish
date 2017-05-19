class AddFieldsToStudents < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :facebook, :string
    add_column :students, :skype, :string
  end
end
