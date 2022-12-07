# def nyc_address
# "#{Faker::Address.street_address}, #{Faker::Address.city}
# "
# end
list_of_allergens = [
  "Crustacean Shellfish",
  "Egg",
  "Fish",
  "Milk",
  "Peanut",
  "Soy",
  "Tree Nuts",
  "Wheat",
  "Gluten",
  "Sulfites",
  "Sesame",
]

puts "🌱 Seeding spices..."

list_of_allergens.each { |a| Allergen.create(name: a) }

5.times do
  new_restaurant =
    Restaurant.create(
      name: Faker::Restaurant.unique.name,
      location: Faker::Address.unique.full_address,
    )
  5.times do
    has_allergen = [true, false].sample
    is_avoidable = [true, false].sample
    new_dish =
      Dish.create(
        name: Faker::Food.unique.dish,
        restaurant_id: new_restaurant.id,
      )
    if has_allergen
      new_dish.add_allergen_to_dish(
        Allergen.find(rand(Allergen.first.id..Allergen.last.id)),
        is_avoidable,
      )
      #when we add allergen to dish, it takes 2 arguments: an allergen, and whether it's avoidable.
    end
  end
end

puts "😛 Done! 👉👌"

# def add_allergen_to_dish allergen, is_avoidable

#     APrep.create(dish_id: self.id, allergen_id: allergen.id, avoidable?: is_avoidable)

# end

# def reassign_dish
#     puts "Reassigning Dishes..."
# x=1
# while x<=Dish.all.length
# Dish.find(x).update(restaurant_id: rand(6..10))
# x+=1
# end
# puts "Done!"
# end
# reassign_dish()

# def seed_a_preps
# x=1
# while x <= 10
# APrep.create(dish_id: x, )
# end

# end

# Seed your database here

# puts "✅ Done seeding!"
