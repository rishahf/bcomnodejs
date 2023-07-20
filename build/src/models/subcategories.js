"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const mongoose_1 = require("mongoose");
const language = ["ENGLISH", "ARABIC"];
const size_type = [null, "NUMBER", "STRING"];
const size_string = ["S", "M", "L", "XL", "XXL", "XXXL"];
const SubCatergorySchema = (0, ts_mongoose_1.createSchema)({
    category_id: ts_mongoose_1.Type.ref(ts_mongoose_1.Type.objectId({ default: null })).to('categories', mongoose_1.models.Category),
    name: ts_mongoose_1.Type.string({ default: null }),
    size_type: ts_mongoose_1.Type.string({ default: null }),
    is_deleted: ts_mongoose_1.Type.boolean({ default: false }),
    language: ts_mongoose_1.Type.string({ default: "ENGLISH", enum: language }),
    updated_at: ts_mongoose_1.Type.string({ default: +new Date() }),
    created_at: ts_mongoose_1.Type.string({ default: +new Date() })
});
const SubCategory = (0, ts_mongoose_1.typedModel)('subcategories', SubCatergorySchema);
exports.default = SubCategory;
