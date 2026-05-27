Sure! Here's a **beginner-friendly guide** to **Arrays in Ruby**, with a focus on **DSA (Data Structures & Algorithms)**.

---

## 🧠 What is an Array in Ruby?

An **Array** in Ruby is an **ordered, index-based collection** of elements. It can hold **anything**: numbers, strings, booleans, other arrays—even mixed types.

```ruby
arr = [1, 2, 3, "hello", true]
```

Ruby arrays are **dynamic**—you don’t need to declare size upfront.

---

## 🔹 Basic Array Operations (DSA-Focused)

### ✅ 1. **Create Arrays**

```ruby
arr = []               # Empty array
arr = [1, 2, 3]        # With elements
arr = Array.new(5, 0)  # [0, 0, 0, 0, 0]
```

---

### ✅ 2. **Access Elements**

```ruby
arr = [10, 20, 30]
arr[0]   # => 10
arr[-1]  # => 30 (last element)
```

---

### ✅ 3. **Modify Elements**

```ruby
arr[1] = 99
# arr becomes [10, 99, 30]
```

---

### ✅ 4. **Add Elements**

```ruby
arr.push(40)         # Adds to end
arr << 50            # Shorthand for push
arr.unshift(0)       # Adds to start
```

---

### ✅ 5. **Remove Elements**

```ruby
arr.pop      # Removes last
arr.shift    # Removes first
arr.delete_at(1)  # Deletes by index
```

---

### ✅ 6. **Loop Through Array**

```ruby
arr = [1, 2, 3]
arr.each do |val|
  puts val
end
```

---

### ✅ 7. **Length & Check**

```ruby
arr.length
arr.empty?    # true/false
arr.include?(3)  # true/false
```

---

## 🔧 DSA Concepts Using Ruby Arrays

### 🔁 1. Reverse

```ruby
arr = [1, 2, 3]
arr.reverse  # => [3, 2, 1]
```

---

### 🔁 2. Sorting

```ruby
arr.sort
arr.sort.reverse
```

---

### 🔁 3. Find Max / Min

```ruby
arr.max
arr.min
```

---

### 🔁 4. Remove Duplicates

```ruby
arr.uniq
```

---

### 🔁 5. Slicing

```ruby
arr = [1, 2, 3, 4, 5]
arr[1..3]  # => [2, 3, 4]
```

---

## 🧪 Practice Examples

### 📝 1. Sum of Array

```ruby
arr = [1, 2, 3]
sum = arr.sum  # OR arr.reduce(:+)
```

---

### 📝 2. Count Even Numbers

```ruby
arr.count { |n| n.even? }
```

---

### 📝 3. Check if Palindrome

```ruby
arr == arr.reverse
```

---

### 📝 4. Two Pointers: Check if Pair Sum Exists

```ruby
def has_pair_with_sum?(arr, target)
  seen = {}
  arr.each do |num|
    return true if seen[target - num]
    seen[num] = true
  end
  false
end
```

---

## 🔚 Summary (Cheat Sheet Style)

| Task        | Ruby Code Example |   |         |
| ----------- | ----------------- | - | ------- |
| Add Element | `arr << val`      |   |         |
| Remove Last | `arr.pop`         |   |         |
| Length      | `arr.length`      |   |         |
| Loop        | \`arr.each {      | x | ... }\` |
| Sort        | `arr.sort`        |   |         |
| Reverse     | `arr.reverse`     |   |         |
| Unique      | `arr.uniq`        |   |         |
| Slice       | `arr[1..3]`       |   |         |

---

Would you like me to continue this series with **Hash**, **Stack/Queue**, or **linked list-style logic in Ruby**?
