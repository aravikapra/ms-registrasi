// models/mahasiswa.js

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    static associate(models) {
      // Define associations here (if any)
    }
  }
  Mahasiswa.init(
    {
      reg_id: DataTypes.INTEGER,
      nama: DataTypes.STRING(100),
      alamat: DataTypes.STRING(100),
      jenis_kelamin: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Mahasiswa',
      tableName: 'tbl_mahasiswa',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'modified_at',
    }
  );
  return Mahasiswa;
};
