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

    get "/" do
    { message: "Good luck with your project!" }.to_json
  end

end
