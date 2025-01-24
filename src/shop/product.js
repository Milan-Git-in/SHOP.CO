import { create } from "zustand";
// The Commented Stuffs are Connection to Full Stack app which are corrently removed to make the App Deployment Free
// Sorry For Inconvinience but the Code can still be Reviewed if Want :D
export const useProducts = create((set) => ({
  products: [],

  // createProduct: async (product) => {
  //   const res = await fetch("http://localhost:8000/api/products", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(product),
  //   });
  //   const data = await res.json();
  //   return data;
  // },

  setProducts: (products) => set({ products }),
  fetchProducts: async () => {
    // const res = await fetch("http://localhost:8000/api/products");
    // const data = await res.json();

    // Just fold the Data its Too long to work with [300 lines on estimate]
    const data = [
      {
        About: "About Section",
        created_at: "2025-01-20T15:32:43.301000Z",
        id: "678e6c9b66ae49496403d402",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        imgfour:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        imgthree:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        imgtwo:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        name: "T-Shirt",
        owner_id: "678686550e8974bdf60dfe64",
        price: "299",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-20T15:32:43.301000Z",
      },

      {
        id: "678e6dd466ae49496403d403",
        name: "Hoodie",
        image_url:
          "https://img.freepik.com/premium-photo/man-clad-black-gown-hood-sporting-unique-street-style-fusion-gothic-hiphop-influences_117038-33130.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "50",
        About: "Hoodie",
        imgtwo:
          "https://img.freepik.com/premium-photo/man-clad-black-gown-hood-sporting-unique-street-style-fusion-gothic-hiphop-influences_117038-33130.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/man-clad-black-gown-hood-sporting-unique-street-style-fusion-gothic-hiphop-influences_117038-33130.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/man-clad-black-gown-hood-sporting-unique-street-style-fusion-gothic-hiphop-influences_117038-33130.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "HOODIE",
        updated_at: "2025-01-20T15:37:56.913Z",

        created_at: "2025-01-20T15:37:56.913Z",
      },
      {
        id: "678e6e7a66ae49496403d404",
        name: "T-Shirt",
        image_url:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        price: "66",
        About: "Some T Shirt",
        imgtwo:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        imgthree:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        imgfour:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-20T15:40:42.758Z",
        created_at: "2025-01-20T15:40:42.758Z",
      },
      {
        id: "678e6ebc66ae49496403d405",
        name: "Shirt",
        image_url:
          "https://s.alicdn.com/@sc04/kf/H702a23cb470e4094a1860a0ab194168dy.jpg_720x720q50.jpg",
        price: "77",
        About: "Shirt",
        imgtwo:
          "https://s.alicdn.com/@sc04/kf/H702a23cb470e4094a1860a0ab194168dy.jpg_720x720q50.jpg",
        imgthree:
          "https://s.alicdn.com/@sc04/kf/H702a23cb470e4094a1860a0ab194168dy.jpg_720x720q50.jpg",
        imgfour:
          "https://s.alicdn.com/@sc04/kf/H702a23cb470e4094a1860a0ab194168dy.jpg_720x720q50.jpg",
        owner_id: "678686550e8974bdf60dfe64",
        style: "FORMAL",
        type: "SHIRT",
        updated_at: "2025-01-20T15:41:48.013Z",

        created_at: "2025-01-20T15:41:48.013Z",
      },
      {
        id: "678e6f3c66ae49496403d406",
        name: "Pajamas",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxBzp3QWCeKVUIyoBlJefRfqyOPRFWYhd7w&s",
        price: "66",
        About: "The most Stylish Pajamas for Parties",
        imgtwo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxBzp3QWCeKVUIyoBlJefRfqyOPRFWYhd7w&s",
        imgthree:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxBzp3QWCeKVUIyoBlJefRfqyOPRFWYhd7w&s",
        imgfour:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxBzp3QWCeKVUIyoBlJefRfqyOPRFWYhd7w&s",
        owner_id: "678686550e8974bdf60dfe64",
        style: "PARTY",
        type: "PAJAMAS",
        updated_at: "2025-01-20T15:43:56.997Z",
        created_at: "2025-01-20T15:43:56.997Z",
      },
      {
        id: "678e6f8766ae49496403d407",
        name: "Trousers",
        image_url:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "130",
        About: "Trousers by Redbull",
        imgtwo:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "FORMAL",
        type: "TROUSERS",
        updated_at: "2025-01-20T15:45:11.510Z",
        created_at: "2025-01-20T15:45:11.510Z",
      },
      {
        id: "678e6f8866ae49496403d408",
        name: "Trousers",
        image_url:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "130",
        About: "Trousers by Redbull",
        imgtwo:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "FORMAL",
        type: "TROUSERS",
        updated_at: "2025-01-20T15:45:12.319Z",
        created_at: "2025-01-20T15:45:12.319Z",
      },
      {
        id: "678e6f8866ae49496403d409",
        name: "Trousers",
        image_url:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "130",
        About: "Trousers by Redbull",
        imgtwo:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "FORMAL",
        type: "TROUSERS",
        updated_at: "2025-01-20T15:45:12.927Z",
        created_at: "2025-01-20T15:45:12.927Z",
      },
      {
        id: "678e6fcf66ae49496403d40a",
        name: "Black Jeans",
        image_url:
          "https://img.freepik.com/premium-photo/sleek-black-leather-pants-show-bold-edgy-modern-style-confident-fashion-statement_1224519-1896.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "99",
        About: "Black Jeans by LV",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "PARTY",
        type: "JEANS",
        updated_at: "2025-01-20T15:46:23.117Z",
        created_at: "2025-01-20T15:46:23.117Z",
      },
      {
        id: "678e702d66ae49496403d40b",
        name: "Blue Hoodie",
        image_url:
          "https://img.freepik.com/free-photo/silhouette-hooded-thief-walking-black-generated-by-ai_188544-43401.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "99",
        About: "Hoodie by Intel",
        imgtwo:
          "https://img.freepik.com/free-photo/silhouette-hooded-thief-walking-black-generated-by-ai_188544-43401.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/free-photo/silhouette-hooded-thief-walking-black-generated-by-ai_188544-43401.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/free-photo/silhouette-hooded-thief-walking-black-generated-by-ai_188544-43401.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "PARTY",
        type: "HOODIE",
        updated_at: "2025-01-20T15:47:57.280Z",
        created_at: "2025-01-20T15:47:57.280Z",
      },
      {
        id: "678e705c66ae49496403d40c",
        name: "Full Sized Hoodie",
        image_url:
          "https://img.freepik.com/premium-photo/hyper-realistic-navy-jogger-hooded-dress-ethereal-composition_899449-229708.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "130",
        About: "Only for Witches",
        imgtwo:
          "https://img.freepik.com/premium-photo/hyper-realistic-navy-jogger-hooded-dress-ethereal-composition_899449-229708.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/hyper-realistic-navy-jogger-hooded-dress-ethereal-composition_899449-229708.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/hyper-realistic-navy-jogger-hooded-dress-ethereal-composition_899449-229708.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "HOODIE",
        updated_at: "2025-01-20T15:48:44.576Z",

        created_at: "2025-01-20T15:48:44.576Z",
      },
      {
        id: "678e70ea66ae49496403d40d",
        name: "Yellow Hoodie",
        image_url:
          "https://img.freepik.com/premium-psd/hoodie-sweatshirt-mockup_699119-5372.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "120",
        About: "Hoodie by Prime Hydration",
        imgtwo:
          "https://img.freepik.com/premium-psd/hoodie-sweatshirt-mockup_699119-5372.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-psd/hoodie-sweatshirt-mockup_699119-5372.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-psd/hoodie-sweatshirt-mockup_699119-5372.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "HOODIE",
        updated_at: "2025-01-20T15:51:06.229Z",
        created_at: "2025-01-20T15:51:06.229Z",
      },
      {
        id: "678e713866ae49496403d40e",
        name: "Black & Yellow Hoodie",
        image_url:
          "https://img.freepik.com/premium-photo/yellow-raincoat-with-black-stripe-front_1186216-66938.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "150",
        About:
          "Black & Yellow Hoodie which will Shine you more than you ever did",
        imgtwo:
          "https://img.freepik.com/premium-photo/yellow-raincoat-with-black-stripe-front_1186216-66938.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/yellow-raincoat-with-black-stripe-front_1186216-66938.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/yellow-raincoat-with-black-stripe-front_1186216-66938.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "PARTY",
        type: "HOODIE",
        updated_at: "2025-01-20T15:52:24.383Z",
        created_at: "2025-01-20T15:52:24.383Z",
      },
      {
        id: "678e71a366ae49496403d40f",
        name: "Red Hoodie",
        image_url:
          "https://img.freepik.com/free-photo/hooded-silhouette-exercising-dark-mystery-background-generated-by-ai_188544-43310.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "140",
        About: "A RED HOODIE",
        imgtwo:
          "https://img.freepik.com/premium-photo/christmas-red-hoodie-mockup_776894-67644.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/christmas-red-hoodie-mockup_776894-67511.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/asian-man-playful-pose-solid-background_731930-78743.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "HOODIE",
        updated_at: "2025-01-20T15:54:11.150Z",
        created_at: "2025-01-20T15:54:11.150Z",
      },
      {
        id: "678f87d9cf6f8372d00e9992",
        name: "T-Shirt",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "299",
        About: "About Section",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:41:13.531Z",
        created_at: "2025-01-21T11:41:13.531Z",
      },
      {
        id: "678f87f0cf6f8372d00e9993",
        name: "T-SHIRT",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "299",
        About: "About",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:41:36.708Z",
        created_at: "2025-01-21T11:41:36.708Z",
      },
      {
        id: "678f87fdcf6f8372d00e9994",
        name: "T-Shirt",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "299",
        About: "About 2",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:41:49.648Z",
        created_at: "2025-01-21T11:41:49.648Z",
      },
      {
        id: "678f8815cf6f8372d00e9995",
        name: "T-SHIRT",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "277",
        About: "About x 3",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:42:13.919Z",
        created_at: "2025-01-21T11:42:13.919Z",
      },
      {
        id: "678f8825cf6f8372d00e9996",
        name: "T-Shirt",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "277",
        About: "About",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:42:29.862Z",
        created_at: "2025-01-21T11:42:29.862Z",
      },
      {
        id: "678f8836cf6f8372d00e9997",
        name: "T-Shirt",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "277",
        About: "About x 4",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:42:46.069Z",
        created_at: "2025-01-21T11:42:46.069Z",
      },
      {
        id: "678f8c28cf6f8372d00e9998",
        name: "Trousers",
        image_url:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "3360",
        About: "ABOUTT",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "TROUSERS",
        updated_at: "2025-01-21T11:59:36.501Z",
        created_at: "2025-01-21T11:59:36.501Z",
      },
      {
        id: "678fc173ce2864d7e60e0a72",
        name: "T-SHIRTS",
        image_url:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        price: "30",
        About: "T-SHIRTS",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T15:46:59.854Z",
        created_at: "2025-01-21T15:46:59.854Z",
      },
      {
        id: "678fc183ce2864d7e60e0a73",
        name: "T-Shirt",
        image_url:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        price: "34",
        About: "Tshirt",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T15:47:15.840Z",
        created_at: "2025-01-21T15:47:15.840Z",
      },
    ];
    set({ products: data });
  },
  fetchProduct: async (id) => {
    console.log(JSON.stringify(id));
    const res = await fetch("http://localhost:8000/api/productsbyAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const data = await res.json();
    console.log(data?.errors?.id);
    set({ products: data });
  },
  deleteProduct: async (id) => {
    const res = await fetch("http://localhost:8000/api/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const data = await res.json();
    return data;
  },
  UpdateProduct: async (id, product) => {
    console.log("id", id);
    console.log("Product", product);
    const res = await fetch("http://localhost:8000/api/products", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        ...product,
      }),
    });
    const data = await res.json();

    return data;
  },
  fetchAllProducts: async () => {
    // const res = await fetch("http://localhost:8000/api/products");
    // const data = await res.json();
    const data = [
      {
        About: "About Section",
        created_at: "2025-01-20T15:32:43.301000Z",
        id: "678e6c9b66ae49496403d402",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        imgfour:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        imgthree:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        imgtwo:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        name: "T-Shirt",
        owner_id: "678686550e8974bdf60dfe64",
        price: "299",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-20T15:32:43.301000Z",
      },

      {
        id: "678e6dd466ae49496403d403",
        name: "Hoodie",
        image_url:
          "https://img.freepik.com/premium-photo/man-clad-black-gown-hood-sporting-unique-street-style-fusion-gothic-hiphop-influences_117038-33130.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "50",
        About: "Hoodie",
        imgtwo:
          "https://img.freepik.com/premium-photo/man-clad-black-gown-hood-sporting-unique-street-style-fusion-gothic-hiphop-influences_117038-33130.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/man-clad-black-gown-hood-sporting-unique-street-style-fusion-gothic-hiphop-influences_117038-33130.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/man-clad-black-gown-hood-sporting-unique-street-style-fusion-gothic-hiphop-influences_117038-33130.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "HOODIE",
        updated_at: "2025-01-20T15:37:56.913Z",

        created_at: "2025-01-20T15:37:56.913Z",
      },
      {
        id: "678e6e7a66ae49496403d404",
        name: "T-Shirt",
        image_url:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        price: "66",
        About: "Some T Shirt",
        imgtwo:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        imgthree:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        imgfour:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-20T15:40:42.758Z",
        created_at: "2025-01-20T15:40:42.758Z",
      },
      {
        id: "678e6ebc66ae49496403d405",
        name: "Shirt",
        image_url:
          "https://s.alicdn.com/@sc04/kf/H702a23cb470e4094a1860a0ab194168dy.jpg_720x720q50.jpg",
        price: "77",
        About: "Shirt",
        imgtwo:
          "https://s.alicdn.com/@sc04/kf/H702a23cb470e4094a1860a0ab194168dy.jpg_720x720q50.jpg",
        imgthree:
          "https://s.alicdn.com/@sc04/kf/H702a23cb470e4094a1860a0ab194168dy.jpg_720x720q50.jpg",
        imgfour:
          "https://s.alicdn.com/@sc04/kf/H702a23cb470e4094a1860a0ab194168dy.jpg_720x720q50.jpg",
        owner_id: "678686550e8974bdf60dfe64",
        style: "FORMAL",
        type: "SHIRT",
        updated_at: "2025-01-20T15:41:48.013Z",

        created_at: "2025-01-20T15:41:48.013Z",
      },
      {
        id: "678e6f3c66ae49496403d406",
        name: "Pajamas",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxBzp3QWCeKVUIyoBlJefRfqyOPRFWYhd7w&s",
        price: "66",
        About: "The most Stylish Pajamas for Parties",
        imgtwo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxBzp3QWCeKVUIyoBlJefRfqyOPRFWYhd7w&s",
        imgthree:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxBzp3QWCeKVUIyoBlJefRfqyOPRFWYhd7w&s",
        imgfour:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxBzp3QWCeKVUIyoBlJefRfqyOPRFWYhd7w&s",
        owner_id: "678686550e8974bdf60dfe64",
        style: "PARTY",
        type: "PAJAMAS",
        updated_at: "2025-01-20T15:43:56.997Z",
        created_at: "2025-01-20T15:43:56.997Z",
      },
      {
        id: "678e6f8766ae49496403d407",
        name: "Trousers",
        image_url:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "130",
        About: "Trousers by Redbull",
        imgtwo:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "FORMAL",
        type: "TROUSERS",
        updated_at: "2025-01-20T15:45:11.510Z",
        created_at: "2025-01-20T15:45:11.510Z",
      },
      {
        id: "678e6f8866ae49496403d408",
        name: "Trousers",
        image_url:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "130",
        About: "Trousers by Redbull",
        imgtwo:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "FORMAL",
        type: "TROUSERS",
        updated_at: "2025-01-20T15:45:12.319Z",
        created_at: "2025-01-20T15:45:12.319Z",
      },
      {
        id: "678e6f8866ae49496403d409",
        name: "Trousers",
        image_url:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "130",
        About: "Trousers by Redbull",
        imgtwo:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "FORMAL",
        type: "TROUSERS",
        updated_at: "2025-01-20T15:45:12.927Z",
        created_at: "2025-01-20T15:45:12.927Z",
      },
      {
        id: "678e6fcf66ae49496403d40a",
        name: "Black Jeans",
        image_url:
          "https://img.freepik.com/premium-photo/sleek-black-leather-pants-show-bold-edgy-modern-style-confident-fashion-statement_1224519-1896.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "99",
        About: "Black Jeans by LV",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "PARTY",
        type: "JEANS",
        updated_at: "2025-01-20T15:46:23.117Z",
        created_at: "2025-01-20T15:46:23.117Z",
      },
      {
        id: "678e702d66ae49496403d40b",
        name: "Blue Hoodie",
        image_url:
          "https://img.freepik.com/free-photo/silhouette-hooded-thief-walking-black-generated-by-ai_188544-43401.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "99",
        About: "Hoodie by Intel",
        imgtwo:
          "https://img.freepik.com/free-photo/silhouette-hooded-thief-walking-black-generated-by-ai_188544-43401.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/free-photo/silhouette-hooded-thief-walking-black-generated-by-ai_188544-43401.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/free-photo/silhouette-hooded-thief-walking-black-generated-by-ai_188544-43401.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "PARTY",
        type: "HOODIE",
        updated_at: "2025-01-20T15:47:57.280Z",
        created_at: "2025-01-20T15:47:57.280Z",
      },
      {
        id: "678e705c66ae49496403d40c",
        name: "Full Sized Hoodie",
        image_url:
          "https://img.freepik.com/premium-photo/hyper-realistic-navy-jogger-hooded-dress-ethereal-composition_899449-229708.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "130",
        About: "Only for Witches",
        imgtwo:
          "https://img.freepik.com/premium-photo/hyper-realistic-navy-jogger-hooded-dress-ethereal-composition_899449-229708.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/hyper-realistic-navy-jogger-hooded-dress-ethereal-composition_899449-229708.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/hyper-realistic-navy-jogger-hooded-dress-ethereal-composition_899449-229708.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "HOODIE",
        updated_at: "2025-01-20T15:48:44.576Z",

        created_at: "2025-01-20T15:48:44.576Z",
      },
      {
        id: "678e70ea66ae49496403d40d",
        name: "Yellow Hoodie",
        image_url:
          "https://img.freepik.com/premium-psd/hoodie-sweatshirt-mockup_699119-5372.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "120",
        About: "Hoodie by Prime Hydration",
        imgtwo:
          "https://img.freepik.com/premium-psd/hoodie-sweatshirt-mockup_699119-5372.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-psd/hoodie-sweatshirt-mockup_699119-5372.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-psd/hoodie-sweatshirt-mockup_699119-5372.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "HOODIE",
        updated_at: "2025-01-20T15:51:06.229Z",
        created_at: "2025-01-20T15:51:06.229Z",
      },
      {
        id: "678e713866ae49496403d40e",
        name: "Black & Yellow Hoodie",
        image_url:
          "https://img.freepik.com/premium-photo/yellow-raincoat-with-black-stripe-front_1186216-66938.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "150",
        About:
          "Black & Yellow Hoodie which will Shine you more than you ever did",
        imgtwo:
          "https://img.freepik.com/premium-photo/yellow-raincoat-with-black-stripe-front_1186216-66938.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/yellow-raincoat-with-black-stripe-front_1186216-66938.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/yellow-raincoat-with-black-stripe-front_1186216-66938.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "PARTY",
        type: "HOODIE",
        updated_at: "2025-01-20T15:52:24.383Z",
        created_at: "2025-01-20T15:52:24.383Z",
      },
      {
        id: "678e71a366ae49496403d40f",
        name: "Red Hoodie",
        image_url:
          "https://img.freepik.com/free-photo/hooded-silhouette-exercising-dark-mystery-background-generated-by-ai_188544-43310.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "140",
        About: "A RED HOODIE",
        imgtwo:
          "https://img.freepik.com/premium-photo/christmas-red-hoodie-mockup_776894-67644.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgthree:
          "https://img.freepik.com/premium-photo/christmas-red-hoodie-mockup_776894-67511.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        imgfour:
          "https://img.freepik.com/premium-photo/asian-man-playful-pose-solid-background_731930-78743.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "HOODIE",
        updated_at: "2025-01-20T15:54:11.150Z",
        created_at: "2025-01-20T15:54:11.150Z",
      },
      {
        id: "678f87d9cf6f8372d00e9992",
        name: "T-Shirt",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "299",
        About: "About Section",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:41:13.531Z",
        created_at: "2025-01-21T11:41:13.531Z",
      },
      {
        id: "678f87f0cf6f8372d00e9993",
        name: "T-SHIRT",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "299",
        About: "About",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:41:36.708Z",
        created_at: "2025-01-21T11:41:36.708Z",
      },
      {
        id: "678f87fdcf6f8372d00e9994",
        name: "T-Shirt",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "299",
        About: "About 2",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:41:49.648Z",
        created_at: "2025-01-21T11:41:49.648Z",
      },
      {
        id: "678f8815cf6f8372d00e9995",
        name: "T-SHIRT",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "277",
        About: "About x 3",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:42:13.919Z",
        created_at: "2025-01-21T11:42:13.919Z",
      },
      {
        id: "678f8825cf6f8372d00e9996",
        name: "T-Shirt",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "277",
        About: "About",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:42:29.862Z",
        created_at: "2025-01-21T11:42:29.862Z",
      },
      {
        id: "678f8836cf6f8372d00e9997",
        name: "T-Shirt",
        image_url:
          "https://img.freepik.com/premium-photo/3d-rendering-blank-white-t-shirt-isolated-mockup-high-resolution-4k_521057-2600.jpg",
        price: "277",
        About: "About x 4",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T11:42:46.069Z",
        created_at: "2025-01-21T11:42:46.069Z",
      },
      {
        id: "678f8c28cf6f8372d00e9998",
        name: "Trousers",
        image_url:
          "https://img.freepik.com/premium-photo/classic-black-mens-trousers-white-background_1177187-98912.jpg?uid=R164481731&ga=GA1.1.1718967155.1731662253&semt=ais_hybrid",
        price: "3360",
        About: "ABOUTT",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "TROUSERS",
        updated_at: "2025-01-21T11:59:36.501Z",
        created_at: "2025-01-21T11:59:36.501Z",
      },
      {
        id: "678fc173ce2864d7e60e0a72",
        name: "T-SHIRTS",
        image_url:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        price: "30",
        About: "T-SHIRTS",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T15:46:59.854Z",
        created_at: "2025-01-21T15:46:59.854Z",
      },
      {
        id: "678fc183ce2864d7e60e0a73",
        name: "T-Shirt",
        image_url:
          "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small_2x/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg",
        price: "34",
        About: "Tshirt",
        imgtwo: null,
        imgthree: null,
        imgfour: null,
        owner_id: "678686550e8974bdf60dfe64",
        style: "CASUAL",
        type: "T-SHIRT",
        updated_at: "2025-01-21T15:47:15.840Z",
        created_at: "2025-01-21T15:47:15.840Z",
      },
    ];
    set({ products: data });
  },
}));
