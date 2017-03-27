class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :name
      t.binary :data
      t.string :filename
      t.string :mime_type

      t.timestamps
    end
  end
end
