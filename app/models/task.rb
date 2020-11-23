class Task < ApplicationRecord
  belongs_to :tasklist
  validates :title, presence: true
  validates :description, presence: true

  scope :actual, -> { where created_at: Date.today - 1.month }
end
