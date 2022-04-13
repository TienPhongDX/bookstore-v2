import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Order {
  readonly id: string;
  readonly user: string;
  readonly date?: string | null;
  readonly total?: number | null;
  readonly BookOrders?: (BookOrder | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class BookOrder {
  readonly id: string;
  readonly book_id: string;
  readonly order_id: string;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BookOrder, BookOrderMetaData>);
  static copyOf(source: BookOrder, mutator: (draft: MutableModel<BookOrder, BookOrderMetaData>) => MutableModel<BookOrder, BookOrderMetaData> | void): BookOrder;
}

export declare class Book {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly author?: string | null;
  readonly featured?: boolean | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Book, BookMetaData>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book, BookMetaData>) => MutableModel<Book, BookMetaData> | void): Book;
}