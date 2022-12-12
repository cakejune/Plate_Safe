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

nyAddresses = [
  "1586 1st Ave., New York, NY 10028",
  "11 Broadway, New York, NY 10004",
  "218 E 9th St, New York, NY 10003",
  "91 1st Ave., New York, NY 10003",
  "4 W 22nd St, New York, NY 10010",
];

restaurant_banner_images = [
  "https://cdn.discordapp.com/attachments/1004488296493228134/1050880553441841162/CakeJune_web_banner_for_a_vegan_restaurant_fe0cfd2a-98c6-4d03-bc28-b9b7dff2cac2.png",
    "https://cdn.discordapp.com/attachments/1004488296493228134/1050881469834338454/CakeJune_web_banner_for_an_indian_restaurant_c0962450-2614-4642-93a1-9ebc2d3bc901.png",
    "https://cdn.discordapp.com/attachments/1004488296493228134/1050881626827137115/CakeJune_web_banner_for_an_indian_restaurant_0ab66153-ab07-47c5-a249-77018f94cd12.png",
    "https://cdn.discordapp.com/attachments/1004488296493228134/1050881409394417714/CakeJune_web_banner_for_a_coding-themed_restaurant_9929afc9-c0ea-463b-a1ba-89aeac1953cb.png",
    "https://cdn.discordapp.com/attachments/1004488296493228134/1050881378272677949/CakeJune_web_banner_for_a_sci-fi_restaurant_e4afa78e-cb9c-4591-8fda-59fe523ccec3.png",
    "https://cdn.discordapp.com/attachments/1004488296493228134/1050889596134768740/CakeJune_web_banner_for_a_sci-fi_restaurant_53128572-2dc4-4245-9c53-ee5244337246.png"
  ]


puts "🌱 Seeding spices..."

list_of_allergens.each { |a| Allergen.create(name: a) }
x=0
5.times do
  new_restaurant =
    Restaurant.create(
      name: Faker::Restaurant.unique.name,
      location: nyAddresses[x],
      image: restaurant_banner_images[x]
    )
    x+=1
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
