class AddNumeToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :nume, :string, default: nil
    add_column :users, :cnp, :integer, default: nil
  end
end
