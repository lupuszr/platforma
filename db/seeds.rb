# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
clothing 	= MainCategory.create( name: "Clothing & Accessories", description: "description", img_url: "clothing.jpg" )
jewelry 	= MainCategory.create( name: "Jewelry", description: "description", img_url: "jewelry.jpg" )
home 			= MainCategory.create( name: "Home", description: "description", img_url: "home.jpg" )
living 		= MainCategory.create( name: "Living", description: "description", img_url: "living.jpg" )
kids 			= MainCategory.create( name: "Kids & Babies", description: "description", img_url: "kids.jpg" )
digital 	= MainCategory.create( name: "Digital", description: "description", img_url: "digital.jpg" )
services 	= MainCategory.create( name: "Services", description: "description", img_url: "services.jpg" )
food 			= MainCategory.create( name: "Food", description: "description", img_url: "food.jpg" )

Category.create([
	{ name: "Accessories", description: "test", main_category_id: clothing.id},
	{ name: "Bags", description: "test", main_category_id: clothing.id},
	{ name: "Cloths", description: "test", main_category_id: clothing.id},
	{ name: "Shoes", description: "test", main_category_id: clothing.id},
	{ name: "Wedding", description: "test", main_category_id: clothing.id}
])

Category.create([
	{ name: "Necklaces", description: "test", main_category_id: jewelry.id},
	{ name: "Earrings", description: "test", main_category_id: jewelry.id},
	{ name: "Rings", description: "test", main_category_id: jewelry.id},
	{ name: "Watches", description: "test", main_category_id: jewelry.id},
	{ name: "Bracelets", description: "test", main_category_id: jewelry.id},
	{ name: "Body jewelry", description: "test", main_category_id: jewelry.id}
])

Category.create([
	{ name: "Interior", description: "test", main_category_id: home.id},
	{ name: "Exterior", description: "test", main_category_id: home.id},
	{ name: "Kitchen", description: "test", main_category_id: home.id},
])

Category.create([
	{ name: "Flowers", description: "test", main_category_id: living.id},
	{ name: "Bath & Beauty", description: "test", main_category_id: living.id},
	{ name: "Candles", description: "test", main_category_id: living.id},
	{ name: "Audio", description: "test", main_category_id: living.id},
	{ name: "Party", description: "test", main_category_id: living.id},
	{ name: "Headphones", description: "test", main_category_id: living.id},
	{ name: "Art", description: "test", main_category_id: living.id},
])

Category.create([
	{ name: "Equipment", description: "test", main_category_id: kids.id},
	{ name: "Cloths", description: "test", main_category_id: kids.id},
	{ name: "Shoes", description: "test", main_category_id: kids.id},
	{ name: "Toy", description: "test", main_category_id: kids.id},
	{ name: "Food", description: "test", main_category_id: kids.id},
	{ name: "Care", description: "test", main_category_id: kids.id}
])

Category.create([
	{ name: "Audio", description: "test", main_category_id: digital.id},
	{ name: "Fonts", description: "test", main_category_id: digital.id},
	{ name: "Games", description: "test", main_category_id: digital.id},
	{ name: "Photos", description: "test", main_category_id: digital.id},
	{ name: "Software", description: "test", main_category_id: digital.id},
	{ name: "e-Book", description: "test", main_category_id: digital.id}
])

Category.create([
	{ name: "Cosmetic-care", description: "test", main_category_id: services.id},
	{ name: "Massage", description: "test", main_category_id: services.id},
	{ name: "Personal training", description: "test", main_category_id: services.id},
	{ name: "Teaching", description: "test", main_category_id: services.id},
	{ name: "Travel", description: "test", main_category_id: services.id},
	{ name: "Craftsman & maid", description: "test", main_category_id: services.id}
])

Category.create([
	{ name: "Sport", description: "test", main_category_id: food.id},
	{ name: "Organic", description: "test", main_category_id: food.id},
	{ name: "Animal", description: "test", main_category_id: food.id},
	{ name: "Sirup/juice", description: "test", main_category_id: food.id},
	{ name: "Honey", description: "test", main_category_id: food.id},
	{ name: "Marmelade", description: "test", main_category_id: food.id},

])

Category.create([
	{ name: "Accessories1", description: "test", main_category_id: clothing.id, category_id: clothing.categories.find_by_name('Accessories').id},
	{ name: "Accessories2", description: "test", main_category_id: clothing.id, category_id: clothing.categories.find_by_name('Accessories').id},
	{ name: "Accessories3", description: "test", main_category_id: clothing.id, category_id: clothing.categories.find_by_name('Accessories').id},
	{ name: "Accessories4", description: "test", main_category_id: clothing.id, category_id: clothing.categories.find_by_name('Accessories').id},	
])