var test = require('tap').test;
var fs = require('fs');
var spawn = require('child_process').spawn;

test('needs 2 arguments', function(t) {
  var spritezero = spawn('node', [
    './bin/spritezero']);
  spritezero.on('close', function (code) {
    t.ok(code > 0, 'closes early');
    t.end();
  });
});

test('provides help', function(t) {
  var spritezero = spawn('node', [
    './bin/spritezero', '--help']);
  spritezero.on('close', function (code) {
    t.ok(code > 0, 'closes early');
    t.end();
  });
});

test('generate 1x sprites', function(t) {
  var spritezero = spawn('node', [
    './bin/spritezero',
    'test/output/maki',
    'test/fixture/input']);
  spritezero.stderr.on('data', function(err) {
    t.fail(err.toString());
  });
  spritezero.on('close', function (code) {
    t.equal(code, 0);
    t.deepEqual(
      JSON.parse(fs.readFileSync('test/output/maki.json')),
      JSON.parse(fs.readFileSync('test/fixture/output/maki.json')), 'layout');
    t.end();
  });
});

test('generate 2x sprites', function(t) {
  var spritezero = spawn('node', [
    './bin/spritezero',
    'test/output/maki-r-2',
    'test/fixture/input',
    '--ratio', 2]);
  spritezero.on('close', function (code) {
    t.equal(code, 0);
    t.deepEqual(
      JSON.parse(fs.readFileSync('test/output/maki-r-2.json')),
      JSON.parse(fs.readFileSync('test/fixture/output/maki-r-2.json')), 'layout');
    t.end();
  });
});

test('generate --retina sprites', function(t) {
  var spritezero = spawn('node', [
    './bin/spritezero',
    'test/output/maki-retina',
    'test/fixture/input',
    '--retina']);
  spritezero.on('close', function (code) {
    t.equal(code, 0);
    t.deepEqual(
      JSON.parse(fs.readFileSync('test/output/maki-retina.json')),
      JSON.parse(fs.readFileSync('test/fixture/output/maki-r-2.json')), 'layout');
    t.end();
  });
});

test('generate --unique sprites', function(t) {
  var spritezero = spawn('node', [
    './bin/spritezero',
    'test/output/maki-unique',
    'test/fixture/input',
    '--unique']);
  spritezero.on('close', function (code) {
    t.equal(code, 0);
    t.deepEqual(
      JSON.parse(fs.readFileSync('test/output/maki-unique.json')),
      JSON.parse(fs.readFileSync('test/fixture/output/maki-unique.json')), 'layout');
    t.end();
  });
});

