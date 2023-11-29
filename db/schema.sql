DROP DATABASE IF EXISTS coinquest_db;
CREATE DATABASE coinquest_db;


Table users {
  id integer [primary key]
  username varchar
  password len(8)
  funds DECIMAL
}
Table category {
  id integer [primary key]
  name varchar
  products_id integer [ref: > products.id] 
-- //one to many
}
Table products {
  id integer [primary key]
  title varchar
  price DECIMAL
  category_id integer [ref: > category.id] 
--   //many to one
  user_id integer [ref: > users.id] 
  filename varchar 
  }
Table comment {
  id integer [primary key]
  content varchar
  product_id integer [ref: > products.id] // many to many
  user_id integer [ref: > users.id] //one to many
}

