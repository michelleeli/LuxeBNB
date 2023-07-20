class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password_digest, length: {in: 6...128} allow_nil: true
    validates :email, length: {minimum: 3}, format: { with: URI::MailTo::EMAIL_REGEXP }

    has_secure_password

    before_validation :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user&.authenticate(password) ? user : nil
    end

    def reset_session_token!
        self.update!(session_token: generate_unique_session_token)
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end


    def generate_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end

end
