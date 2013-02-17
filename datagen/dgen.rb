require 'JSON'

names = [
  "Leonor Laidlaw",
  "Scott Shimizu",
  "Lezlie Lipka",
  "Toshia Traughber",
  "Mavis Mcelroy",
  "Leonard Lacombe",
  "Rima Range",
  "Kym Kress",
  "Anastasia Aylesworth",
  "Daisy Dionne",
  "Jermaine Jefferson",
  "Alyce Aguero",
  "Long Leong",
  "Delta Darosa",
  "Lillia Lawless",
  "Tyler Tiedemann",
  "Xavier Xiong",
  "Wendolyn Wimbley",
  "Booker Bracey",
  "Sandee Sailer"
]

data = names.map do |n|
  d = {
    name: n,
    age: (rand * 100)
  }

  d[:awesomeness] = 1 - 1 * Math.cos(2*Math::PI*(d[:age])/100.0)
  d[:wisdom] = (d[:age]) / 100.0

  d[:awesomeness] /= 2

  d[:awesomeness] += (rand - 0.5) / 8
  d[:wisdom] += (rand - 0.5) / 8

  d[:wisdom] = [d[:wisdom], 1].min
  d[:wisdom] = [d[:wisdom], 0].max

  d[:awesomeness] = [d[:awesomeness], 1].min
  d[:awesomeness] = [d[:awesomeness], 0].max

  d[:wisdom] = d[:wisdom].round(2)
  d[:awesomeness] = d[:awesomeness].round(2)

  d[:age] = d[:age].floor()
  
  d
end

puts JSON.pretty_generate(data)
