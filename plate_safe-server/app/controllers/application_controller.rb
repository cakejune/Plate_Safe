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


 

  get '/restaurants/:id' do
    rest = Restaurant.find(params[:id])
    rest.to_json
  end

  get '/dishes/:id' do
    dish = Dish.find(params[:id])
    dish.to_json
  end

   delete '/dishes/:id' do
    dish = Dish.find(params[:id])
    dish.delete
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
    #location: address
    restaurant.to_json
  end
end
