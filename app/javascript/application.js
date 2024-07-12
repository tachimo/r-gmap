// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "map.js"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
