class DeleteRestaurantIdColumnFromAPreps < ActiveRecord::Migration[6.1]
  def change
    remove_column :a_preps, :restaurant_id
  end
end
