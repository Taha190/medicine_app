export const suggestiveUrl = 'https://apidb.dvago.pk/AppAPIV3/GetSuggestiveProductsV2&Usedfor=Fever%20Relief&BranchCode=32'
export const fetchUrl = (slug: string): string => {
  return `https://apidb.dvago.pk/AppAPIV3/GetProductDetailBySlugV2&ProductSlug=${slug}&BranchCode=32`
}
