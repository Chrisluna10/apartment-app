class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :category
      t.integer :price
      t.text :description
      t.integer :user_id

      t.timestamps
    end
  end
end
