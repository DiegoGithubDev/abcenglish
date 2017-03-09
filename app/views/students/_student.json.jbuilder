json.extract! student, :id, :user_name, :password, :current_page, :created_at, :updated_at
json.url student_url(student, format: :json)
