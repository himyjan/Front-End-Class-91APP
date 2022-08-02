# Week 1 Part 4

## Assignment

### Step 1: Introduction to TapPay

We use [TapPay](https://www.tappaysdk.com/en/) as primary payment service for our e-commerce website:

1. Load TapPay SDK.
2. Initialize TapPay SDK.
3. Render card-number, expired, and ccv fields by TapPay SDK.

Refer to [TapPay Document for Web](https://docs.tappaysdk.com/tutorial/zh/web/front.html#front).

#### Required Fields for TapPay Integration

|  Field  |                              Value                               |
| :-----: | :--------------------------------------------------------------: |
| App ID  |                              12348                               |
| App Key | app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF |

### Step 2: Prepare Order Data

Before user click `check out button` in the cart page, we should handle all the data properly, which including:

1. Shopping Cart: list items, shipping method, payment method, recipient information, subtotal, freight, and final price.
2. Credit Card: card number, expired, and ccv.

If any data is not ready, user `cannot check out`.  
Take some time to optimize the flow of manipulating this complicated situation.

#### Test Credit Card for TapPay Testing

|    Field     |        Value        |
| :----------: | :-----------------: |
| Card Number  | 4242 4242 4242 4242 |
| Expired Date |        01/23        |
|     CCV      |         123         |

### Step 3: Check Out

After user click `check out button`, we start check out process:

1. Get `prime` from TapPay server.
2. Connect to `Check Out API`.
3. Get check out result from `Check Out API`.
4. If everything is OK, direct user to `thank you page`.

Refer to [Check Out API](https://github.com/AppWorks-School-Materials/API-Doc/tree/master/Stylish#order-check-out-api).

### Step 4: Complete Thank You Page

### Step 5: Show Order Number in Thank You Page

Find a way to take `order number` from check out process to thank you page, and show it for user.
