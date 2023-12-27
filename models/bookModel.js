import db from "../config/database.js";

const BookModel = {
    getAllBooks: async () => {
        const [rows] = await db.query("SELECT * FROM books")
        return rows
    },
    getBookById: async (id) => {
        const [rows] = await db.query('SELECT * FROM books WHERE id = ?', [id]);
        return rows[0];
    },
    addBook: async (title, description, cover, price) => {
        const result = await db.query('INSERT INTO books (title, `desc`, cover, price) VALUES (?, ?, ?, ?)', [title, description, cover, price]);
        return result;
    },
    updateBook: async (id, title, description, cover, price) => {
        const result = await db.query(
          'UPDATE books SET title = ?, `desc` = ?, cover = ?, price = ? WHERE id = ?',
          [title, description, cover, price, id]
        );
        return result;
      },
    deleteBook: async (id) => {
        const result = await db.query('DELETE FROM books WHERE id = ?', [id]);
        return result;
    },
}

export default BookModel