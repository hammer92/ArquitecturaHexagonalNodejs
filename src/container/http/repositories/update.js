module.exports = ( model, ...args) =>{
  args[1]['returning'] = true
  return model.update(...args);
}