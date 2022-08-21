Order Check Out API
```
{
  "prime": [Prime Key from TapPay],
  "order": {
    "shipping": "delivery",
    "payment": "credit_card",
    "subtotal": [Price excluded Freight Fee],
    "freight": [Freight Fee],
    "total": [Final Price],
    "recipient": {
      "name": [Name],
      "phone": [Phone],
      "email": [Email],
      "address": [Post Address],
      "time": "morning"|"afternoon"|"anytime"
    },
    "list": [
      {
        "id": [Product ID],
        "name": [Product Name],
        "price": [Product Unit Price],
        "color": {
          "name": [Product Variant Color Name],
          "code": [Product Variant Color HexCode]
        },
        "size": [Product Variant Size],
        "qty": [Quantity]
      },
      ...
    ]
  }
}
```
Product Details API
```
{
  "data": {
    "id": 1234,
    "category": "men",
    "title": "厚實毛呢格子外套",
    "description": "高抗寒素材選用，保暖也時尚有型",
    "price": 2200,
    "texture": "棉、聚脂纖維",
    "wash": "手洗（水溫40度",
    "place": "韓國",
    "note": "實品顏色以單品照為主",
    "story": "你絕對不能錯過的超值商品",
    "colors": [
      {
        "code":"334455",
        "name":"深藍"
      }
    ],
    "sizes": ["S", "M", "L"],
    "variants":[
      {
        "color_code":"334455",
        "size":"S",
        "stock":5
      },
      {
        "color_code":"334455",
        "size":"M",
        "stock":10
      },
      {
        "color_code":"334455",
        "size":"L",
        "stock":0
      }
    ],
    "main_image":"https://stylish.com/main.jpg",
    "images": [
      "https://stylish.com/0.jpg",
      "https://stylish.com/1.jpg",
      "https://stylish.com/2.jpg"
    ]
  }
}
```