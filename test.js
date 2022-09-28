const { spawn } = require('child_process');
const request = require('request');
const test = require('tape');

// Start the app
const env = Object.assign({}, process.env, {PORT: 5000});
const child = spawn('node', ['index.js'], {env});

test('responds to requests', (t) => {
  t.plan(4);

  //انتظر حتى يصبح الخادم جاهزًا
  child.stdout.on('data', _ => {
    // قم بتقديم طلب إلى تطبيقنا
    request('http://127.0.0.1:5000', (error, response, body) => {
      // أوقف الخادم
      child.kill();

      // No error
      t.false(error);
      // Successful response
      t.equal(response.statusCode, 200);
      // Assert content checks
      t.notEqual(body.indexOf("<title>Node.js Getting Started on Heroku</title>"), -1);
      t.notEqual(body.indexOf("Getting Started with Node on Heroku"), -1);
    });
  });
});
