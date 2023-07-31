class AddReviewIndex < ActiveRecord::Migration[7.0]
  def change
    add_index :reviews, [:user_id, :listing_id], unique: true
  end
end
