class AddImageAndLocationToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :image, :string
    add_column :restaurants, :latitude, :float
  end
end
