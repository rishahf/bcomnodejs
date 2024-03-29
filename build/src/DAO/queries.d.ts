declare const save_data: (model: any, data: any) => Promise<unknown>;
declare const get_data: (model: any, query: any, projection: any, options: any) => Promise<unknown>;
declare const get_single_data: (model: any, query: any, projection: any, options: any) => Promise<unknown>;
declare const get_unique_data: (model: any, key_name: string, query: any, options: any) => Promise<unknown>;
declare const find_and_update: (model: any, query: any, update: any, options: any) => Promise<unknown>;
declare const update_many: (model: any, query: any, update: any) => Promise<unknown>;
declare const remove_data: (model: any, query: any) => Promise<unknown>;
declare const remove_many: (model: any, query: any) => Promise<unknown>;
declare const populate_data: (model: any, query: any, projection: any, options: any, collection_options: any) => Promise<unknown>;
declare const deep_populate_data: (model: any, query: any, projection: any, options: any, coll_options: any, pop_options: any) => Promise<any>;
declare const count_data: (model: any, query: any) => Promise<unknown>;
declare const aggregate_data: (model: any, group: any, options: any) => Promise<unknown>;
declare const aggregate_with_populate_data: (model: any, group: any, options: any, populate_options: any) => Promise<any>;
declare const insert_data: (model: any, data: any, options: any) => Promise<unknown>;
declare const insert_many: (model: any, data: any, options: any) => Promise<unknown>;
declare const bulk_find_and_update_one: (bulk: any, query: any, update: any, options: any) => Promise<unknown>;
declare const bulk_find_and_update: (bulk: any, query: any, update: any, options: any) => Promise<unknown>;
export { save_data, get_data, get_single_data, get_unique_data, find_and_update, update_many, remove_data, remove_many, populate_data, deep_populate_data, count_data, aggregate_data, aggregate_with_populate_data, insert_data, insert_many, bulk_find_and_update_one, bulk_find_and_update };
