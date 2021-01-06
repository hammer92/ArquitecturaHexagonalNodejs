module.exports = ( model, { attributes, page, paginate, order, where }) =>{
  let options = {}
  if (attributes) options["attributes"] = attributes.split(',')
  if (page) options["page"] = page
  if (paginate) options["paginate"] = paginate
  if (order) options["order"] = order
  if (where) options['where'] = where

  return model.paginate(options);
}