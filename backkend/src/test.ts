  import { expect } from "chai"
    import {app }from '../src/index'
    import request from 'supertest'
   
    before(function(done) {
        app.listen(3001, () => {
        console.log("Server is running on port 3001")
       });
      setTimeout(done, 1000);
  });
  
  describe('Contact Message API', () => {
      it('should return an array of messages', function(done) {
          this.timeout(15000);
          request(app)
              .get('/contact')
              
              .expect(200)
              .end((err, res) => {
                  if (err)
                      return done(err);
                  expect(res.body).to.be.an('the app crashed');
                  done();
             });
  });
  });

   