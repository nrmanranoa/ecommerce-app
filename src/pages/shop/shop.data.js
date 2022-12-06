const SHOP_DATA = [
    {
      id: 1,
      title: 'Spring Fragrances',
      routeName: 'spring',
      items: [
        {
          id: 1,
          name: 'Calvin Klein CK Eternity EDP Edition',
          imageUrl: 'https://cdn-gnmmh.nitrocdn.com/pmzqVBTriNKohpnAXSDhsWCZzNHMqtYq/assets/static/optimized/rev-c171452/wp-content/uploads/2019/11/CALVIN-KLEIN-CK-ETERNITY-EDP-FOR-MEN.jpg',
          price: 60
        },
        {
          id: 2,
          name: 'Boss Bottled Intense Eau de Parfum Hugo Boss',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.40468.jpg',
          price: 92
        },
        {
          id: 3,
          name: 'Y Eau de Parfum Yves Saint Laurent',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.50757.jpg',
          price: 102
        },
        {
          id: 4,
          name: 'Prada L\'Homme Prada',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.39029.jpg',
          price: 75
        },
        {
          id: 5,
          name: 'L\'Homme Lacoste Intense Lacoste Fragrances',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.50828.jpg',
          price: 53
        },
        {
          id: 6,
          name: 'Legend Spirit Montblanc',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.33443.jpg',
          price: 36
        },
        {
          id: 7,
          name: 'Emporio Armani Stronger With You Freeze Giorgio Armani',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.58808.jpg',
          price: 90
        },
        {
          id: 8,
          name: 'Artisan Pure John Varvatos',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.46623.jpg',
          price: 49
        },
        {
          id: 9,
          name: 'Reflection Man Amouage',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.920.jpg',
          price: 380
        }
      ]
    },
    {
      id: 2,
      title: 'Summer Fragrances',
      routeName: 'summer',
      items: [
        {
          id: 10,
          name: 'Nautica Voyage Nautica',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.913.jpg',
          price: 20
        },
        {
          id: 11,
          name: 'Sedley Parfums de Marly',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.56273.jpg',
          price: 150
        },
        {
          id: 12,
          name: 'Sauvage Elixir Dior',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.68415.jpg',
          price: 120
        },
        {
          id: 13,
          name: 'Acqua di Gio Profumo Giorgio Armani',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.29727.jpg',
          price: 120
        },
        {
          id: 14,
          name: 'Allure Homme Sport Chanel',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.607.jpg',
          price: 47
        },
        {
          id: 15,
          name: 'Light Blue Eau Intense Pour Homme Dolce&Gabbana',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.44035.jpg',
          price: 160
        },
        {
          id: 16,
          name: 'Cool Water Davidoff',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.507.jpg',
          price: 21
        },
        {
          id: 17,
          name: 'Green Irish Tweed Creed',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.474.jpg',
          price: 120
        }
      ]
    },
    {
      id: 3,
      title: 'Fall Fragrances',
      routeName: 'fall',
      items: [
        {
          id: 18,
          name: 'Emporio Armani Stronger With You Absolutely Giorgio Armani',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.64501.jpg',
          price: 150
        },
        {
          id: 19,
          name: 'Wanted by Night Azzaro',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.49144.jpg',
          price: 70
        },
        {
          id: 20,
          name: 'Layton Parfums de Marly',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.39314.jpg',
          price: 129
        },
        {
          id: 21,
          name: 'Herod Parfums de Marly',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.16939.jpg',
          price: 165
        },
        {
          id: 22,
          name: 'The One for Men Eau de Parfum Dolce&Gabbana',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Winter Fragrances',
      routeName: 'winter',
      items: [
        {
          id: 23,
          name: 'Armani Code Profumo Giorgio Armani',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.34761.jpg',
          price: 75
        },
        {
          id: 24,
          name: 'Spicebomb Extreme Viktor&Rolf',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.30499.jpg',
          price: 80
        },
        {
          id: 25,
          name: 'Ultra Male Jean Paul Gaultier',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.30947.jpg',
          price: 65
        },
        {
          id: 26,
          name: 'Noir Extreme Tom Ford',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.29675.jpg',
          price: 160
        },
        {
          id: 27,
          name: 'Eros Eau de Parfum Versace',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.62762.jpg',
          price: 80
        },
        {
          id: 28,
          name: 'Tobacco Vanille Tom Ford',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.1825.jpg',
          price: 300
        },
        {
          id: 29,
          name: 'Oud Wood Tom Ford',
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.1826.jpg',
          price: 190
        }
      ]
    }
  ];
  
  export default SHOP_DATA;
  