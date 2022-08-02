# Week 0 Part 3

## Assignment

### Step 1: Connect to RESTful API for Data of All Products

We have just completed home page layout. Now, let's get product list from server dynamically.

Connect to [Product List API](https://github.com/AppWorks-School-Materials/API-Doc/blob/master/Stylish/README.md#product-list-api) by AJAX for data of all products, right after HTML DOM ready.

### Step 2: Create Layout for All Products

Data is ready!

Now, we should create product list by JavaScript dynamically.  
At first, it's empty in our container of product list, let's create HTML elements based on received data.

### Step 3: Complete Paging Feature

We notice there is a `paging` feature supported by `Product List API`.  
We can get `paging` data from `Product List API` and set it as parameter of request for next page.

#### Infinite Scroll

If user almost scroll down to the bottom, we should load and show next page automatically. While loading, show a loader at the bottom.
