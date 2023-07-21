module ApplicationHelper
    def admin?
        current_user.nume == "Administrator"
    end
end
