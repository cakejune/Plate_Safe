class Restaurant < ActiveRecord::Base
  has_many :dishes
  has_many :allergens, through: :dishes
  has_many :a_preps, through: :dishes

  def add_dish(name)
    Dish.create(name: name, restaurant_id: self.id)
  end

  def danger_dishes
    self.dishes.map do |dish|
      if dish.allergens != []
        puts "Dish: #{dish.name}, Allergen(s): #{dish.allergens.map { |a| a.name }}"
      end
    end
  end

  def self.no(allergen)
    puts "There are no #{allergen.name} in the following restaurants:"
    Restaurant.all.map { |r| r unless r.allergens.include?(allergen) }
  end

end
