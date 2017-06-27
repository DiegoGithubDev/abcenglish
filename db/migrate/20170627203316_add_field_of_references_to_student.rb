class AddFieldOfReferencesToStudent < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :student_cards_id, :int
  end
end
