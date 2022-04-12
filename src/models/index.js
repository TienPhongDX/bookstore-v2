// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, BookOrder, Book } = initSchema(schema);

export {
  Order,
  BookOrder,
  Book
};