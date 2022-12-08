class AddImageColumnToDishes < ActiveRecord::Migration[6.1]
  def change
    add_column :dishes, :image, :string
  end
end
