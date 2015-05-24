class CreateSandboxes < ActiveRecord::Migration
  def change
    create_table :sandboxes do |t|
      t.string :type
      t.string :mode
      t.string :rate
      t.string :kill
      t.string :tower
      t.boolean :rune
      t.boolean :not_top_bott_line
      t.boolean :neutral
      t.timestamps
    end
  end
end
