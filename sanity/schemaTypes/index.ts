import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { blogContentType } from "./blogContentType";
import { addressType } from "./addressType";
import { authorType } from "./authorType";
import { blogCategoryType } from "./blogCategoryType";
import { blogType } from "./blogType";
import { brandType } from "./brandType";
import { orderType } from "./orderType";
import { productType } from "./productType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    productType,
    orderType,
    brandType,
    blogType,
    blogCategoryType,
    blogContentType,
    authorType,
    addressType,
  ],
};
