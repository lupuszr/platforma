namespace :shops do
	desc 'Remove uncompleted shops'
	task remove_uncompleted: :environment do
		Shop.where(creation_completed: false).destroy_all
	end
end