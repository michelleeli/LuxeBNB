class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :address, null: false, unique: true
      t.string :city, null: false
      t.string :state, null: false
      t.integer :num_bedroom, null: false
      t.integer :num_bed, null: false
      t.integer :num_bath, null: false
      t.integer :max_guests, null: false
      t.integer :price, null: false

      t.boolean :self_checkin, null: false, default: false
      t.boolean :wifi, null: false, default: false
      t.boolean :air_condition, null: false, default: false
      t.boolean :pets, null: false, default: false
      t.boolean :tv, null: false, default: false
      t.boolean :parking, null: false, default: false
      t.boolean :washer, null: false, default: false
      t.boolean :kitchen, null: false, default: false

      t.references :host, foreign_key: {to_table: :users}, index: true

      t.timestamps
    end
  end
end
