class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :listing, foreign_key: {to_table: :listings}, null: false
      t.references :user, foreign_key: {to_table: :users}, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :guests, null: false
      t.float :total, null: false
      
      t.timestamps
    end
  end
end
