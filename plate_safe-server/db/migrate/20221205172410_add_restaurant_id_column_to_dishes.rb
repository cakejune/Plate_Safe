class AddRestaurantIdColumnToDishes < ActiveRecord::Migration[6.1]
  def change
    add_column :dishes, :restaurant_id, :integer
  end
end
