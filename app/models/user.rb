class User < ApplicationRecord
  validates :email,
            :session_token,
            :profile_url,
            presence: true, uniqueness: true

  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :age, numericality: { only_integer: true, greater_than: 13 }

  after_initialize :ensure_session_token, :ensure_profile_url

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.isPassword?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token = SecureRandom::urlsafe_base64
  end

  def ensure_profile_url
    self.profile_url ||= "user-#{SecureRandom::urlsafe_base64(10)}"
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def isPassword?(password)
    BCrypt::Password.new(self.password_digest) == password
  end
end
