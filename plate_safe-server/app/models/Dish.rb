class Dish < ActiveRecord::Base
  has_many :a_preps
  has_many :allergens, through: :a_preps
  belongs_to :restaurant

  def add_allergen_to_dish(allergen, is_avoidable)
    APrep.create(
      dish_id: self.id,
      allergen_id: allergen.id,
      avoidable?: is_avoidable,
    )
  end

#   we cannot do dish.restaurants because dishes 
#   with the same name are unique instances of Dish. 
#   The restaurant they belong to is what makes the dish instances unique.
  
  def self.find_restaurants_by_dish_name(dish_name)
    Dish.where(name: dish_name).map { |d| d.restaurant }
  end

end

#MrChow.dishes_with_allergens.second[0]
#show me all dishes from a restaurant that have allergens
#  => [
#     {
#         "Dish Name: Salad" =>
#         [
#             "Allergen: leaves",
#             "Avoidable?: true"
#         ],
#         [
#             "Allergen: tomatoes",
#             "Avoidable?: true"
#         ]
#     },
#     {
#         "Dish Name: Pork Chop" =>
#         [
#             "Allergen: peanuts",
#             "Avoidable?: false"
#         ],
#         [
#             "Allergen: pork",
#             "Avoidable?: false"
#         ]
#     },

#     ]
