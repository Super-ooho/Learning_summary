import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: 'api_db',
    user: 'root',
    password: 'admin123'
})

// 支持promise API
export default pool.promise()