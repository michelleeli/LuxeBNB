class CreateListingTags < ActiveRecord::Migration[7.0]
  def change
    create_table :listing_tags do |t|
      t.references :listing
      t.references :tag
      t.timestamps
    end
    add_index :listing_tags, [:listing_id, :tag_id], unique: true
  end
end
