class EstadoToStudentCard < ActiveRecord::Migration[5.0]
  def change
    add_column :student_cards, :state, :string
  end
end
