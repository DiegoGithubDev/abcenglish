class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
      t.string :user_name
      t.string :password
      t.string :current_page

      t.timestamps
    end
  end
end
