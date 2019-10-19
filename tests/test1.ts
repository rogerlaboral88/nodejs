
import 'mocha';
import { App } from '../src/app';
import chai = require('chai')
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = require('chai').expect;
let app = new App();

describe('Pruebas Unitarias', () => {

  before(function(done){
    app.listen();
    done();
  })

  it('Prueba de servicio enviando array de numeros', function(done) {
    chai.request('http://localhost:3000')
      .post('/test')
      .send({
        "array":[5,3,6,7,4]
      })
      .end(function(err, res){
        console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Prueba de servicio suma', function(done) {
    chai.request('http://localhost:3000')
      .post('/test')
      .send({
        "array":[10,2]
      })
      .end(function(err, res){
        console.log(res.body.response.data.suma);
        expect(res.body.response.data.suma).to.be.equal(12);
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Prueba de servicio resta', function(done) {
    chai.request('http://localhost:3000')
      .post('/test')
      .send({
        "array":[10,2]
      })
      .end(function(err, res){
        console.log(res.body.response.data.resta);
        expect(res.body.response.data.resta).to.be.equal(8);
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Prueba de servicio multiplicacion', function(done) {
    chai.request('http://localhost:3000')
      .post('/test')
      .send({
        "array":[10,2]
      })
      .end(function(err, res){
        console.log(res.body.response.data.multiplicacion);
        expect(res.body.response.data.multiplicacion).to.be.equal(20);
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Prueba de servicio division', function(done) {
    chai.request('http://localhost:3000')
      .post('/test')
      .send({
        "array":[10,2]
      })
      .end(function(err, res){
        console.log(res.body.response.data.division);
        expect(res.body.response.data.division).to.be.equal(5);
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Prueba de servicio enviando array con una letra', function(done) {
      chai.request('http://localhost:3000')
        .post('/test')
        .send({
          "array":[5,3,"A",7,4]
        })
        .end(function(err, res){
          console.log(res.body);
          expect(res).to.have.status(422);
          done();
        });
    });

    it('Prueba de servicio enviando string', function(done) {
      chai.request('http://localhost:3000')
        .post('/test')
        .send({
          "array":"A"
        })
        .end(function(err, res){
          console.log(res.body);
          expect(res).to.have.status(422);
          done();
        });
    });

    it('Prueba de servicio enviando number', function(done) {
      chai.request('http://localhost:3000')
        .post('/test')
        .send({
          "array":5
        })
        .end(function(err, res){
          console.log(res.body);
          expect(res).to.have.status(422);
          done();
        });
    });

    it('Prueba de servicio enviando arreglo vacio', function(done) {
      chai.request('http://localhost:3000')
        .post('/test')
        .send({
          "array":[]
        })
        .end(function(err, res){
          console.log(res.body);
          expect(res).to.have.status(422);
          done();
        });
    });
    
})