class CreateStudentCards < ActiveRecord::Migration[5.0]
  def change
    create_table :student_cards do |t|
      t.string :user_name
      t.string :password

      t.timestamps
    end
  end
end
