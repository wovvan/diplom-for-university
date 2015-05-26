json.array!(@smos) do |smo|
  json.extract! smo, :id
  json.url smo_url(smo, format: :json)
end
