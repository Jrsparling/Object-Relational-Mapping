// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category);
Product.belongsTo(Category);

// team=category
// player=Product

// Categories have many Products
Category.hasMany(Product);
Product.belongsTo(Category);
// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)

Product.belongsToMany(Tag, { through: 'ProductTag' });
Tag.belongsToMany(Product, { through: 'ProductTag' });

// Actor = product
// movies = tag

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
