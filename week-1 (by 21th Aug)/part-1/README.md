# Week 1 Part 1

## Assignment

### Step 1: Handle Product Variants

Every product has variants. It means every product has different colors and sizes.  
We should build an UI for user to choose their favorite color and size in the product page.

### Step 2: Handle Stock of Product Variants

Every variant has its' own `stock record` which we have taken from `Product Details API`.
We should handle stock record carefully:

1. Stock record makes the limit of quantity user can buy at one time.
2. If a variant is out of stock, user cannot choose that faded one.

### Step 3: Shopping Cart Implementation

In the product page, we should handle `add to cart` action when user click on button. Before this, let's implement an universal structure and logic for shopping cart first.

Follow steps below to implement a shopping cart in the front-end:

1. Every page should get current shopping cart data from `localStorage` at start.
2. If there is no data in the `localStorage`, initialize it to an empty structure.
3. Show the number of items in cart icon.

### Step 4: Add to Cart Implementation

Now, when user click on `add to cart` button, add an item to our shopping cart structure. Never forget that we should always save latest shopping cart data back to `localStorage` for future use.

#### Special Reminder

Not now, but at the final, we will send our shopping cart data to [Check Out API](https://github.com/AppWorks-School-Materials/API-Doc/tree/master/Stylish#order-check-out-api) for checking out. So, it's important to give a look at [Check Out API](https://github.com/AppWorks-School-Materials/API-Doc/tree/master/Stylish#order-check-out-api) first.