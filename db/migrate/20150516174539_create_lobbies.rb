class CreateLobbies < ActiveRecord::Migration
  def change
    create_table :lobbies do |t|

      t.timestamps
    end
  end
end
