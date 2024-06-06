Geocoder.configure(
  api_key: Rails.application.credentials.dig(:geocoder, :api_key)
)
