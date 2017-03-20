class AddColumnsToStudents < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :user_name, :string
    add_column :students, :name, :string
    add_column :students, :last_name, :string
    add_column :students, :current_page, :string
  end
end
