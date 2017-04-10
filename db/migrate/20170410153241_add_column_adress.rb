class AddColumnAdress < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :address, :string
  end
end
