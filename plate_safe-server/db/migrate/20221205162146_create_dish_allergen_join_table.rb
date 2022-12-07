class CreateDishAllergenJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_table :a_preps do |t|
    t.integer :dish_id
    t.integer :allergen_id
    t.integer :restaurant_id
    t.boolean :avoidable?
    end
  end
end


#best way to represent these join table instances? This allergen in this dish at this restaurant

#a_prep - repesents how an ingredient is prepared in a dish at a given restaurant 
