# Week 1 Part 5

## Assignment

### Step 1: Facebook Login

Let's add member system to our website by `Facebook Login`.

Follow steps below to complete Facebook Login:

1. Before everything, we should distribute our website to `Github Page`.
2. Go to [Facebook Developer Website](https://developers.facebook.com/). Create a Facebook App.
3. In the basic settings, fill `App Domain` and `Website URL`. Get `APP ID` from your Facebook App.
4. Refer to [Facebook Login Documentation](https://developers.facebook.com/docs/facebook-login/web) for `Facebook Login Procedure`.
5. When user click on member icon in the page, direct to the profile page: start `Facebook Login Procedure` if user is `not signed in`; or show user profile if user is `signed in`.

Hint: in the `Facebook Login procedure`, take special attention on the `permissions` we request from user.

### Step 2: Integrate Member System into Website

Yes, we have implemented Facebook Login in our pages. But there are more stories along with member system.

Complete following requests:

1. Login to Facebook and get `access_token`.
2. Send `access_token` to [Sign In API](https://github.com/AppWorks-School-Materials/API-Doc/tree/master/Stylish#user-sign-in-api) to complete sign in.
3. Get `user picture`, `name`, and `email` by [Sign In API](https://github.com/AppWorks-School-Materials/API-Doc/tree/master/Stylish#user-sign-in-api) **instead** and show them in the profile page.
