class Allergen < ActiveRecord::Base
    has_many :a_preps
    has_many :dishes, through: :a_preps
end