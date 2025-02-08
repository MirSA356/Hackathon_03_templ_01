import { Rule } from "@sanity/types";

export default {
  name: "orders",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "shippingForm",
      title: "Shipping Form",
      type: "reference",
      to: [{ type: "contactForm" }],
      validation: (Rule: Rule) =>
        Rule.required().error("Shipping form reference is required"),
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "TrackingId",
              title: "TrackingId",
              type: "string",
              readOnly: true, // Sanity automatically assigns this
            },
            {
              name: "name",
              title: "Product Name",
              type: "string",
              validation: (Rule: Rule) =>
                Rule.required().error("Product name is required"),
            },
            {
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule: Rule) =>
                Rule.required()
                  .positive()
                  .error("Valid product price is required"),
            },
            {
              name: "qty",
              title: "Quantity",
              type: "number",
              validation: (Rule: Rule) =>
                Rule.required()
                  .integer()
                  .positive()
                  .error("Quantity must be a positive integer"),
            },
          ],
        },
      ],
      validation: (Rule: Rule) =>
        Rule.min(1).error("At least one product must be added to the order"),
    },
  ],
};





// import { defineType } from "sanity"

// export default defineType({
//     name: 'products',
//     title: 'Products',
//     type: 'document',
//     fields: [
//         {
//         name: 'name',
//         title: 'Name',
//         type: 'string',
//         },
//         {
//         name: 'price',
//         title: 'Price',
//         type: 'number',
//         },
//         {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//         },
//         {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//         },
//         {
//             name:"category",
//             title:"Category",
//             type: 'string',
//             options:{
//                 list:[
//                    {title: 'T-Shirt', value: 'tshirt'},
//                    {title: 'Short', value: 'short'}, 
//                    {title: 'Jeans', value: 'jeans'} ,
//                    {title: 'Hoddie', value: 'hoodie'} ,
//                    {title: 'Shirt', value: 'shirt'} ,
//                 ]
//             }
//         },
//         {
//             name:"discountPercent",
//             title:"Discount Percent",
//             type: 'number',
//         },
//         {
//             name:"new",
//             type: 'boolean',
//             title:"New",
//         },
//         {
//             name:"colors",
//             title:"Colors",
//             type: 'array',
//             of:[
//                 {type: 'string'}
//             ]
//         },
//         {
//             name:"sizes",
//             title:"Sizes",
//             type: 'array',
//             of:[
//                 {type: 'string'}
//             ]
//         }
//     ],
// })

// import { defineType } from "sanity"

// export default defineType({
//     name: 'products',
//     title: 'Products',
//     type: 'document',
//     fields: [
//         {
//         name: 'name',
//         title: 'Name',
//         type: 'string',
//         },
//         {
//         name: 'price',
//         title: 'Price',
//         type: 'number',
//         },
//         {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//         },
//         {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//         },
//         {
//             name:"category",
//             title:"Category",
//             type: 'string',
//             options:{
//                 list:[
//                    {title: 'T-Shirt', value: 'tshirt'},
//                    {title: 'Short', value: 'short'}, 
//                    {title: 'Jeans', value: 'jeans'} ,
//                    {title: 'Hoddie', value: 'hoodie'} ,
//                    {title: 'Shirt', value: 'shirt'} ,
//                 ]
//             }
//         },
//         {
//             name:"discountPercent",
//             title:"Discount Percent",
//             type: 'number',
//         },
//         {
//             name:"new",
//             type: 'boolean',
//             title:"New",
//         },
//         {
//             name:"colors",
//             title:"Colors",
//             type: 'array',
//             of:[
//                 {type: 'string'}
//             ]
//         },
//         {
//             name:"sizes",
//             title:"Sizes",
//             type: 'array',
//             of:[
//                 {type: 'string'}
//             ]
//         }
//     ],
// })

