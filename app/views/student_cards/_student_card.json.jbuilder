json.extract! student_card, :id, :user_name, :password, :created_at, :updated_at
json.url student_card_url(student_card, format: :json)
