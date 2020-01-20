FactoryBot.define do

  factory :message do
    body {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/sample.jpeg")}
    user
    group
  end
  
end