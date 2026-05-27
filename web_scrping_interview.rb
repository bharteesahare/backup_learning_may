# https://screen.coderpad.io/work/dashboard/questionbank
require "httparty" 
require "nokogiri"

response = HTTParty.get("https://screen.coderpad.io/work/dashboard/questionbank", { 
 headers: { 
  "User-Agent" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36" 
 }, 
})

puts response
# QuestionBankTable-row
document = Nokogiri::HTML(response.body)
# Product = Struct.new(:title, :domain, :type, :difficulites)
html_products = document.css(".wrapperRow")
puts document
# puts document