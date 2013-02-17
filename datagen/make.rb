puts `ruby dgen.rb > data.json`

puts `echo "window.data = " > data.js`
puts `cat data.json >> data.js`

puts `cp data.json ../sample/data/people.json`
puts `cp data.json ../lessons/data/people.json`
puts `cp data.js ../sample/data/people.js`
puts `cp data.js ../lessons/data/people.js`
