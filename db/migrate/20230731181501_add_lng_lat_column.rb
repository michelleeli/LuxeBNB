class AddLngLatColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :lng, :float
    add_column :listings, :lat, :float
  end
end
