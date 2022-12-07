# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_05_172628) do

  create_table "a_preps", force: :cascade do |t|
    t.integer "dish_id"
    t.integer "allergen_id"
    t.boolean "avoidable?"
  end

  create_table "allergens", force: :cascade do |t|
    t.string "name"
  end

  create_table "dishes", force: :cascade do |t|
    t.string "name"
    t.integer "restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "location"
  end

end
