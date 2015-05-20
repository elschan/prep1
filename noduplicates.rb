def non_duplicated_values(numbers)
  numbers.find_all { |x| numbers.count(x) == 1 }
end