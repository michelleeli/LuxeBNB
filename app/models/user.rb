# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password_digest, length: {in: 6...128}, allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

    has_many :listings,
        primary_key: :id, 
        foreign_key: :host_id,
        class_name: :Listing,
        dependent: :destroy
    
    has_many :reservations,
        dependent: :destroy

    has_many :reviews,
        dependent: :destroy

    has_secure_password

    before_validation :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user&.authenticate(password) ? user : nil
    end

    def reset_session_token!
        self.update!(session_token: generate_session_token)
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
