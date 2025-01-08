var config = require("./dbconfig");
const sql = require("mssql/msnodesqlv8");

async function connectToDatabase() {
  try {
    let pool = await sql.connect(config);
    console.log("Connected to SQL Server!");
    pool.close(); // Close connection after use
  } catch (error) {
    console.error("Connection failed: ", error.message);
  }
}

connectToDatabase();

async function getdata_withQuery() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT * FROM [medoQRST].[dbo].[WardOverRegister]");
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }
  

module.exports = {
  connectToDatabase: connectToDatabase,
  getdata_withQuery:getdata_withQuery
};
