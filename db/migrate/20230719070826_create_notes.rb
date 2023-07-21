class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.integer :an
      t.string :materie
      t.string :profesor
      t.integer :nota
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
