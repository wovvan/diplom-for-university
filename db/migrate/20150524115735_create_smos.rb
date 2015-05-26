class CreateSmos < ActiveRecord::Migration
  def change
    create_table :smos do |t|

      t.timestamps null: false
    end
  end
end
