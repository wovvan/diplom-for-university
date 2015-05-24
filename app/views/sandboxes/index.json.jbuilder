json.array!(@sandboxes) do |sandbox|
  json.extract! sandbox, :id
  json.url sandbox_url(sandbox, format: :json)
end
