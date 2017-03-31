class Chato < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :password, :string
  end
end
