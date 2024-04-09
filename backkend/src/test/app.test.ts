import { expect } from 'chai';
import app from '../index.js'
 import request from 'supertest'
import { login_post } from '../controllers/authcontrollers.js'; // Import your function
import express, { Request, Response } from 'express';
import sinon from 'sinon'; // Using sinon for mocking

before(function(done) {
    app.listen(2182, () => {
    console.log(`Server is running on port 3001`);
   });
  setTimeout(done, 1000);
});

describe('Contact Message API', () => {
  it('should return an a logged in user', function(done) {
      this.timeout(15000);
      const credentials={email:'muaekalovin@gmail.com',password:"1111111"}
      request(app)
       
      .post('/login')
      .send(credentials)
      .expect(200)
      .end((err, res) => {
          if (err)
              return done(err);
          console.log(res.body.user.isAdmin)
          expect(res.body).to.have.property('user');
          done();
      });
});

// Test logging in with invalid credentials


// Test logging in with missing fields



});
describe('SIGN UP API', () => {

  it('should allow uses who have valid email too sign up', function(done) {
    this.timeout(15000);
    const credentials={email:'hhsfmwewem',password:"45678mm"}
    request(app)
     
    .post('/signup')
    .send(credentials)
    .expect(400)
    .end((err, res) => {
        if (err)
            return done(err);
        
        expect(res.body).to.have.property('error');
        done();
    });
});
  
  // Test logging in with invalid credentials
  
  // Test logging in with missing fields
  
  
  
  });
  describe('contact us!', () => {

    it('should allow uses who have valid email too contact us', function(done) {
      this.timeout(15000);
      const credentials={name:'hhsfmwewem',email:"45678mm",message:"wertuijhgfcvgbhj"}
      request(app)
       
      .post('/contact')
      .send(credentials)
      .expect(400)
      .end((err, res) => {
          if (err)
              return done(err);
          
          expect(res.body).to.have.property('error');
          done();
      });
  });
    
    // Test logging in with invalid credentials
    
    // Test logging in with missing fields
    
    
    
    });
    