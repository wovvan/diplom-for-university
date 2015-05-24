json.array!(@games) do |game|
  json.extract! game, :id, :type, :mode, :rate, :kill, :tower, :rune, :not_top_bott_line, :neutral
  json.url game_url(game, format: :json)
end
