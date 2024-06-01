class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.text :text
      t.text :address
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
