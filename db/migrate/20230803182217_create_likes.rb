class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :user
      t.references :listing

      t.timestamps
    end
    add_index :likes, [:listing_id, :user_id], unique: true
  end
end
