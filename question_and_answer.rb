WHat[Nokogiri] Selector:
# Nokogiri is a powerful Ruby gem for parsing and manipulating HTML and XML documents. It provides CSS selectors and XPath selectors to navigate and extract elements from documents.

# require 'nokogiri'

# html = <<-HTML
#   <html>
#     <body>
#       <div class="container">
#         <p class="info">Hello, World!</p>
#         <p class="info">Another paragraph</p>
#       </div>
#     </body>
#   </html>
# HTML

# doc = Nokogiri::HTML(html)

# # Find the first paragraph with class "info"
# puts doc.at_css('p.info').text  # Output: "Hello, World!"

# # Find all paragraphs with class "info"
# doc.css('p.info').each { |node| puts node.text }
# # Output:
# # Hello, World!
# # Another paragraph

# at_css(selector)	Returns the first matching element.
# css(selector)	Returns all matching elements.

# # Find the first paragraph using XPath
# puts doc.at_xpath('//p[@class="info"]').text  # Output: "Hello, World!"

# # Find all paragraphs using XPath
# doc.xpath('//p[@class="info"]').each { |node| puts node.text }


# Method	Description
# at_xpath(selector)	Returns the first matching element.
# xpath(selector)	Returns all matching elements.

how we open the specific commit using comit id


"What is the difference between Hash.new(0) and {} in Ruby?"
Hash.new(0):
Creates a hash with a default value of 0.
When you try to access a key that doesn't exist, it returns 0 instead of nil.

{}:
Creates a regular empty hash.
The default value for any non-existent key is nil.