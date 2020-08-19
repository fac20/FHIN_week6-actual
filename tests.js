const router = require("router");
const test = require("tape")

test("Sever test status is 200", t => {
        supertest(router)
            .get("/")
            .expect(200)
            .expect("content-type", "text/plain")
            .end((error, response) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log("connected");
                }
            });


})