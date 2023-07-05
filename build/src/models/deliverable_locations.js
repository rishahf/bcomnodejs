"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const Models = __importStar(require("./index"));
const deliverableLocationsSchema = (0, ts_mongoose_1.createSchema)({
    product_id: ts_mongoose_1.Type.ref(ts_mongoose_1.Type.objectId({ default: null })).to('products', Models.Products),
    city_name: ts_mongoose_1.Type.string({ default: null }),
    is_deleted: ts_mongoose_1.Type.boolean({ default: false }),
    created_at: ts_mongoose_1.Type.string({ default: +new Date() }),
});
const DeliverableLocations = (0, ts_mongoose_1.typedModel)('deliverable_locations', deliverableLocationsSchema);
exports.default = DeliverableLocations;
