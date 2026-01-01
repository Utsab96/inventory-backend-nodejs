process.env.NODE_ENV = "test";


const request = require("supertest");
const app = require("../src/app");

describe("Inventory API", () => {
  let createdId;

  it("POST /api/inventory → create item", async () => {
    const res = await request(app)
      .post("/api/inventory")
      .send({
        product_name: "Test Product",
        sku : `SKU-${Date.now()}`,
        quantity: 20,
        price: 199.99
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    createdId = res.body.id;
  });

  it("GET /api/inventory → list items", async () => {
    const res = await request(app).get("/api/inventory");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("GET /api/inventory/:id → get by id", async () => {
    const res = await request(app).get(`/api/inventory/${createdId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data.id).toBe(createdId);
  });

  it("PATCH /api/inventory/:id/increase → increase stock", async () => {
    const res = await request(app)
      .patch(`/api/inventory/${createdId}/increase`)
      .send({ quantity: 5 });

    expect(res.statusCode).toBe(200);
  });

  it("DELETE /api/inventory/:id → delete item", async () => {
    const res = await request(app).delete(`/api/inventory/${createdId}`);
    expect(res.statusCode).toBe(200);
  });
});
