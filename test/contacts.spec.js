import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server";

// configure chai
chai.use(chaiHttp);
chai.should();

describe("Contacts", () => {
  describe("Get /", () => {
    it("should get all contacts", done => {
      chai
        .request(app)
        .get("/contacts")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
