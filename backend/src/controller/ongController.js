const crypto = require('crypto');
const connection = require('../database/connection');
module.exports = {

  async create(req,res){
      const { name, whatsapp, email, uf, city} = req.body;
      const id = crypto.randomBytes(4).toString('HEX');

      await connection('ongs').insert({
        id, name,whatsapp, email, uf, city
      });
      return res.json({id});
  },

  async index(req,res){
    const ongs = await connection('ongs').select('*');
    return res.json(ongs);
  }

}
