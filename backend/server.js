const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


// =========================
// STATIC UPLOADS
// =========================

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);


// =========================
// HOME API
// =========================

app.get("/", (req, res) => {
  res.send("Urban Bharat API is running!");
});


// =========================
// ALL PRODUCTS API
// =========================

app.get("/api/products", (req, res) => {

  const sql = `
    SELECT 
      products.id,
      products.name,
      products.price,
      products.sale_price,
      products.description,
      products.stock,
      categories.name AS category,
      product_images.image

    FROM products

    INNER JOIN categories
      ON products.category_id = categories.id

    LEFT JOIN product_images
      ON products.id = product_images.product_id

    WHERE products.status = 1
  `;

  db.query(sql, (err, results) => {

    if (err) {

      console.error("Database error:", err);

      return res.status(500).json({
        message: "Failed to fetch products"
      });

    }

    res.json(results);

  });

});


// =========================
// SINGLE PRODUCT DETAILS API
// =========================

app.get("/api/products/:id", (req, res) => {

  const productId = req.params.id;

  const productSql = `
    SELECT
      products.id,
      products.name,
      products.price,
      products.sale_price,
      products.description,
      products.stock,
      categories.name AS category

    FROM products

    INNER JOIN categories
      ON products.category_id = categories.id

    WHERE products.id = ?
      AND products.status = 1
  `;


  db.query(
    productSql,
    [productId],
    (err, productResults) => {

      if (err) {

        console.error(
          "Product database error:",
          err
        );

        return res.status(500).json({
          message: "Failed to fetch product"
        });

      }


      if (productResults.length === 0) {

        return res.status(404).json({
          message: "Product not found"
        });

      }


      // =========================
      // PRODUCT IMAGES
      // =========================

      const imageSql = `
        SELECT
          image

        FROM product_images

        WHERE product_id = ?

        ORDER BY sort_order ASC, id ASC
      `;


      db.query(
        imageSql,
        [productId],
        (imageErr, imageResults) => {

          if (imageErr) {

            console.error(
              "Image database error:",
              imageErr
            );

            return res.status(500).json({
              message: "Failed to fetch product images"
            });

          }


          res.json({

            product: productResults[0],

            images: imageResults

          });

        }
      );

    }
  );

});


// =========================
// SERVER
// =========================

const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );

});