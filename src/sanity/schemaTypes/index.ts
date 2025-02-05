// import { type SchemaTypeDefinition } from 'sanity'
// import product from './products'
// import orders from './orders'
// import ShippingForm from './contact'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [product,orders,ShippingForm],
// }


import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import orders from './orders'
// import shippingForm from './shippingForm'
import contactForm from "./contact"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,contactForm,orders],
}