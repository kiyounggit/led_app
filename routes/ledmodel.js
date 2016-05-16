var mongoose = require('mongoose');

mongoose.connect('mongodb://kiyoung:kiyoung@192.168.170.3:27017/kiyoung');

var ledSchema = new mongoose.Schema({
  type : String,
  name : String,
  switch : String
});

var ledmodel = mongoose.model('LED',ledSchema);

exports.getAllLed = function(req, res){
  console.log('GET /api/leds');
  return ledmodel.find(function(err,leds){
    if(err){
      console.log(err);
      return res.send(err);
    }
    return res.render('sensors', {'sensors' : leds});
  });
};

exports.addLed = function(req, res){
  console.log("addLed : "+ req.body.name);
  var LED = new ledmodel();
  LED.type = req.body.type;
  LED.name = req.body.name;
  LED.switch = req.body.switch;
  return LED.save(function(err){
    if(err){
      console.log(err);
      return res.send(err);
    }
  });
};

exports.getLedById = function(req,res){
 console.log("Get /api/led/" + req.params.id);
  return ledmodel.findById(req.params.id, function(err, led){
    if(err)
      res.send(err);
    res.send(led);
  });
};

exports.updateLed = function(req, res){
  ledmodel.findById(req.params.id, function(err, led){
    if(err)
      return res.send(err);
    led.switch = req.body.switch;
    led.save(function(err){
      if(err)
        return res.send(err);
      return res.json({switch: led.switch, message:'led switch updated'});
    });
  });
};

exports.deleteLedById = function(req, res){
  console.log("Deleting a led : " + req.params.id);
  return ledmodel.remove({_id : req.params.id}, function(err, led){
    if(err){
      console.lg(err);
      return res.send(err);
    }else{
      return res.json({message: "ID(" +req.params.id+") Suceesfully deleted"});
    }
  });
};
