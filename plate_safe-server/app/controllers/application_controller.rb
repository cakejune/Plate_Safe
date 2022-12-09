class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/restaurants" do
    Restaurant.all.to_json(
     include: {
      dishes: {
        include: {
          a_preps: {
            include: :allergen
          }
        }
      }
     }
    )
  end

  delete '/dishes/:id' do
    dish = Dish.find(params[:id])
    dish.destroy
    dish.to_json
  end

  post '/restaurants/:id' do
    this_rest = Restaurant.find(params[:id])
    new_dish = Dish.create(
      name: params[:name],
      restaurant_id: this_rest
    )
    allergen = Allergen.find_by(name: params[:allergen])
    new_dish.add_allergen_to_dish(allergen, params[:avoidable])
    new_dish.to_json
  end

  patch '/restaurants/:id' do
    restaurant = Restaurant.find(params[:id])
    restaurant.update(location: params[:location])
    restaurant.to_json
  end
end
